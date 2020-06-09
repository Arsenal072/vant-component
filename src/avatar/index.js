import { createNamespace, addUnit } from '../utils';

const [createComponent, bem] = createNamespace('avatar');

export default createComponent({
  props: {
    figure: {
      type: [Number, String],
      default: 1
    },
    size: [Number, String],
    round: Boolean,
    background: String,
    radius: [Number, String]
  },

  methods: {
    genFigure() {
      if (typeof this.figure === 'number') {
        return `http://mui.ucmed.cn/images/default/avatar${this.figure}.png`;
      }
      return this.figure;
    }
  },

  render() {
    const { slots, size, round, background, radius } = this;

    const contentStyle = {
      width: addUnit(size),
      height: addUnit(size),
      borderRadius: addUnit(radius),
      background
    };

    return (
      <div role="avatar" class={bem({ round })}>
        <img src={this.genFigure()} style={contentStyle} />
        {slots()}
      </div>
    );
  }
});
