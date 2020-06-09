import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type DividerProps = {
  dashed?: boolean;
  hairline: boolean;
  borderColor?: string;
  contentPosition: 'left' | 'center' | 'right';
  margin: number | string;
};

const [createComponent, bem] = createNamespace('divider');

function Divider(
  h: CreateElement,
  props: DividerProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  return (
    <div
      role="separator"
      style={{
        borderColor: props.borderColor,
        margin:
          typeof props.margin === 'number'
            ? `${props.margin}px 0`
            : props.margin
      }}
      class={bem({
        dashed: props.dashed,
        hairline: props.hairline,
        [`content-${props.contentPosition}`]: slots.default
      })}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  },
  margin: [Number, String]
};

export default createComponent<DividerProps>(Divider);
