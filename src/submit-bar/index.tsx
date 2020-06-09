import { createNamespace, addUnit } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_TOP } from '../utils/constant';
import Button, { ButtonType } from '../button';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type SubmitBarProps = {
  tip?: string;
  tipIcon?: string;
  label?: string;
  price?: number;
  loading?: boolean;
  currency: string;
  disabled?: boolean;
  buttonType: ButtonType;
  buttonText?: string;
  suffixLabel?: string;
  decimalLength: number;
  safeAreaInsetBottom?: boolean;
  border: boolean;
  height: number | string;
};

export type SubmitBarSlots = DefaultSlots & {
  top?: ScopedSlot;
  tip?: ScopedSlot;
  left?: ScopedSlot;
  suffixLabel?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('submit-bar');

function SubmitBar(
  h: CreateElement,
  props: SubmitBarProps,
  slots: SubmitBarSlots,
  ctx: RenderContext<SubmitBarProps>
) {
  const { tip, price, tipIcon } = props;

  function Text() {
    if (typeof price === 'number') {
      const priceText = `${(price / 100).toFixed(props.decimalLength)}`;

      return (
        <div class={bem('text')}>
          <span class={bem('label')}>{props.label || t('label')}</span>
          <span class={bem('price')}>
            {props.currency !== '元' && (
              <i class={bem('currency')}>{props.currency}</i>
            )}
            <span class={bem('price-text')}>{priceText}</span>
            {props.currency === '元' && (
              <i class={bem('currency')}>{props.currency}</i>
            )}
          </span>
          <span class={bem('suffix-label')}>
            {(slots.suffixLabel && slots.suffixLabel()) || props.suffixLabel}
          </span>
        </div>
      );
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return (
        <div class={bem('tip')}>
          {tipIcon && <Icon class={bem('tip-icon')} name={tipIcon} />}
          {tip && <span class={bem('tip-text')}>{tip}</span>}
          {slots.tip && slots.tip()}
        </div>
      );
    }
  }

  return (
    <div class={bem('wrapper')} style={{ height: addUnit(props.height) }}>
      <div
        class={[
          bem({
            'safe-area-inset-bottom': props.safeAreaInsetBottom
          }),
          props.border ? BORDER_TOP : ''
        ]}
        {...inherit(ctx)}
      >
        {slots.top && slots.top()}
        {Tip()}
        <div class={bem('bar')}>
          {slots.default && slots.default()}
          {!slots.default && slots.left && slots.left()}
          {!slots.default && Text()}
          {!slots.default && (
            <Button
              class={bem('button')}
              type={props.buttonType}
              loading={props.loading}
              disabled={props.disabled}
              text={props.loading ? '' : props.buttonText}
              onClick={() => {
                emit(ctx, 'submit');
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '元'
  },
  buttonType: {
    type: String,
    default: 'warning'
  },
  border: {
    type: Boolean,
    default: true
  },
  height: [Number, String]
};

export default createComponent<SubmitBarProps, {}, SubmitBarSlots>(SubmitBar);
