import { createNamespace } from '../utils';
import Overlay from '../overlay';
import Icon from '../icon';
import Button from '../button';

const [createComponent, bem] = createNamespace('image-dialog');

export default createComponent({
  props: {
    show: Boolean,
    imgUrl: String,
    title: String,
    content: String,
    buttonText: String
  },

  methods: {
    close() {
      this.$emit('close');
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
        name="close"
        class={bem('close-icon')}
        onClick={this.close}
      />
    );

    const image =
      this.slots('image') ||
      (this.imgUrl && <img class={bem('image')} src={this.imgUrl}></img>);

    const body = (this.content || this.title || this.buttonText) && (
      <div class={bem('body')}>
        {this.title && <div class={bem('title')}>{this.title}</div>}
        {this.content && <div class={bem('content')}>{this.content}</div>}
        {this.buttonText && (
          <Button
            type="primary"
            block
            class={bem('button')}
            onClick={this.confirm}
          >
            {this.buttonText}
          </Button>
        )}
      </div>
    );

    return (
      <Overlay show={this.show} class={bem()}>
        <div class={bem('wrapper')}>
          {closeIcon}
          <div class={bem('content-wrapper')}>
            {image}
            {body}
            {this.slots()}
          </div>
        </div>
      </Overlay>
    );
  }
});
