# SubmitBar 提交订单栏

### 引入

```javascript
import Vue from 'vue';
import { SubmitBar } from 'vant-green';

Vue.use(SubmitBar);
```

## 代码演示

### 基础用法

```html
<van-submit-bar :price="3050" button-text="提交订单" @submit="onClickButton" />
```

```js
export default {
  methods: {
    onClickButton() {
      this.$toast('点击按钮');
    }
  }
};
```

### 禁用状态

禁用状态下不会触发`submit`事件,组件通过`disabled`属性设置成禁用状态

```html
<van-submit-bar
  disabled
  :price="3050"
  suffix-label="原价100"
  button-text="提交订单"
  tip="你的收货地址不支持同城送, 我们已为你推荐快递"
  :border="false"
  tip-icon="info-o"
  @submit="onClickButton"
/>
```

### 加载状态

加载状态下不会触发`submit`事件,组件通过`loading`属性设置成正在加载的状态

```html
<van-submit-bar
  loading
  :price="3050"
  button-text="提交订单"
  @submit="onClickButton"
/>
```

### 高级用法

通过插槽插入自定义内容

```html
<van-submit-bar
  :price="3050"
  label="合计"
  button-text="提交订单"
  :border="false"
  @submit="onClickButton"
>
  <div slot="tip">
    你的收货地址不支持同城送
    <span class="van-color-info" @click="onClickLink">
      修改地址
    </span>
  </div>
  <van-checkbox slot="left" v-model="checked">提示文字 </van-checkbox>
</van-submit-bar>
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },
  methods: {
    onClickLink() {
      this.$toast('修改地址');
    }
  }
};
```

### 插槽用法

通过插槽插入自定义内容

```html
<van-submit-bar>
  <van-button type="primary" block>主按钮</van-button>
</van-submit-bar>

<van-submit-bar>
  <van-button type="primary" icon="plus" block>主按钮</van-button>
</van-submit-bar>

<van-submit-bar>
  <van-button class="width50">弱按钮 </van-button>
  <van-button type="primary" class="margin-left12 width50">主按钮</van-button>
</van-submit-bar>

<van-submit-bar>
  <van-button type="primary" plain class="width50">次按钮 </van-button>
  <van-button type="primary" class="margin-left12 width50">主按钮</van-button>
</van-submit-bar>

<van-submit-bar>
  <div
    slot="top"
    class="padding-top16 padding-bottom8 text-align-center van-color-text-assist font-size1"
  >
    按钮提示文字
  </div>
  <van-button type="primary" block>主按钮</van-button>
</van-submit-bar>

<van-submit-bar>
  <van-button type="warning" block>
    <div class="flex-align-justify">
      确认支付
      <span class="margin-left7 font-size12">39.8</span>
      <i class="margin-left2 font-size2">元</i>
    </div>
  </van-button>
</van-submit-bar>

<van-submit-bar>
  <van-button type="warning" block>
    确认支付
    <van-icon name="clock-o" class="margin-left10" />
    <van-count-down
      :time="15 * 60 * 1000"
      format="mm:ss"
      class="margin-left4 inline-block van-color-white font-size3"
    />
  </van-button>
</van-submit-bar>
```

## API

### Props

| 参数                   | 说明                                                                            | 类型               | 默认值    | 版本     |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------ | --------- | -------- |
| height                 | 高度，默认单位为 px                                                             | _string \| number_ | -         | vant-green@1.0.0 |
| price                  | 价格（单位分）                                                                  | _number_           | -         | -        |
| label                  | 价格左侧文案                                                                    | _string_           | `费用`    | vant-green@1.0.0 |
| suffix-label           | 价格右侧文案                                                                    | _string_           | -         | -        |
| button-text            | 按钮文字                                                                        | _string_           | -         | -        |
| button-type            | 按钮类型                                                                        | _string_           | `warning` | -        |
| tip                    | 提示文案                                                                        | _string_           | -         | -        |
| tip-icon               | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                      | _string_           | -         | -        |
| disabled               | 是否禁用按钮                                                                    | _boolean_          | `false`   | -        |
| loading                | 是否显示加载中的按钮                                                            | _boolean_          | `false`   | -        |
| currency               | 货币符号                                                                        | _string_           | `元`      | vant-green@1.0.0 |
| decimal-length         | 价格小数点后位数                                                                | _number_           | `2`       | -        |
| border                 | 是否显示上边框                                                                  | _boolean_          | `true`    | vant-green@1.0.0 |
| safe-area-inset-bottom | 是否开启底部安全区适配，[详细说明](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_          | `true`    | -        |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| submit | 按钮点击事件回调 | -        |

### Slots

| 名称        | 说明                       |
| ----------- | -------------------------- |
| default     | 自定义订单栏内容           |
| top         | 自定义订单栏上方内容       |
| tip         | 提示文案中的额外操作和说明 |
| left        | 自定义订单栏左侧内容       |
| suffixLabel | 自定义订单栏价格右侧内容   |
