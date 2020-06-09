import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('bank-card');

const bankType = {
  ABC: '中国农业银行',
  BJBANK: '北京银行',
  BOC: '中国银行',
  CCB: '中国建设银行',
  CEB: '中国光大银行',
  CIB: '兴业银行',
  CITIC: '中信银行',
  CMB: '招商银行',
  CMBC: '中国民生银行',
  COMM: '交通银行',
  GDB: '广东发展银行',
  HXBANK: '华夏银行',
  ICBC: '中国工商银行',
  NBBANK: '宁波银行',
  PSBC: '中国邮政储蓄银行',
  SHBANK: '上海银行',
  SPABANK: '平安银行',
  SPDB: '上海浦东发展银行'
};

const cardType = {
  DC: '储蓄卡',
  CC: '信用卡'
};

export default createComponent({
  props: {
    name: String,
    type: {
      type: String,
      default: 'DC'
    },
    number: String,
    showLength: {
      type: Number,
      default: 4
    }
  },

  render() {
    const { name, number, type, showLength } = this;
    const showNumber = number.slice(-showLength);
    return (
      <div class={bem([name])}>
        <div class={bem('name')}>{bankType[name] || name}</div>
        <div class={bem('type')}>{cardType[type] || type}</div>
        <div class={bem('number')}>
          <span class={bem('encrypt-number')}>****</span>
          <span class={bem('encrypt-number')}>****</span>
          <span class={bem('encrypt-number')}>****</span>
          <span>{showNumber}</span>
        </div>
      </div>
    );
  }
});
