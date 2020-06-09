import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('guide');
export default createComponent({
  props: {
    imgList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      step: 0
    };
  },
  watch: {
    step () {
      if(this.step > this.imgList.length - 1) {
        this.$emit('end')
      }
    }
  },
  computed: {
    backgroundStyle() {
      return {
        background: `url(${this.imgList[this.step]}) fixed 0 0/cover`
      }
    }
  },
  render() {
    return (
      <div
        role="guide"
        class={bem()}
        onClick={() => {
          this.step++;
        }}
        style={this.backgroundStyle}
      ></div>
    );
  }
});
