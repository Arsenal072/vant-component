import Icon from '../icon';
import Cell from '../cell';
import { cellProps } from '../cell/shared';
import { preventDefault } from '../utils/dom/event';
import { resetScroll } from '../utils/dom/reset-scroll';
import { BORDER_BOTTOM } from '../utils/constant';
import { createNamespace, isObj, isDef, addUnit } from '../utils';

const [createComponent, bem] = createNamespace('field');

export default createComponent({
  inheritAttrs: false,

  props: {
    ...cellProps,
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    rightIconSize: [Number, String],
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: {
      type: String,
      default: 'right'
    },
    errorMessage: String,
    errorMessageAlign: String,
    showWordLimit: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    placeholderLength: Number
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear() {
      return (
        this.clearable &&
        this.value !== '' &&
        isDef(this.value) &&
        !this.readonly
      );
    },

    listeners() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };

      delete listeners.click;

      return listeners;
    },

    labelStyle() {
      const { labelWidth } = this;
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    }
  },

  methods: {
    focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },

    blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },

    // native maxlength not work when type = number
    format(target = this.$refs.input) {
      if (!target) {
        return;
      }

      let { value } = target;
      const { maxlength } = this.$attrs;

      if (
        this.type === 'number' &&
        isDef(maxlength) &&
        value.length > maxlength
      ) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },

    onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },

    onFocus(event) {
      this.$emit('focus', event);

      // hack for safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.$emit('blur', event);
      resetScroll();
    },

    onClick(event) {
      this.$emit('click', event);
    },

    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey =
          (keyCode >= 48 && keyCode <= 57) ||
          (keyCode === 46 && allowPoint) ||
          keyCode === 45;

        if (!isValidKey) {
          preventDefault(event);
        }
      }

      // trigger blur after click keyboard search button
      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },

    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },

    genInput() {
      const inputSlot = this.slots('input');

      if (inputSlot) {
        return <div class={bem('control', this.inputAlign)}>{inputSlot}</div>;
      }

      const inputProps = {
        ref: 'input',
        class: bem('control', [this.type !== 'textarea' ? this.inputAlign : '']),
        domProps: {
          value: this.value
        },
        attrs: {
          ...this.$attrs,
          readonly: this.readonly
        },
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [
          {
            name: 'model',
            value: this.value
          }
        ]
      };

      if (this.type === 'textarea') {
        return <textarea {...inputProps} />;
      }

      return (
        <input
          type={this.type}
          {...inputProps}
          size={this.placeholderLength && this.placeholderLength * 2}
        />
      );
    },

    genLeftIcon() {
      const showLeftIcon = this.slots('left-icon') || this.leftIcon;
      if (showLeftIcon) {
        return (
          <div class={bem('left-icon')} onClick={this.onClickLeftIcon}>
            {this.slots('left-icon') || <Icon name={this.leftIcon} />}
          </div>
        );
      }
    },

    genRightIcon() {
      const { slots } = this;
      const showRightIcon = slots('right-icon') || this.rightIcon;
      if (showRightIcon) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {slots('right-icon') || (
              <Icon name={this.rightIcon} size={addUnit(this.rightIconSize)} />
            )}
          </div>
        );
      }
    },

    getTextareaLabel() {
      if (this.type === 'textarea' && this.label) {
        return (
          <div class={[bem('textarea-label'), BORDER_BOTTOM]}>
            <span class={bem('textarea-label-text')}>{this.label}</span>
          </div>
        );
      }
    },

    genWordLimit() {
      if (this.showWordLimit && this.$attrs.maxlength) {
        return (
          <div class={bem('word-limit')}>
            <span
              class={
                this.value.length >= this.$attrs.maxlength
                  ? 'max-count'
                  : this.value.length > 0
                    ? 'count'
                    : ''
              }
            >
              {this.value.length}
            </span>
            /{this.$attrs.maxlength}
          </div>
        );
      }
    }
  },

  render() {
    const { slots, labelAlign } = this;

    const scopedSlots = {
      icon: this.genLeftIcon
    };
    if (slots('label')) {
      scopedSlots.title = () => slots('label');
    }

    return (
      <div
        class={bem(this.type === 'textarea' ? 'textarea-wrap' : 'field-wrap', {
          required: this.required
        })}
      >
        {this.getTextareaLabel()}
        <Cell
          icon={this.leftIcon}
          size={this.size}
          title={this.label}
          center={this.center}
          border={this.border}
          isLink={this.isLink}
          required={this.required}
          clickable={this.clickable}
          titleStyle={this.labelStyle}
          titleClass={[bem('label', labelAlign), this.labelClass]}
          arrowDirection={this.arrowDirection}
          class={bem({
            error: this.error,
            [`label-${labelAlign}`]: labelAlign,
            'min-height': this.type === 'textarea' && !this.autosize
          })}
          scopedSlots={scopedSlots}
          onClick={this.onClick}
        >
          <div class={bem('body')}>
            {this.genInput()}
            {this.showClear && (
              <Icon
                name="clear"
                class={bem('clear')}
                onTouchstart={this.onClear}
              />
            )}
            {this.genRightIcon()}
            {slots('text') && <div class={bem('text')}>{slots('text')}</div>}
            {slots('button') && (
              <div class={bem('button-wrapper')}>
                <div class={bem('button')}>{slots('button')}</div>
              </div>
            )}
          </div>
          {this.genWordLimit()}
          {this.errorMessage && (
            <div class={bem('error-message', this.errorMessageAlign)}>
              {this.errorMessage}
            </div>
          )}
        </Cell>
      </div>
    );
  }
});
