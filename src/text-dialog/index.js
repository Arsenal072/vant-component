import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import Overlay from '../overlay';
import Icon from '../icon';
import Button from '../button';
import Checkbox from '../checkbox';

const [createComponent, bem] = createNamespace('text-dialog');

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    body: [Array, String],
    mask: Boolean,
    check: { type: Boolean, default: true },
    checkboxLabel: String,
    buttonText: String
  },
  computed: {
    proxyCheck: {
      get() {
        return this.check;
      },
      set(val) {
        this.$emit('toggle', val);
      }
    }
  },
  methods: {
    close() {
      this.show && this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    }
  },

  render() {
    const closeIcon = (
      <Icon
        role="button"
        tabindex="0"
        name="cross"
        class={bem('close-icon')}
        onClick={this.close}
      />
    );

    const genTitle = this.slots('title') || (
      <div class={bem('title')}>{this.title}</div>
    );

    const genBody = (
      <div class={bem('body')}>
        {typeof this.body === 'string' ? (
          <div class={bem('content')}>{this.body}</div>
        ) : (
          this.body instanceof Array &&
          this.body.map(item => (
            <div class={bem('part')}>
              {!!item.title && <div class={bem('subtitle')}>{item.title}</div>}
              <div class={bem('content')}>{item.content}</div>
            </div>
          ))
        )}
      </div>
    );

    const genMask = this.mask && (
      <div class={[bem('line'), BORDER_BOTTOM]}>
        {this.mask && <div class={bem('mask')}></div>}
      </div>
    );

    const genCheckbox = (this.slots('checkbox-label') ||
      this.checkboxLabel) && (
      <div class={bem('checkbox')}>
        <Checkbox plain icon-size={16} v-model={this.proxyCheck}>
          {this.slots('checkbox-label') || <span>{this.checkboxLabel}</span>}
        </Checkbox>
      </div>
    );

    const genButton = this.buttonText && (
      <Button type="primary" block class={bem('button')} onClick={this.confirm}>
        {this.buttonText}
      </Button>
    );

    return (
      <Overlay show={this.show} class={bem()}>
        <div class={bem('wrapper')}>
          {closeIcon}
          {genTitle}
          {genBody}
          {genMask}
          {genCheckbox}
          {genButton}
          {this.slots()}
        </div>
      </Overlay>
    );
  }
});
