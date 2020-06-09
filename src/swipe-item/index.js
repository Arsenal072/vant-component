import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSwipe')],

  props: {
    default: String
  },

  data() {
    return {
      offset: 0
    };
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },

  render() {
    const {
      vertical,
      computedWidth,
      computedHeight,
      active,
      count,
      type
    } = this.parent;

    let scale = '';
    if (type === 'card') {
      if (this.index !== active) {
        scale = 'scale(0.85)';
      }
      if (this.index === 0 && active === count) {
        scale = '';
      }
    }

    const style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px) ${scale}`,
      backgroundImage:
        this.default && this.default !== '1' && this.default !== '2'
          ? `url(${this.default}`
          : ''
    };

    return (
      <div
        class={bem([
          {
            default1: this.default === '1',
            default2: this.default === '2'
          },
          type
        ])}
        style={style}
        {...{ on: this.$listeners }}
      >
        {this.slots()}
      </div>
    );
  }
});
