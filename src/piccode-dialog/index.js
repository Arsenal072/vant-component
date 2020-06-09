import { createNamespace } from '../utils';
import Overlay from '../overlay';
import Password from '../password-input';
import Keyboard from '../number-keyboard';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('piccode-dialog');

export default createComponent({
  props: {
    show: Boolean,
    length: { type: Number, default: 4 },
    title: String,
    pic: String,
    value: String,
    gutter: {
      type: [Number, String],
      default: '8'
    },
    mask: Boolean,
    errorInfo: String,
    focused: { type: Boolean, default: true },
    closable: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      valueText: ''
    };
  },

  methods: {
    onFocus() {
      this.$emit('focus');
    },
    input(text) {
      this.$emit('input', text);
      this.valueText = (this.value + text).slice(0, 4);
      if (this.valueText.length === this.length) {
        this.check();
      }
    },
    delete() {
      this.valueText = this.valueText.slice(0, this.value.length - 1);
      this.$emit('delete');
    },
    check() {
      this.$emit('check', this.valueText);
    },
    refresh() {
      this.$emit('refresh');
    },
    close() {
      this.show && this.$emit('close');
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

    const genTitle =
      this.slots('title') ||
      (this.title && <div class={bem('title')}>{this.title}</div>);

    const passwordInput = (
      <div class={bem('body')}>
        {this.errorInfo && this.value.length === this.length && (
          <div class={[bem('error-info'), 'van-multi-ellipsis--l2']}>
            {this.errorInfo}
          </div>
        )}
        <div class={bem('code')} onClick={this.refresh}>
          <img class={bem('pic')} src={this.pic}></img>
          <div class={bem('icon')}>
            <Icon name="replay" color="#999999 " size={26} />
          </div>
        </div>
        <Password
          value={this.value}
          length={this.length}
          focused={this.focused}
          gutter={this.gutter}
          mask={this.mask}
          onFocus={this.onFocus}
        />
      </div>
    );

    return (
      <Overlay show={this.show} class={bem()}>
        <div class={bem('wrapper')}>
          {this.closable && closeIcon}
          {genTitle}
          {this.slots()}
          {passwordInput}
        </div>
        <Keyboard
          show={this.show}
          onInput={this.input}
          onDelete={this.delete}
        />
      </Overlay>
    );
  }
});
