# Button 按钮

### 引入

```javascript
import Vue from 'vue';
import { Button } from 'vant-green';

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<van-button>默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

### 空心按钮

通过`plain`属性将按钮设置为空心按钮，空心按钮的文字为按钮颜色，背景为白色。

```html
<van-button plain>空心按钮</van-button>
<van-button plain type="primary">空心按钮</van-button>
<van-button plain type="info">空心按钮</van-button>
<van-button plain type="danger">空心按钮</van-button>
<van-button plain type="warning">空心按钮</van-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<van-button disabled>禁用状态</van-button>
<van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="info">禁用状态</van-button>
<van-button disabled type="danger">禁用状态</van-button>
<van-button disabled type="warning">禁用状态</van-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过`loading-text`设置加载状态下的文字

```html
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="info" loading-text="加载中..." />
```

### 按钮形状

通过`square`设置方形按钮

```html
<van-button square type="primary">方形按钮</van-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html
<van-button icon="plus" type="primary" />
<van-button icon="plus" type="primary">按钮</van-button>
<van-button plain type="primary" icon="https://img.yzcdn.cn/vant/logo.png"
  >按钮</van-button
>
```

### 按钮尺寸

支持`normal`、`middle`、`small`、`mini`四种尺寸，默认为`normal`

```html
<van-button type="primary">普通按钮</van-button>
<van-button type="primary" size="middle">中号按钮</van-button>
<van-button type="primary" size="small">小型按钮</van-button>
<van-button type="primary" size="mini">迷你按钮</van-button>
```

### 页面导航

可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转

```html
<van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
<van-button type="primary" to="index">路由跳转</van-button>
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色

```html
<van-button color="#7232dd">单色按钮</van-button>
<van-button color="#7232dd" plain>单色按钮</van-button>
<van-button color="linear-gradient(to right, #3AD468, #2DAB53)"
  >渐变色按钮</van-button
>
```

### 自定义边框色

通过`border-color`属性可以自定义按钮的边框颜色

```html
<van-button plain type="primary" border-color="transparent">透明色</van-button>
<van-button plain type="danger" border-color="#cdcdcd">边框色</van-button>
```

### 主按钮

通过`block`属性可以将按钮设置为块级元素。

```html
<van-button type="primary" block>主按钮</van-button>
<van-button type="primary" plain block>空心按钮</van-button>
<van-button block>弱按钮</van-button>
<van-button type="danger" plain block>删除</van-button>
<van-button type="warning" block>辅按钮</van-button>
```

## API

### Props

| 参数         | 说明                                                                                      | 类型               | 默认值     | 版本     |
| ------------ | ----------------------------------------------------------------------------------------- | ------------------ | ---------- | -------- |
| type         | 类型，可选值为 `primary` `info` `warning` `danger`                                        | _string_           | `default`  | -        |
| size         | 尺寸，可选值为 `middle` `small` `mini`                                                    | _string_           | `normal`   | -        |
| text         | 按钮文字                                                                                  | _string_           | -          | -        |
| color        | 按钮颜色，支持传入`linear-gradient`渐变色                                                 | _string_           | -          | 2.1.8    |
| border-color | 按钮边框颜色                                                                              | _string_           | -          | vant-green@1.0.0 |
| icon         | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                | _string_           | -          | -        |
| tag          | HTML 标签                                                                                 | _string_           | `button`   | -        |
| native-type  | 原生 button 标签 type 属性                                                                | _string_           | -          | -        |
| block        | 是否为块级元素                                                                            | _boolean_          | `false`    | -        |
| plain        | 是否为空心按钮                                                                            | _boolean_          | `false`    | -        |
| square       | 是否为方形按钮                                                                            | _boolean_          | `false`    | -        |
| round        | 是否为圆形按钮                                                                            | _boolean_          | `false`    | -        |
| disabled     | 是否禁用按钮                                                                              | _boolean_          | `false`    | -        |
| hairline     | 是否使用 0.5px 边框                                                                       | _boolean_          | `false`    | -        |
| loading      | 是否显示为加载状态                                                                        | _boolean_          | `false`    | -        |
| loading-text | 加载状态提示文字                                                                          | _string_           | -          | -        |
| loading-type | 加载图标类型，可选值为`spinner`                                                           | _string_           | `circular` | -        |
| loading-size | 加载图标大小                                                                              | _string_           | `20px`     | -        |
| url          | 点击后跳转的链接地址                                                                      | _string_           | -          | -        |
| to           | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -          | -        |
| replace      | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`    | -        |

### Events

| 事件名     | 说明                                     | 回调参数          |
| ---------- | ---------------------------------------- | ----------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event      |
| touchstart | 开始触摸按钮时触发                       | event: TouchEvent |
