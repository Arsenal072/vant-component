import { createNamespace } from '../utils';
import Button from '../button';

const [createComponent, bem] = createNamespace('nodata');

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
            return 'http://mui.ucmed.cn/images/nodata/nofind.png';
          case 2:
            return 'http://mui.ucmed.cn/images/nodata/noevalution.png';
          case 3:
            return 'http://mui.ucmed.cn/images/nodata/noreport.png';
          case 4:
            return 'http://mui.ucmed.cn/images/nodata/nopayment.png';
          case 5:
            return 'http://mui.ucmed.cn/images/nodata/nocall.png';
          case 6:
            return 'http://mui.ucmed.cn/images/nodata/norecord.png';
          case 7:
            return 'http://mui.ucmed.cn/images/nodata/nocollection.png';
          case 8:
            return 'http://mui.ucmed.cn/images/nodata/nonews.png';
          case 9:
            return 'http://mui.ucmed.cn/images/nodata/nopatient.png';
          case 10:
            return 'http://mui.ucmed.cn/images/nodata/nodoctor.png';
          case 11:
            return 'http://mui.ucmed.cn/images/nodata/paysuccess.png';
          case 12:
            return 'http://mui.ucmed.cn/images/nodata/payfail.png';
          case 13:
            return 'http://mui.ucmed.cn/images/nodata/nolive.png';
          case 14:
            return 'http://mui.ucmed.cn/images/nodata/nodata.png';
          case 15:
            return 'http://mui.ucmed.cn/images/nodata/nodepartment.png';
          case 16:
            return 'http://mui.ucmed.cn/images/nodata/nointernet.png';
          case 17:
            return 'http://mui.ucmed.cn/images/nodata/noauthority.png';
          case 18:
            return 'http://mui.ucmed.cn/images/nodata/health.png';
          case 19:
            return 'http://mui.ucmed.cn/images/nodata/finish.png';
          case 20:
            return 'http://mui.ucmed.cn/images/nodata/nocheckup.png';
          case 21:
            return 'http://mui.ucmed.cn/images/nodata/system.png';
          case 22:
            return 'http://mui.ucmed.cn/images/nodata/nofloor.png';
          case 23:
            return 'http://mui.ucmed.cn/images/nodata/noanydata.png';
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
            size="small"
            class={bem('button')}
            onClick={() => {
              this.$emit('clickButton');
            }}
          >
            {button}
          </Button>
        )}
        {slots('default')}
      </div>
    );
  }
});
