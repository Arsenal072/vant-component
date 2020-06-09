# Field 输入框

### 介绍

表单中的输入框组件

### 引入

```javascript
import Vue from 'vue';
import { Field } from 'vant-green';

Vue.use(Field);
```

## 代码演示

### 基础用法

通过`v-model`绑定输入框的值

```html
<van-cell-group>
  <van-field v-model="value" placeholder="提示性文字" />
  <van-field v-model="defaultValue" label="标题" placeholder="提示性文字" />
</van-cell-group>
```

### 自定义类型

根据`type`属性定义不同类型的输入框

```html
<van-cell-group>
  <van-field
    v-model="username"
    label="标题"
    placeholder="提示性文字"
    required
    clearable
    :label-width="100"
  />

  <van-field
    v-model="password"
    type="password"
    label="标题最多六字"
    placeholder="提示性文字"
    :label-width="100"
  />
</van-cell-group>
```

### 插槽用法

```html
<van-cell-group>
  <van-field clearable v-model="sms" label="标题" placeholder="提示性文字">
    <span slot="text">如何获取</span>
  </van-field>

  <van-field
    center
    clearable
    v-model="sms"
    label="标题"
    placeholder="提示性文字"
  >
    <van-button slot="button" type="primary" size="middle" plain>
      获取验证码
    </van-button>
  </van-field>
</van-cell-group>
```

### 禁用输入框

```html
<van-cell-group>
  <van-field
    value="输入框已禁用"
    label="标题"
    right-icon="scan"
    :right-icon-size="19"
    disabled
  />
</van-cell-group>
```

### 错误提示

通过`error`或者`error-message`属性增加对应的错误提示

```html
<van-cell-group>
  <van-field v-model="username2" label="标题" placeholder="提示性文字" error />
  <van-field
    v-model="phone"
    label="标题"
    placeholder="提示性文字"
    error-message="格式错误"
  />
</van-cell-group>
```

### 选择型输入框

```html
<van-cell-group>
  <van-field
    readonly
    is-link
    v-model="cardType"
    label="证件类型"
    placeholder="请选择证件类型"
    @click="$toast('cardList')"
  />
</van-cell-group>
```

### 高度自适应

对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<van-cell-group>
  <van-field
    type="textarea"
    v-model="message"
    label="留言"
    placeholder="请输入留言"
    rows="1"
    autosize
    required
  />
</van-cell-group>
```

### 显示字数统计

设置`maxlength`和`show-word-limit`属性后会在底部显示字数统计

```html
<van-cell-group>
  <van-field
    type="textarea"
    v-model="message2"
    label="留言"
    placeholder="请输入留言"
    rows="2"
    autosize
    maxlength="50"
    show-word-limit
  />
</van-cell-group>
```

## API

### Props

| 参数                | 说明                                                                                                | 类型                 | 默认值  | 版本     |
| ------------------- | --------------------------------------------------------------------------------------------------- | -------------------- | ------- | -------- |
| label               | 输入框左侧文本                                                                                      | _string_             | -       | -        |
| value               | 当前输入的值                                                                                        | _string \| number_   | -       | -        |
| type                | 输入框类型, 可选值为 `tel` `number`<br>`textarea` `password` 等                                     | _string_             | `text`  | -        |
| size                | 大小，可选值为 `large`                                                                              | _string_             | -       | -        |
| maxlength           | 输入的最大字符数                                                                                    | _string \| number_   | -       | -        |
| placeholder         | 占位提示文字                                                                                        | _string_             | -       | -        |
| border              | 是否显示内边框                                                                                      | _boolean_            | `true`  | -        |
| disabled            | 是否禁用输入框                                                                                      | _boolean_            | `false` | -        |
| readonly            | 是否只读                                                                                            | _boolean_            | `false` | -        |
| required            | 是否显示表单必填星号                                                                                | _boolean_            | `false` | -        |
| clearable           | 是否启用清除控件                                                                                    | _boolean_            | `false` | -        |
| clickable           | 是否开启点击反馈                                                                                    | _boolean_            | `false` | -        |
| is-link             | 是否展示右侧箭头并开启点击反馈                                                                      | _boolean_            | `false` | -        |
| show-word-limit     | 是否显示字数统计，需要设置`maxlength`属性                                                           | _boolean_            | `false` | 2.2.8    |
| error               | 是否将输入内容标红                                                                                  | _boolean_            | `false` | -        |
| arrow-direction     | 箭头方向，可选值为 `left` `up` `down`                                                               | _string_             | -       | 2.0.4    |
| error-message       | 底部错误提示文案，为空时不展示                                                                      | _string_             | `''`    | -        |
| label-class         | 左侧文本额外类名                                                                                    | _any_                | -       | -        |
| label-width         | 左侧文本宽度，默认单位为`px`                                                                        | _string \| number_   | `90px`  | -        |
| label-align         | 左侧文本对齐方式，可选值为 `center` `right`                                                         | _string_             | `left`  | -        |
| input-align         | 输入框内容对齐方式，可选值为 `center` `left`                                                       | _string_             | `right`  | -        |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right`                                                     | _string_             | `left`  | -        |
| autosize            | 自适应内容高度，只对 textarea 有效，可传入对象,<br>如 { maxHeight: 100, minHeight: 50 }，单位为`px` | _boolean \| object_  | `false` | -        |
| left-icon           | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                          | _string_             | -       | -        |
| right-icon          | 右侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                          | _string_             | -       | -        |
| right-icon-size     | 右侧图标尺寸，默认单位为`px`                                                                        | _number_ \| _string_ | -       | vant-green@1.0.0 |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件             | 说明                 | 回调参数            |
| ---------------- | -------------------- | ------------------- |
| input            | 输入框内容变化时触发 | value: 输入框当前值 |
| focus            | 输入框获得焦点时触发 | event: Event        |
| blur             | 输入框失去焦点时触发 | event: Event        |
| clear            | 点击清除按钮时触发   | event: Event        |
| click            | 点击时触发           | event: Event        |
| click-left-icon  | 点击左侧图标时触发   | event: Event        |
| click-right-icon | 点击右侧图标时触发   | event: Event        |

### 方法

通过 ref 可以获取到 Field 实例并调用实例方法

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |

### Slots

| 名称       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| label      | 自定义输入框标签                                           |
| input      | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| left-icon  | 自定义输入框头部图标                                       |
| right-icon | 自定义输入框尾部图标                                       |
| button     | 自定义输入框尾部按钮                                       |
| text       | 自定义输入框尾部文字                                       |
