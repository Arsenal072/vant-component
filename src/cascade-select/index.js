import { createNamespace, addUnit } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cascade-select');

export default createComponent({
  props: {
    length: { type: Number, default: 4 },
    placeholder: { type: String, default: '请选择' },
    list: { type: Array, default: () => [] },
    dataKey: String,
    height: { type: [Number, String], default: 300 }
  },
  data() {
    return {
      selectList: [],
      titleList: [],
      lineStyle: {}
    };
  },
  mounted() {
    this.setLine();
  },
  methods: {
    onClickItem(item, index) {
      const content = {
        columnIndex: this.titleList.length,
        index,
        item
      };
      if (this.titleList.length < this.length) {
        this.selectList.push(content);
        this.titleList.push(item);
        this.$emit('clickItem', {
          columnIndex: this.titleList.length - 1,
          index,
          item
        });
      }
      if (this.titleList.length === this.length) {
        this.$emit('confirm', this.selectList);
        this.close();
      }
    },

    close() {
      this.selectList = [];
      this.titleList = [];
      this.$emit('close');
    },

    setLine() {
      this.$nextTick(() => {
        const getPlaceholder = document.getElementById('line');
        const width = getPlaceholder.offsetWidth;
        const left = getPlaceholder.offsetLeft + width / 2;
        const lineStyle = {
          // width: addUnit(width + 7),
          transform: `translateX(${left}px) translateX(-50%)`
        };
        this.lineStyle = lineStyle;
      });
    }
  },

  render() {
    const genTitle = this.titleList.length > 0 && (
      <div class={bem('title')}>
        {this.titleList.map(item => (
          <div class={bem('title-text')}>
            {this.dataKey ? item[this.dataKey] : item}
          </div>
        ))}
      </div>
    );

    const genHeader = (
      <div class={[bem('header'), BORDER_BOTTOM]}>
        {genTitle}
        <div class={bem('placeLine')}>
          <div class={bem('placeholder')} id="line">
            {this.placeholder}
          </div>
          <div class={bem('line')} style={this.lineStyle}></div>
        </div>
        <Icon name="cross" class={bem('close')} onClick={this.close}></Icon>
      </div>
    );

    const genList = this.list.map((item, index) => (
      <li
        class={bem('item')}
        onClick={() => {
          this.onClickItem(item, index);
        }}
      >
        {this.dataKey ? item[this.dataKey] : item}
        {this.slots()}
      </li>
    ));

    return (
      <div class={bem()}>
        {genHeader}
        <ul
          class={bem('wrapper')}
          style={{
            height: addUnit(this.height - 48)
          }}
        >
          {genList}
        </ul>
      </div>
    );
  }
});
