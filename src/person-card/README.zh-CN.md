# Person-card 个人信息卡片

### 介绍

Person-card 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { PersonCard } from 'vant-green';

Vue.use(PersonCard);
```

## 代码演示

### 基础用法

```html
<van-person-card
  title="标题"
  sub-title="信息 信息"
  tag="待审核"
  tag-type="warning"
  corner="15:30"
  :content="['辅助性文字', '辅助性文字']"
/>
```

## API

### Props

| 参数          | 说明               | 类型               | 默认值 | 版本     |
| ------------- | ------------------ | ------------------ | ------ | -------- |
| avatar-figure | 头像图片           | _string \| number_ | `1`    | vant-green@1.0.0 |
| avatar-size   | 头像图片尺寸       | _string \| number_ | `50`   | vant-green@1.0.0 |
| avatar-radius | 头像图片的圆弧角度 | _string \| number_ | -      | vant-green@1.0.0 |
| title         | 标题文本           | _string_           | -      | vant-green@1.0.0 |
| sub-title     | 副标题文本         | _string_           | -      | vant-green@1.0.0 |
| tag           | 标签文本           | _string_           | -      | vant-green@1.0.0 |
| tag-type      | 标签类型           | _string_           | -      | vant-green@1.0.0 |
| corner        | 右上角内容         | _string_           | -      | vant-green@1.0.0 |
| content       | 内容文本           | _string \| array_  | -      | vant-green@1.0.0 |

### Slots

| 名称    | 内容           |
| ------- | -------------- |
| default | 内容插槽       |
| avatar  | 头像插槽内容   |
| title   | 标题插槽内容   |
| tag     | 标签插槽内容   |
| corner  | 右上角插槽内容 |
