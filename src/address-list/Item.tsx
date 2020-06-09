import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import Tag from '../tag';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type AddressItemData = {
  id: string | number;
  tel: string | number;
  name: string;
  address: string;
  default: boolean;
};

export type AddressItemProps = {
  data: AddressItemData;
  disabled?: boolean;
  switchable?: boolean;
};

export type AddressItemEvents = {
  onEdit(): void;
  onClick(): void;
  onSelect(): void;
};

const [createComponent, bem] = createNamespace('address-item');

function AddressItem(
  h: CreateElement,
  props: AddressItemProps,
  slots: DefaultSlots,
  ctx: RenderContext<AddressItemProps>
) {
  const { disabled, switchable } = props;

  function onClick() {
    if (switchable) {
      emit(ctx, 'select');
    }

    emit(ctx, 'click');
  }

  const genRightIcon = () => (
    <Icon
      name="edit"
      class={bem('edit')}
      onClick={(event: Event) => {
        event.stopPropagation();
        emit(ctx, 'edit');
        emit(ctx, 'click');
      }}
    />
  );

  const genContent = () => {
    const { data } = props;
    const Info = [
      <div class={bem('title')}>
        <span class={bem('name')}>{data.name}</span>
        {data.tel}
        {data.default && (
          <Tag type="success" class={bem('tag')}>
            默认
          </Tag>
        )}
      </div>,
      <div class={[bem('address'), 'van-ellipsis']}>{data.address}</div>
    ];

    return switchable && !disabled ? (
      <Radio name={data.id} iconSize={22} class={bem('radio')}>
        {Info}
      </Radio>
    ) : (
      Info
    );
  };

  return (
    <Cell
      class={bem({ disabled })}
      valueClass={bem('value')}
      clickable={switchable && !disabled}
      scopedSlots={{
        default: genContent,
        'right-icon': genRightIcon
      }}
      onClick={onClick}
      {...inherit(ctx)}
    />
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};

export default createComponent<AddressItemProps, AddressItemEvents>(
  AddressItem
);
