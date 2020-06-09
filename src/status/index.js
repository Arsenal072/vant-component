import { createNamespace } from '../utils';

const status1 = 'http://mui.ucmed.cn/images/figure/order_status2@2x.png';
const status2 = 'http://mui.ucmed.cn/images/figure/order_status1@2x.png';
const status3 = 'http://mui.ucmed.cn/images/figure/order_status5@2x.png';
const status4 = 'http://mui.ucmed.cn/images/figure/order_status3@2x.png';
const status5 = 'http://mui.ucmed.cn/images/figure/order_status9@2x.png';
const status6 = 'http://mui.ucmed.cn/images/figure/order_status7@2x.png';
const status7 = 'http://mui.ucmed.cn/images/figure/order_status4@2x.png';
const status8 = 'http://mui.ucmed.cn/images/figure/order_status6@2x.png';
const status9 = 'http://mui.ucmed.cn/images/figure/order_status8@2x.png';
const status10 = 'http://mui.ucmed.cn/images/figure/order_status10@2x.png';
const status11 = 'http://mui.ucmed.cn/images/figure/order_status11@2x.png';
const status12 = 'http://mui.ucmed.cn/images/figure/order_status12@2x.png';
const status13 = 'http://mui.ucmed.cn/images/figure/order_status13@2x.png';
const status1x14 = 'http://mui.ucmed.cn/images/figure/fail.png';
const status2x14 = 'http://mui.ucmed.cn/images/figure/fail1.png';
const status1x15 = 'http://mui.ucmed.cn/images/figure/failcall.png';
const status2x15 = 'http://mui.ucmed.cn/images/figure/failcall1.png';
const status1x16 = 'http://mui.ucmed.cn/images/figure/noconsulted.png';
const status2x16 = 'http://mui.ucmed.cn/images/figure/noconsulted1.png';
const status1x17 = 'http://mui.ucmed.cn/images/figure/success.png';
const status2x17 = 'http://mui.ucmed.cn/images/figure/success1.png';
const status1x18 = 'http://mui.ucmed.cn/images/figure/waiting.png';
const status2x18 = 'http://mui.ucmed.cn/images/figure/waiting1.png';

const [createComponent, bem] = createNamespace('status');

export default createComponent({
  props: {
    orient: {
      type: String,
      default: 'horizontal'
    },
    type: {
      type: String,
      default: '1'
    },
    figure: {
      type: [Number, String],
      default: 1
    },
    title: String,
    tip: String,
    background: String
  },

  data() {
    return {
      status1,
      status2,
      status3,
      status4,
      status5,
      status6,
      status7,
      status8,
      status9,
      status10,
      status11,
      status12,
      status13,
      status1x14,
      status2x14,
      status1x15,
      status2x15,
      status1x16,
      status2x16,
      status1x17,
      status2x17,
      status1x18,
      status2x18
    };
  },

  methods: {
    genFigure() {
      if (typeof this.figure === 'number') {
        switch (this.figure) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
            return this[`status${this.figure}`];
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
            return this[`status${this.type}x${this.figure}`];
        }
      } else {
        return this.figure;
      }
    }
  },

  render() {
    const { slots, orient, type, figure, title, tip, background } = this;
    if (orient !== 'horizontal' && orient !== 'vertical') {
      return;
    }
    return (
      <div
        class={bem([orient, `${orient}-type${type}`])}
        style={{ background }}
      >
        {orient === 'vertical' &&
          (slots('figure') ||
            (figure && <img class={bem('figure')} src={this.genFigure()} />))}
        <div>
          {slots('default')}
          {title && <p class={bem('title')}> {title} </p>}
          {tip && <p class={bem('tip')}> {tip} </p>}
        </div>
        {orient === 'horizontal' &&
          (slots('figure') ||
            (figure && <img class={bem('figure')} src={this.genFigure()} />))}
      </div>
    );
  }
});
