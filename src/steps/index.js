import { createNamespace } from '../utils';
import { PRIMARY } from '../utils/constant';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('steps');

export default createComponent({
  mixins: [ParentMixin('vanSteps')],

  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: PRIMARY
    },
    activeIcon: String,
    length: Number
  },

  render() {
    return (
      <div
        class={bem([
          this.direction,
          this.length && `${this.direction}-${this.length}`
        ])}
      >
        <div class={bem('items')}>{this.slots()}</div>
      </div>
    );
  }
});
