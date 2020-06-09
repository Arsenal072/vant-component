import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('vanRadio')],

  props: {
    value: null,
    disabled: Boolean,
    checkedColor: String,
    iconSize: [Number, String],
    inline: Boolean
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  },

  render() {
    return (
      <div class={bem({inline: this.inline})} role="radiogroup">
        {this.slots()}
      </div>
    );
  }
});
