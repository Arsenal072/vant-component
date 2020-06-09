# PiccodeDialog 验证码弹出框

### 介绍

PiccodeDialog 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { PiccodeDialog } from 'vant-green';

Vue.use(PiccodeDialog);
```

## 代码演示

### 基础用法

```html
<van-piccode-dialog
  :show="show"
  title="请输入图形验证码"
  :pic="pic"
  :value="value"
  :error-info="errorInfo"
  @input="onInput"
  @delete="onDelete"
  @focus="onFocus"
  @check="checked"
  @refresh="refresh"
  @close="close"
></van-piccode-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      pic: 'xxx',
      value: '',
      errorInfo: '',
      length: 4
    };
  },
  methods: {
    onInput(key) {
      if (this.value.length <= this.length) {
        this.value = (this.value + key).slice(0, this.length);
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onFocus() {
      console.log('focus');
    },
    checked(v) {
      if (true) {
        this.show = false;
        this.value = '';
      } else {
        this.errorInfo = '验证码错误，请重新输入';
      }
    },
    refresh() {
      this.pic = 'xxx';
      this.value = '';
    },
    close() {
      this.show = false;
      this.value = '';
    }
  }
};
```

## API

### Props

| 参数       | 说明                                             | 类型                 | 默认值  | 版本     |
| ---------- | ------------------------------------------------ | -------------------- | ------- | -------- |
| show       | 是否显示弹窗                                     | _boolaen_            | `false` | vant-green@1.0.0 |
| title      | 弹窗标题                                         | _string_             | -       | vant-green@1.0.0 |
| length     | 验证码长度                                       | _number_             | `4`     | vant-green@1.0.0 |
| pic        | 验证码图片路径                                   | _string_             | -       | vant-green@1.0.0 |
| value      | 输入的值                                         | _string_             | -       | vant-green@1.0.0 |
| gutter     | 输入框格子之间的间距，如 20px 2em，默认单位为 px | _number_ \| _string_ | `8`     | vant-green@1.0.0 |
| mask       | 数字是否明文显示                                 | _boolean_            | `false` | vant-green@1.0.0 |
| error-info | 错误提示信息                                     | _string_             | -       | vant-green@1.0.0 |
| focused    | 是否已聚焦，聚焦时输入框变色显示光标             | _boolean_            | `true`  | vant-green@1.0.0 |
| closable    | 是否展示关闭按钮             | _boolean_            | `true`  | vant-green@1.0.28 |

### Events

| 事件名  | 说明                 | 回调参数       |
| ------- | -------------------- | -------------- |
| input   | 输入数字时触发       | v:键入的数字   |
| delete  | 删除数字时触发       | -              |
| focus   | 聚焦输入框时触发     | -              |
| check   | 验证码输入完整时触发 | v:输入的验证码 |
| refresh | 刷新验证码时触发     | -              |
| close   | 关闭弹窗时触发       | -              |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 标题与验证码之间内容自定义 |
| title   | 标题自定义                 |
