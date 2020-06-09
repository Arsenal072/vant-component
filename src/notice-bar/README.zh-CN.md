# NoticeBar 通知栏

### 引入

```javascript
import Vue from 'vue';
import { NoticeBar } from 'vant-green';

Vue.use(NoticeBar);
```

## 代码演示

### 基础用法

```html
<van-notice-bar text="通知内容" left-icon="volume" />
```

### 开启滚动

文字内容多于一行时，可通过设置`scrollable`开启滚动

```html
<van-notice-bar scrollable>
  通知内容
</van-notice-bar>
```

### 多行展示

禁用滚动时，可以设置`wrapable`来开启多行展示

```html
<van-notice-bar wrapable>
  通知内容
</van-notice-bar>
```

### 通知栏模式

默认模式为空，支持`closeable`和`link`两种模式

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<van-notice-bar mode="closeable">
  通知内容
</van-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<van-notice-bar mode="link">
  通知内容
</van-notice-bar>

<!-- tips 模式，可定义标题 -->
<van-notice-bar mode="tips" title="温馨提示">
  提示内容
</van-notice-bar>
```

### 自定义样式

```html
<van-notice-bar
  color="#00982D"
  background="rgba(50, 174, 87, 0.12)"
  left-icon="info"
>
  通知内容
</van-notice-bar>
```

### 插槽用法

```html
<van-notice-bar mode="closable">
  <p class="van-color-text-assist">
    当前设置可能会错过消息提醒。
    <span class="van-color-warning" @click="check">点击查看</span>
  </p>
</van-notice-bar>
<van-notice-bar>
  <div class="text-align-center">
    <span>尹丽惠 医保卡W327983232 滨江院区</span>
    <van-icon name="down" />
  </div>
</van-notice-bar>
<van-notice-bar color="#00982D" background="rgba(50, 174, 87, 0.12)">
  <div class="text-align-center">
    <span>支付剩余时间</span>
    <van-count-down
      :time="time"
      format="mm:ss"
      class="margin-left6 inline-block van-color-success"
    />
  </div>
</van-notice-bar>
```

## API

### Props

| 参数       | 说明                                                       | 类型      | 默认值    | 版本     |
| ---------- | ---------------------------------------------------------- | --------- | --------- | -------- |
| mode       | 通知栏模式，可选值为 `closeable` `link` `tips`             | _string_  | `''`      | -        |
| text       | 通知文本内容                                               | _string_  | `''`      | -        |
| delay      | 动画延迟时间 (s)                                           | _number_  | `1`       | -        |
| speed      | 滚动速率 (px/s)                                            | _number_  | `50`      | -        |
| scrollable | 是否在长度溢出时滚动播放                                   | _boolean_ | `false`   | vant-green@1.0.0 |
| title      | 标题(当 mode 为`tips`时生效)                               | _string_  | -         | vant-green@1.0.0 |
| wrapable   | 是否开启文本换行，只在禁用滚动时生效                       | _boolean_ | `false`   | -        |
| left-icon  | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_  | -         | -        |
| color      | 文本颜色                                                   | _string_  | `#f60`    | -        |
| background | 滚动条背景                                                 | _string_  | `#fff7cc` | -        |

### Events

| 事件名 | 说明             | 回调参数     |
| ------ | ---------------- | ------------ |
| click  | 点击通知栏时触发 | event: Event |
| close  | 关闭通知栏时触发 | event: Event |

### Slots

| 名称       | 内容           |
| ---------- | -------------- |
| default    | 通知文本内容   |
| left-icon  | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |
