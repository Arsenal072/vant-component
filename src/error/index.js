import { createNamespace } from '../utils';
import Button from '../button';

const [createComponent, bem] = createNamespace('error');

export default createComponent({
  props: {
    figure: {
      type: [Number, String],
      default: 1
    },
    title: String,
    tip: String,
    button: String
  },

  methods: {
    genFigure() {
      if (typeof this.figure === 'number') {
        switch (this.figure) {
          case 1:
            return 'http://mui.ucmed.cn/images/figure/busy.png';
          case 2:
            return 'http://mui.ucmed.cn/images/figure/404.png';
          case 3:
            return 'http://mui.ucmed.cn/images/figure/503.png';
        }
      } else {
        return this.figure;
      }
    }
  },

  render() {
    const { slots, figure, title, tip, button } = this;

    return (
      <div class={bem()}>
        {slots('figure') ||
          (figure && <img class={bem('figure')} src={this.genFigure()} />)}
        {title && <p class={bem('title')}> {title} </p>}
        {tip && <p class={bem('tip')}> {tip} </p>}
        {button && (
          <Button
            type="primary"
            plain
            block
            onClick={() => {
              this.$emit('clickButton');
            }}
          >
            {button}
          </Button>
        )}
        {this.slots('default')}
      </div>
    );
  }
});
