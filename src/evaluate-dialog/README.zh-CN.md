# EvaluateDialog 评论弹窗

### 介绍

EvaluateDialog 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { EvaluateDialog } from 'vant-green';

Vue.use(EvaluateDialog);
```

## 代码演示

### 基础用法

```html
<van-evaluate-dialog
  :show="show"
  :options="options"
  :rate-text="rateText"
  doctor-name="陈医生"
  doctor-title="副主任"
  allow-half
  @confirm="confirm"
  @close="close"
/>
```

```js
export default {
  data() {
    return {
      show: false,
      options: [
        { text: '亲切和蔼' },
        { text: '经验丰富' },
        { text: '回复及时' },
        { text: '医术精湛' },
        { text: '专业解答' },
        { text: '医德高尚' },
        { text: '耐心细致' },
        { text: '认真负责' }
      ],
      rateText: [
        '半颗星',
        '一颗星',
        '一颗半星',
        '两颗星',
        '两颗半星',
        '三颗星',
        '三颗半星',
        '四颗星',
        '四颗半星',
        '五颗星'
      ]
    };
  },

  methods: {
    confirm({ rate, rateText, options, comment }) {
      this.show = false;
      console.log(rate, rateText, options, comment);
    },
    close() {
      this.show = false;
    }
  }
};
```

## API

### Props

| 参数          | 说明                     | 类型               | 默认值                  | 版本     |
| ------------- | ------------------------ | ------------------ | ----------------------- | -------- |
| show          | 是否显示弹窗             | _boolean_          | `false`                 | vant-green@1.0.0 |
| avatar-figure | 头像图片                 | _string \| number_ | `7`                     | vant-green@1.0.0 |
| avatar-size   | 头像尺寸，默认单位为`px` | _string \| number_ | `40`                    | vant-green@1.0.0 |
| avatar-radius | 头像圆角，默认单位为`px` | _string \| number_ | `2`                     | vant-green@1.0.0 |
| doctor-name   | 医生姓名                 | _string_           | -                       | vant-green@1.0.0 |
| doctor-title  | 医生职称                 | _string_           | -                       | vant-green@1.0.0 |
| options       | 评价选项                 | _array_            | -                       | vant-green@1.0.0 |
| allow-half    | 是否允许半星             | _boolean_          | `false`                 | vant-green@1.0.0 |
| rate-text     | 星级对应文本             | _array_            | -                       | vant-green@1.0.0 |
| placeholder   | 输入框提示文本           | _string_           | `请输入您对医生的评价…` | vant-green@1.0.0 |
| max-count     | 输入框可输入文字最大值   | _number_           | `200`                   | vant-green@1.0.0 |
| button-text   | 按钮文字                 | _string_           | `提交评价`              | vant-green@1.0.0 |

### Events

| 事件名  | 说明           | 回调参数                                                                    |
| ------- | -------------- | --------------------------------------------------------------------------- |
| confirm | 提交信息时触发 | {rate:星级, rateText:星级对应文字, options:评价已选项, comment:输入的评价 } |
| close   | 关闭弹窗时触发 | -                                                                           |

### Slots

| 名称    | 内容         |
| ------- | ------------ |
| default | 自定义内容   |
| doctor  | 标题医生信息 |
