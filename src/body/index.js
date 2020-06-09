import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('body');

const titleMap = {
  1: '均称',
  2: '肥胖',
  3: '偏胖',
  4: '严重肥胖',
  5: '消瘦',
  6: '人体儿童男 (正面) ',
  7: '人体儿童男 (背面) ',
  8: '人体儿童女 (正面) ',
  9: '人体儿童女 (背面) ',
  10: '人体男 (正面) ',
  11: '人体男 (背面) ',
  12: '人体女 (正面) ',
  13: '人体女 (背面) '
};
const figureMap = {
  1: 'http://mui.ucmed.cn/images/figure/normal@2x.png 2x, http://mui.ucmed.cn/images/figure/normal@3x.png 3x',
  2: 'http://mui.ucmed.cn/images/figure/fat@2x.png 2x, http://mui.ucmed.cn/images/figure/fat@3x.png 3x',
  3: 'http://mui.ucmed.cn/images/figure/little_fat@2x.png 2x, http://mui.ucmed.cn/images/figure/little_fat@3x.png 3x',
  4: 'http://mui.ucmed.cn/images/figure/severe_fat@2x.png 2x, http://mui.ucmed.cn/images/figure/severe_fat@3x.png 3x',
  5: 'http://mui.ucmed.cn/images/figure/thin@2x.png 2x, http://mui.ucmed.cn/images/figure/thin@3x.png 3x',
  6: 'http://mui.ucmed.cn/images/figure/male_children_front@2x.png 2x, http://mui.ucmed.cn/images/figure/male_children_front@3x.png 3x',
  7: 'http://mui.ucmed.cn/images/figure/male_children_back@2x.png 2x, http://mui.ucmed.cn/images/figure/male_children_back@3x.png 3x',
  8: 'http://mui.ucmed.cn/images/figure/female_children_front@2x.png 2x, http://mui.ucmed.cn/images/figure/female_children_front@3x.png 3x',
  9: 'http://mui.ucmed.cn/images/figure/female_children_back@2x.png 2x, http://mui.ucmed.cn/images/figure/female_children_back@3x.png 3x',
  10: 'http://mui.ucmed.cn/images/figure/male_front@2x.png 2x, http://mui.ucmed.cn/images/figure/male_front@3x.png 3x',
  11: 'http://mui.ucmed.cn/images/figure/male_back@2x.png 2x, http://mui.ucmed.cn/images/figure/male_back@3x.png 3x',
  12: 'http://mui.ucmed.cn/images/figure/female_front@2x.png 2x, http://mui.ucmed.cn/images/figure/female_front@3x.png 3x',
  13: 'http://mui.ucmed.cn/images/figure/female_back@2x.png 2x, http://mui.ucmed.cn/images/figure/female_back@3x.png 3x'
};

export default createComponent({
  props: {
    figure: [String, Number],
    title: String
  },

  render() {
    const { figure, title } = this;
    let img = figure;
    if (typeof figure === 'number') {
      img = figureMap[figure];
    }
    return (
      <div role="body" class={bem()}>
        <img srcset={img}></img>
        {(this.title || titleMap[figure]) && (
          <div class={bem('title')}>{title || titleMap[figure]}</div>
        )}
      </div>
    );
  }
});
