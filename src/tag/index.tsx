import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { BORDER_SURROUND } from '../utils/constant';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type TagType = 'default' | 'success' | 'info' | 'danger' | 'warning';

export type TagSize = 'small';

export type TagProps = {
  type: TagType;
  size?: TagSize;
  mark?: boolean;
  color?: string;
  plain?: boolean;
  round?: boolean;
  textColor?: string;
  closeable?: boolean;
  single?: boolean;
};

const [createComponent, bem] = createNamespace('tag');

function Tag(
  h: CreateElement,
  props: TagProps,
  slots: DefaultSlots,
  ctx: RenderContext<TagProps>
) {
  const { type, mark, plain, color, round, size, single } = props;

  const key = plain ? 'color' : 'backgroundColor';
  const style = { [key]: color };

  if (props.textColor) {
    style.color = props.textColor;
  }

  const classes: { [key: string]: any } = { mark, plain, round, single };
  if (size) {
    classes[size] = size;
  }

  const Content = (
    <span
      style={style}
      class={[bem([classes, type]), { [BORDER_SURROUND]: plain }]}
      {...inherit(ctx, true)}
    >
      {mark && (
        <span class={[bem('mark-inner'), { [BORDER_SURROUND]: plain }]}>
          {slots.default && slots.default()}
        </span>
      )}
      {!mark && slots.default && slots.default()}
      {!mark && props.closeable && (
        <Icon
          name="cross"
          class={bem('close')}
          onClick={() => {
            emit(ctx, 'close');
          }}
        />
      )}
    </span>
  );

  if (props.closeable) {
    return <transition name="van-fade">{Content}</transition>;
  }

  return Content;
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: {
    type: Boolean,
    default: true
  },
  round: Boolean,
  textColor: String,
  closeable: Boolean,
  type: {
    type: String,
    default: 'default'
  },
  single: Boolean
};

export default createComponent<TagProps>(Tag);
