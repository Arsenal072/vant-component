import { createNamespace, isDef, addUnit } from '../utils';
import Divider from '../divider';
import Rate from '../rate';
import Button from '../button';
import Icon from '../icon';
import Tag from '../tag';
import Avatar from '../avatar';
import Row from '../row';

const [createComponent, bem] = createNamespace('doctor-card');

export default createComponent({
  props: {
    avatarOffsetTop: [Number, String],
    avatarFigure: {
      type: [String, Number],
      default: 1
    },
    avatarSize: {
      type: [Number, String],
      default: 50
    },
    avatarRadius: {
      type: [Number, String],
      default: 4
    },
    showOnline: Boolean,
    online: Boolean,
    name: String,
    title: String,
    hospitalLevel: String,
    hospital: String,
    department: String,
    skill: String,
    skillTag: Array,
    praiseNum: Number,
    responseTime: String,
    receiveNum: Number,
    consultNum: Number,
    score: Number,
    buttonText: String
  },

  methods: {
    clickCard() {
      event.stopPropagation();
      this.$emit('clickCard');
    },
    clickButton() {
      event.stopPropagation();
      this.$emit('clickButton');
    }
  },

  render() {
    const { slots } = this;

    const genAvatar = (
      <div
        class={bem('avatar')}
        style={{
          marginTop: addUnit(this.avatarOffsetTop),
          height: addUnit(this.avatarSize)
        }}
      >
        {slots('avatar') || (
          <Avatar
            figure={this.avatarFigure}
            size={this.avatarSize}
            radius={this.avatarRadius}
          />
        )}
        {this.showOnline && (
          <div
            class={bem('online-tag', {
              online: this.online
            })}
          >
            <div class={bem('online-text')}>
              {this.online ? '在线' : '离线'}
            </div>
          </div>
        )}
      </div>
    );

    const genBase = (
      <Row type="flex" align="center" justify="space-between">
        <div>
          {isDef(this.name) && <span class={bem('name')}>{this.name}</span>}
          {isDef(this.title) && <span class={bem('title')}>{this.title}</span>}
        </div>
        <div>{this.slots('corner')}</div>
      </Row>
    );

    const genUnit = (isDef(this.hospitalLevel) ||
      isDef(this.hospital) ||
      isDef(this.department)) && (
      <div class={bem('unit')}>
        {isDef(this.hospitalLevel) && (
          <Tag plain size="small" color="#6E6E6E" class={bem('level-tag')}>
            {this.hospitalLevel}
          </Tag>
        )}
        {isDef(this.hospital) && (
          <span class={bem('hospital')}>{this.hospital}</span>
        )}
        {isDef(this.department) && (
          <span class={bem('department')}>{this.department}</span>
        )}
      </div>
    );

    const genSkill = isDef(this.skillTag) ? (
      <div class={bem('skill', 'tag')}>
        <Icon name="good-job" color="#B5B8B6" />
        {this.skillTag.map(item => (
          <Tag
            plain={false}
            round
            text-color="#666666"
            class={bem('skill-tag')}
          >
            {item}
          </Tag>
        ))}
      </div>
    ) : isDef(this.skill) ? (
      <div class={[bem('skill'), 'van-multi-ellipsis--l1']}>
        擅长：{this.skill}
      </div>
    ) : (
      ''
    );

    const genDesc = (isDef(this.praiseNum) || isDef(this.responseTime)) && (
      <div class={bem('description')}>
        {isDef(this.praiseNum) && <span>好评数&nbsp;{this.praiseNum}人</span>}
        {isDef(this.praiseNum) && isDef(this.responseTime) && (
          <i class={bem('gap')}>|</i>
        )}
        {isDef(this.responseTime) && (
          <span>响应速度&nbsp;{this.responseTime}</span>
        )}
      </div>
    );

    const genFooter =
      slots('footer') ||
      ((isDef(this.receiveNum) ||
        isDef(this.consultNum) ||
        isDef(this.score) ||
        this.buttonText) && (
        <div class={bem('footer')}>
          <Divider dashed margin={8} />
          <Row type="flex" align="center" justify="space-between">
            {isDef(this.receiveNum) && <div>接诊量 {this.receiveNum}</div>}
            {isDef(this.consultNum) && (
              <div>
                已有
                <span class={bem('consult-num')}>{this.consultNum}</span>
                人咨询
              </div>
            )}
            {isDef(this.score) && (
              <div>
                <Rate
                  v-model={this.score}
                  void-icon="star"
                  void-color="#eee"
                  allow-half
                  size={12}
                  readonly
                />
                <span style="margin-left:6px">{this.score}</span>
              </div>
            )}
            {this.buttonText && (
              <Button type="warning" size="small" onClick={this.clickButton}>
                {this.buttonText}
              </Button>
            )}
          </Row>
        </div>
      ));

    return (
      <div role="doctor-card" class={bem()} onClick={this.clickCard}>
        {genAvatar}
        <div class={bem('wrapper')}>
          {genBase}
          {genUnit}
          {genSkill}
          {genDesc}
          {genFooter}
        </div>
      </div>
    );
  }
});
