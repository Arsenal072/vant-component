import { createNamespace } from '../utils';
import Avatar from '../avatar';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('call');

export default createComponent({
  props: {
    mode: {
      type: String,
      default: 'voice'
    },
    avatarFigure: [Number, String],
    avatarSize: {
      type: [Number, String],
      default: 100
    },
    avatarRadius: {
      type: [Number, String],
      default: 6
    },
    title: String,
    tip: String,
    handFree: Boolean,
    count: String
  },
  computed: {
    isVoice() {
      return this.mode === 'voice';
    }
  },
  methods: {
    switchMode() {
      this.$emit('switchMode');
    },
    switchHandFree() {
      this.$emit('switchHandFree');
    },
    switchCamera() {
      this.$emit('switchCamera');
    },
    hangUp() {
      this.$emit('hangUp');
    }
  },
  render() {
    const {
      slots,
      avatarFigure,
      avatarSize,
      avatarRadius,
      title,
      tip,
      handFree,
      count,
      isVoice,
      switchMode,
      switchHandFree,
      switchCamera,
      hangUp
    } = this;

    const genVoice = (
      <div vShow={isVoice} class={bem('voice-box')}>
        {slots('avatar') ||
          (avatarFigure && (
            <Avatar
              figure={avatarFigure}
              size={avatarSize}
              radius={avatarRadius}
            />
          ))}
        {title && <div class={bem('title')}>{title}</div>}
        {tip && <div class={bem('tip')}>{tip}</div>}
        {slots('voice')}
      </div>
    );

    const genVideo = (
      <div vShow={!isVoice} class={bem('video-box')}>
        {slots('video')}
      </div>
    );

    const genBottom = (
      <div class={bem('bottom-box')}>
        {slots('bottom')}
        <div class={bem('count')}>{count}</div>
        <div class={bem('button-wrapper')}>
          <div class={bem('button-cell')}>
            <Icon
              name={isVoice ? 'vedio2' : 'music'}
              size={isVoice ? '30' : '36'}
              class={bem('icon')}
              onClick={switchMode}
            ></Icon>
            <div class={bem('button-text')}>
              切换{isVoice ? '视频' : '语音'}
            </div>
          </div>
          <div class={bem('button-cell')}>
            <Icon
              name="off-phone"
              size="35"
              class={bem('icon')}
              onClick={hangUp}
            ></Icon>
            <div class={bem('button-text')}>挂断</div>
          </div>
          <div vShow={isVoice} class={bem('button-cell')}>
            <Icon
              name="volume2"
              size="36"
              class={bem('icon', { actived: handFree })}
              onClick={switchHandFree}
            ></Icon>
            <div class={bem('button-text')}>
              {handFree ? '关闭' : '打开'}免提
            </div>
          </div>
          <div vShow={!isVoice} class={bem('button-cell')}>
            <Icon
              name="photograph"
              size="36"
              class={bem('icon')}
              onClick={switchCamera}
            ></Icon>
            <div class={bem('button-text')}>切换摄像头</div>
          </div>
        </div>
      </div>
    );

    return (
      <div role="call" class={bem()}>
        {genVoice}
        {genVideo}
        {genBottom}
      </div>
    );
  }
});
