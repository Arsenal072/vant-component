import { createNamespace } from '../utils';
import Overlay from '../overlay';
import Icon from '../icon';
import Button from '../button';
import Avatar from '../avatar';
import Divider from '../divider';
import Rate from '../rate';
import Field from '../field';

const [createComponent, bem] = createNamespace('evaluate-dialog');

export default createComponent({
  props: {
    show: Boolean,
    avatarFigure: { type: [Number, String], default: 7 },
    avatarSize: { type: [Number, String], default: 40 },
    avatarRadius: { type: [Number, String], default: 2 },
    doctorName: String,
    doctorTitle: String,
    options: {
      type: Array,
      default: () => []
    },
    allowHalf: Boolean,
    rateText: Array,
    placeholder: {
      type: String,
      default: '请输入您对医生的评价…'
    },
    maxCount: { type: Number, default: 200 },
    buttonText: {
      type: String,
      default: '提交评价'
    }
  },

  data() {
    return {
      value: 5,
      comment: ''
    };
  },

  methods: {
    close() {
      if (!this.show) {
        return;
      }
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm', {
        rate: this.value,
        rateText: this.allowHalf
          ? this.rateText[this.value * 2 - 1]
          : this.rateText[this.value - 1],
        options: this.options.filter(obj => obj.checked).map(item => item.text),
        comment: this.comment
      });
      this.clear();
    },
    clear() {
      this.options.forEach(element => {
        element.checked = false;
      });
      this.value = 5;
      this.comment = '';
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

    const genDoctor = this.slots('doctor') || (
      <div class={bem('doctor')}>
        <Avatar
          figure={this.avatarFigure}
          size={this.avatarSize}
          radius={this.avatarRadius}
          class={bem('avatar')}
        ></Avatar>
        <div class={bem('doctor-name-wrapper')}>
          <span class={bem('doctor-name')}>{this.doctorName}</span>
          <span class={bem('doctor-title')}>{this.doctorTitle}</span>
        </div>
      </div>
    );

    const genRate = (
      <div class={bem('rate-wrapper')}>
        <Rate
          v-model={this.value}
          void-color="#e2e2e2"
          void-icon="star"
          allow-half={this.allowHalf}
          size={26}
          gutter={13}
        ></Rate>
        {this.rateText && (
          <Divider
            style={{
              padding: '12px 85px 0',
              borderColor: '#FF7B35',
              color: '#FF7B35'
            }}
          >
            {this.allowHalf
              ? this.rateText[this.value * 2 - 1]
              : this.rateText[this.value - 1]}
          </Divider>
        )}
      </div>
    );

    function genChecked() {
      return (
        <div>
          <span class={bem('icon-wrap')}> </span>
          <Icon class={bem('icon')} name="success" />
        </div>
      );
    }

    const genOptions = (
      <div class={bem('options')}>
        {this.options.map((item, index) => {
          if (!item.hasOwnProperty('checked')) {
            this.$set(item, 'checked', false);
          }
          return (
            <span
              key={index}
              class={bem('option-inline', {
                checked: item.checked
              })}
              onClick={() => {
                item.checked = !item.checked;
              }}
            >
              {item.checked && genChecked()} {item.text}
            </span>
          );
        })}
      </div>
    );

    const genField = (
      <Field
        type="textarea"
        v-model={this.comment}
        rows="2"
        maxlength={this.maxCount}
        placeholder={this.placeholder}
        show-word-limit
        class={bem('field')}
      ></Field>
    );

    const genButton = (
      <Button type="primary" block class={bem('button')} onClick={this.confirm}>
        {this.buttonText}
      </Button>
    );

    return (
      <Overlay show={this.show} class={bem()}>
        <div class={bem('wrapper')}>
          {closeIcon}
          {genDoctor}
          <Divider dashed />
          {genRate}
          {genOptions}
          {genField}
          {genButton}
          {this.slots()}
        </div>
      </Overlay>
    );
  }
});
