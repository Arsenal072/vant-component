import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('result');

export default createComponent({
  props: {
    type: String,
    inline: Boolean,
    icon: String,
    title: String,
    tip: String,
    color: String,
    textColor: String
  },
  computed: {
    genTitle() {
      return (
        this.title ||
        (this.type === 'fail'
          ? '操作失败'
          : this.type === 'success'
          ? '操作成功'
          : '')
      );
    },
    genIcon() {
      return (
        this.icon ||
        (this.type === 'fail'
          ? 'warning'
          : this.type === 'success'
          ? 'checked'
          : '')
      );
    },
    genIconColor() {
      return (
        this.color ||
        (this.type === 'fail'
          ? '#ff5f4e'
          : this.type === 'success'
          ? '#32AE57'
          : '')
      );
    }
  },

  render() {
    return (
      <div role="result" class={[bem({ inline: this.inline }), 'van-clearfix']}>
        {this.slots('icon') || (
          <Icon
            class={bem('icon')}
            color={this.genIconColor}
            name={this.genIcon}
          />
        )}
        <div class={bem('title')} style={{ color: this.textColor }}>
          {this.genTitle}
        </div>
        {this.tip && (
          <div class={[bem('tip'), 'van-multi-ellipsis--l2']}>{this.tip}</div>
        )}
        {this.slots('default')}
      </div>
    );
  }
});
