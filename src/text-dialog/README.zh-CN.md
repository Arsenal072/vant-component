# TextDialog 文字弹出框

### 介绍

TextDialog 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { TextDialog } from 'vant-green';

Vue.use(TextDialog);
```

## 代码演示

### 基础用法

```html
<van-text-dialog
  :show="show"
  title="标题"
  :body="data"
  button-text="自定义"
  @confirm="comfirm"
  @close="close"
></van-text-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      data:
        '内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容'
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

### 多标题

```html
<van-text-dialog
  :show="show"
  title="标题"
  :body="data"
  button-text="确定"
  mask
  :check="check"
  @confirm="confirm"
  @close="close"
  @toggle="toggle"
>
  <template slot="checkbox-label">
    <div class="font-size1 van-color-text-assist">
      我已阅读
      <span class="van-color-success">《预约须知》</span>
    </div>
  </template>
</van-text-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      check: false,
      data: [
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content:
            '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文内容文本内容文本内容文本内容'
        }
      ]
    };
  },
  methods: {
    toggle(v) {
      this.check = v;
    },
    confirm() {
      this.show = false;
    }
    close() {
      this.show = false;
    }
  }
};
```

## API

### Props

| 参数           | 说明                         | 类型              | 默认值  | 版本     |
| -------------- | ---------------------------- | ----------------- | ------- | -------- |
| show           | 是否显示弹窗                 | _boolean_         | `false` | vant-green@1.0.0 |
| title          | 文字内容标题                 | _string_          | -       | vant-green@1.0.0 |
| body           | 文字内容正文                 | _array \| string_ | -       | vant-green@1.0.0 |
| mask           | 超过一定文本时是否有渐变遮罩 | _boolean_         | `false` | vant-green@1.0.0 |
| check          | 单选框是否勾选               | _boolean_         | `true`  | vant-green@1.0.0 |
| checkbox-label | 单选框右侧文本               | _string_          | -       | vant-green@1.0.0 |
| button-text    | 按钮文字(无文字时不显示按钮) | _string_          | -       | vant-green@1.0.0 |

### Events

| 事件    | 说明             | 回调参数         |
| ------- | ---------------- | ---------------- |
| toggle  | 点击单选框时触发 | v:单选框是否选中 |
| confirm | 点击按钮时触发   | -                |
| close   | 关闭弹窗时触发   | -                |

### Slots

| 名称           | 说明               |
| -------------- | ------------------ |
| title          | 标题插槽           |
| checkbox-label | 单选框右侧文本插槽 |
| default        | 底部插槽           |
