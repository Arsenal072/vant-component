# Call 通话

### 介绍

Call 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Call } from 'vant-green';

Vue.use(Call);
```

## 代码演示

### 基础用法

```html
<van-call
  :mode="mode"
  :avatar-figure="1"
  title="吴化平"
  tip="语音通话中"
  :hand-free="handFree"
  :count="count"
  @switchMode="switchMode"
  @switchHandFree="switchHandFree"
  @switchCamera="switchCamera"
  @hangUp="hangUp"
>
  <template slot="video">
    <!-- 视频模式插槽内容，以下用图片模拟视频流 -->
    <div :class="['remote-wrapper', reverse ? 'local' : 'remote']" />
    <div :class="['local-wrapper', reverse ? 'remote' : 'local']" />
  </template>
</van-call>
```

```js
export default {
  data() {
    return {
      mode: 'voice',
      handFree: false,
      count: '14.15',
      reverse: false
    };
  },
  methods: {
    switchMode() {
      this.mode = this.mode === 'voice' ? 'video' : 'voice';
      this.reset();
    },
    switchHandFree() {
      this.handFree = !this.handFree;
    },
    switchCamera() {
      this.reverse = !this.reverse;
    },
    hangUp() {
      this.$toast('hangUp');
    },
    reset() {
      this.reverse = false;
      this.handFree = false;
    }
  }
};
```

```css
.remote-wrapper {
  width: 100%;
  height: 100%;
}
.remote {
  background: url('../../../assets/images/other/remote.png');
  background-size: 100% 100%;
}
.local-wrapper {
  position: fixed;
  top: 60px;
  right: 4px;
  z-index: 1;
  width: 92px;
  height: 164px;
  border-radius: 4px;
  overflow: hidden;
}
.local {
  background: url('../../../assets/images/other/local.png');
  background-size: 100% 100%;
}
```

### Props

| 参数          | 说明                     | 类型               | 默认值  | 版本     |
| ------------- | ------------------------ | ------------------ | ------- | -------- |
| mode          | 通话模式,可选值为`video` | _string_           | `voice` | vant-green@1.0.0 |
| avatar-figure | 头像图片                 | _string \| number_ | -       | vant-green@1.0.0 |
| avatar-size   | 头像尺寸，默认单位为`px` | _string \| number_ | `100`   | vant-green@1.0.0 |
| avatar-radius | 头像圆角，默认单位为`px` | _string \| number_ | `6`     | vant-green@1.0.0 |
| title         | 名字标题                 | _string_           | -       | vant-green@1.0.0 |
| tip           | 提示文本                 | _string_           | -       | vant-green@1.0.0 |
| hand-free     | 是否处于免提             | _boolean_          | `false` | vant-green@1.0.0 |
| count         | 通话时长                 | _string_           | -       | vant-green@1.0.0 |

### Events

| 事件名         | 说明         | 回调参数 |
| -------------- | ------------ | -------- |
| switchMode     | 切换通话模式 | -        |
| switchHandFree | 是否打开免提 | -        |
| switchCamera   | 切换摄像头   | -        |
| clickButton    | 挂断通话事件 | -        |

### Slots

| 名称   | 说明         |
| ------ | ------------ |
| avatar | 头像插槽     |
| voice  | 语音通话插槽 |
| video  | 视频通话插槽 |
| bottom | 底部插槽     |
