import { createNamespace, isDef } from '../utils';
import Avatar from '../avatar';
import Row from '../row';
import Tag from '../tag';

const [createComponent, bem] = createNamespace('person-card');

export default createComponent({
  props: {
    avatarFigure: {
      type: [String, Number],
      default: 1
    },
    avatarSize: {
      type: [Number, String],
      default: 50
    },
    avatarRadius: [Number, String],
    title: String,
    subTitle: String,
    tag: String,
    tagType: String,
    corner: String,
    content: [String, Array]
  },

  render() {
    const { slots } = this;

    const genAvatar = (
      <div class={bem('avatar')}>
        {slots('avatar') || (
          <Avatar
            figure={this.avatarFigure}
            size={this.avatarSize}
            radius={this.avatarRadius}
          />
        )}
      </div>
    );

    const genBase = (
      <Row
        type="flex"
        align="center"
        justify="space-between"
        class={bem('base')}
      >
        <Row type="flex" align="center">
          {slots('title') || (
            <div>
              {isDef(this.title) && (
                <span class={bem('title')}>{this.title}</span>
              )}
              {isDef(this.subTitle) && (
                <span class={bem('sub-title')}>{this.subTitle}</span>
              )}
            </div>
          )}
          {this.slots('tag') ||
            (this.tag && (
              <Tag type={this.tagType} round>
                {this.tag}
              </Tag>
            ))}
        </Row>
        <div>
          {this.slots('corner') || (
            <span class={bem('corner')}>{this.corner}</span>
          )}
        </div>
      </Row>
    );

    const genContent = (
      <div class={bem('content')}>
        {slots() || typeof this.content === 'string' ? (
          <span class="van-multi-ellipsis--l1">{this.content}</span>
        ) : (
          this.content.map((item, index) => (
            <span class={bem('content-item')}>
              {item}
              <i
                vShow={index !== this.content.length - 1}
                class={bem('gap')}
              ></i>
            </span>
          ))
        )}
      </div>
    );

    return (
      <div role="person-card" class={bem()}>
        {genAvatar}
        <div class={bem('wrapper')}>
          {genBase}
          {genContent}
        </div>
      </div>
    );
  }
});
