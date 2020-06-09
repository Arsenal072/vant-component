import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('step');

export default createComponent({
  mixins: [ChildrenMixin('vanSteps')],

  computed: {
    status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }
      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },

  methods: {
    genCircle() {
      const { activeIcon, activeColor, inactiveIcon } = this.parent;

      if (this.status === 'process') {
        return (
          this.slots('active-icon') ||
          (activeIcon && (
            <Icon class={bem('icon')} name={activeIcon} color={activeColor} />
          )) || <i class={[bem('active-circle'), BORDER]}></i>
        );
      }

      const inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return (
          inactiveIconSlot || (
            <Icon
              class={bem('icon')}
              name={inactiveIcon}
              color={this.status === 'finish' ? activeColor : ''}
            />
          )
        );
      }

      return <i class={bem('circle')} />;
    }
  },

  render() {
    const { status } = this;
    const { direction } = this.parent;

    return (
      <div class={[BORDER, bem([direction, { [status]: status }])]}>
        <div class={bem('title')}>{this.slots()}</div>
        <div class={bem('circle-container')}>{this.genCircle()}</div>
        <div class={bem('line')} />
      </div>
    );
  }
});
