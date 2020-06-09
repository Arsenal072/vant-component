import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button from '../button';
import RadioGroup from '../radio-group';
import SubmitBar from '../submit-bar';
import AddressItem, { AddressItemData } from './Item';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type AddressListProps = {
  value?: string | number;
  switchable: boolean;
  disabledText?: string;
  addButtonText?: string;
  list?: AddressItemData[];
  disabledList?: AddressItemData[];
};

export type AddressListSlots = DefaultSlots & {
  top?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('address-list');

function AddressList(
  h: CreateElement,
  props: AddressListProps,
  slots: AddressListSlots,
  ctx: RenderContext<AddressListProps>
) {
  function genList(list?: AddressItemData[], disabled?: boolean) {
    if (!list) {
      return;
    }

    return list.map((item, index) => (
      <AddressItem
        data={item}
        key={item.id}
        disabled={disabled}
        switchable={props.switchable}
        onSelect={() => {
          emit(ctx, disabled ? 'select-disabled' : 'select', item, index);

          if (!disabled) {
            emit(ctx, 'input', item.id);
          }
        }}
        onEdit={() => {
          emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
        }}
        onClick={() => {
          emit(ctx, 'click-item', item, index);
        }}
      />
    ));
  }

  const List = genList(props.list);
  const DisabledList = genList(props.disabledList, true);

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top && slots.top()}
      <RadioGroup value={props.value}>{List}</RadioGroup>
      {props.disabledText && (
        <div class={bem('disabled-text')}>{props.disabledText}</div>
      )}
      {DisabledList}
      {slots.default && slots.default()}
      {props.addButtonText && (
        <SubmitBar>
          <Button
            type="danger"
            block
            class={bem('add')}
            text={props.addButtonText}
            onClick={() => {
              emit(ctx, 'add');
            }}
          />
        </SubmitBar>
      )}
    </div>
  );
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};

export default createComponent<AddressListProps>(AddressList);
