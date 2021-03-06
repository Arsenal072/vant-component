import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('other-card');

const figureMap = {
  1: 'http://mui.ucmed.cn/images/figure/cityzen1@2x.png 2x, http://mui.ucmed.cn/images/figure/cityzen1@3x.png 3x',
  2: 'http://mui.ucmed.cn/images/figure/cityzen2@2x.png 2x, http://mui.ucmed.cn/images/figure/cityzen2@3x.png 3x',
  3: 'http://mui.ucmed.cn/images/figure/diploma@2x.png 2x, http://mui.ucmed.cn/images/figure/diploma@3x.png 3x',
  4: 'http://mui.ucmed.cn/images/figure/doctor__certificate@2x.png 2x, http://mui.ucmed.cn/images/figure/doctor__certificate@3x.png 3x',
  5: 'http://mui.ucmed.cn/images/figure/doctor_license@2x.png 2x, http://mui.ucmed.cn/images/figure/doctor_license@3x.png 3x',
  6: 'http://mui.ucmed.cn/images/figure/electronic_medicare_card@2x.png 2x, http://mui.ucmed.cn/images/figure/electronic_medicare_card@3x.png 3x',
  7: 'http://mui.ucmed.cn/images/figure/hand_idcard@2x.png 2x, http://mui.ucmed.cn/images/figure/hand_idcard@3x.png 3x',
  8: 'http://mui.ucmed.cn/images/figure/health_card@2x.png 2x, http://mui.ucmed.cn/images/figure/health_card@3x.png 3x',
  9: 'http://mui.ucmed.cn/images/figure/household_register1@2x.png 2x, http://mui.ucmed.cn/images/figure/household_register1@3x.png 3x',
  10: 'http://mui.ucmed.cn/images/figure/household_register2@2x.png 2x, http://mui.ucmed.cn/images/figure/household_register2@3x.png 3x',
  11: 'http://mui.ucmed.cn/images/figure/idcard_back@2x.png 2x, http://mui.ucmed.cn/images/figure/idcard_back@3x.png 3x',
  12: 'http://mui.ucmed.cn/images/figure/idcard_front@2x.png 2x, http://mui.ucmed.cn/images/figure/idcard_front@3x.png 3x',
  13: 'http://mui.ucmed.cn/images/figure/medicare_card1@2x.png 2x, http://mui.ucmed.cn/images/figure/medicare_card1@3x.png 3x',
  14: 'http://mui.ucmed.cn/images/figure/medicare_card2@2x.png 2x, http://mui.ucmed.cn/images/figure/medicare_card2@3x.png 3x',
  15: 'http://mui.ucmed.cn/images/figure/package1@2x.png 2x, http://mui.ucmed.cn/images/figure/package1@3x.png 3x',
  16: 'http://mui.ucmed.cn/images/figure/package2@2x.png 2x, http://mui.ucmed.cn/images/figure/package2@3x.png 3x',
  17: 'http://mui.ucmed.cn/images/figure/package3@2x.png 2x, http://mui.ucmed.cn/images/figure/package3@3x.png 3x',
  18: 'http://mui.ucmed.cn/images/figure/package4@2x.png 2x, http://mui.ucmed.cn/images/figure/package4@3x.png 3x',
  19: 'http://mui.ucmed.cn/images/figure/package5@2x.png 2x, http://mui.ucmed.cn/images/figure/package5@3x.png 3x',
  20: 'http://mui.ucmed.cn/images/figure/package6@2x.png 2x, http://mui.ucmed.cn/images/figure/package6@3x.png 3x',
  21: 'http://mui.ucmed.cn/images/figure/work_card@2x.png 2x, http://mui.ucmed.cn/images/figure/work_card@3x.png 3x'
};

export default createComponent({
  props: {
    figure: Number
  },

  render() {
    return (
      <div role="other-card" class={bem()}>
        <img class={bem('img')} srcset={figureMap[this.figure]}></img>
      </div>
    );
  }
});
