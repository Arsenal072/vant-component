import { createNamespace, addUnit } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('grid');

export default createComponent({
  mixins: [ParentMixin('vanGrid')],

  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    rowNum: {
      type: Number,
      default: 1
    },
    center: {
      type: Boolean,
      default: true
    },
    border: Boolean
  },

  computed: {
    style() {
      const { gutter } = this;

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter)
        };
      }
    }
  },

  render() {
    return (
      <div class={[bem()]} style={this.style}>
        {this.slots()}
      </div>
    );
  }
});
