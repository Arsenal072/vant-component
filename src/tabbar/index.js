import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP } from '../utils/constant';

const [createComponent, bem] = createNamespace('tabbar');

export default createComponent({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    transparent: Boolean
  },

  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },

  methods: {
    setActiveItem() {
      this.children.forEach((item, index) => {
        item.active = (item.name || index) === this.value;
      });
    },

    onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },

  render() {
    return (
      <div
        style={{ zIndex: this.zIndex }}
        class={[
          { [BORDER_TOP]: this.border },
          bem({
            fixed: this.fixed,
            'safe-area-inset-bottom': this.safeAreaInsetBottom,
            transparent: this.transparent
          })
        ]}
      >
        {this.slots()}
      </div>
    );
  }
});
