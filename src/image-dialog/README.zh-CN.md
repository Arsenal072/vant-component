# ImageDialog 带图弹出框

### 介绍

ImageDialog 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { ImageDialog } from 'vant-green';

Vue.use(ImageDialog);
```

## 代码演示

### 基础用法

```html
<van-image-dialog
  :show="show"
  img-url="../../../assets/images/other/title-img.png"
  title="申请签约成功！"
  content="医生会尽快联系你线下见面，请关注短信和平台通知！"
  button-text="确定"
  @confirm="confirm"
  @close="close"
></van-image-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    confirm() {
      this.show = false;
    },
    close() {
      this.show = false;
    }
  }
};
```

## API

### Props

| 参数        | 说明                         | 类型      | 默认值  | 版本             |
| ----------- | ---------------------------- | --------- | ------- | ---------------- |
| show        | 是否显示弹窗                 | _boolean_ | `false` | vant-green@1.0.0 |
| img-url     | 图片路径                     | _string_  | -       | vant-green@1.0.0 |
| title       | 文字内容标题                 | _string_  | -       | vant-green@1.0.0 |
| content     | 文字内容正文                 | _string_  | -       | vant-green@1.0.0 |
| button-text | 按钮文字(无文字时不显示按钮) | _string_  | -       | vant-green@1.0.0 |

### Events

| 事件    | 说明               | 回调参数 |
| ------- | ------------------ | -------- |
| confirm | 点击确认按钮时触发 | -        |
| close   | 关闭弹窗时触发     | -        |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 内容自定义 |
| image   | 图片自定义 |
