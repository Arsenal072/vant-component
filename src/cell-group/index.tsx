import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { BORDER_BOTTOM } from '../utils/constant';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

export type CellGroupProps = {
  title?: string;
  border: boolean;
};

export type CellGroupSlots = DefaultSlots & {
  title?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('cell-group');

function CellGroup(
  h: CreateElement,
  props: CellGroupProps,
  slots: CellGroupSlots,
  ctx: RenderContext<CellGroupProps>
) {
  const Group = (
    <div
      class={[bem(), { [BORDER_BOTTOM]: props.border }]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );

  if (props.title || slots.title) {
    return (
      <div>
        <div class={[bem('title'), BORDER_BOTTOM]}>
          {slots.title ? slots.title() : props.title}
        </div>
        {Group}
      </div>
    );
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};

export default createComponent<CellGroupProps>(CellGroup);
