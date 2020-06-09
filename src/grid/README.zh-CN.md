# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航

### 引入

```javascript
import Vue from 'vue';
import { Grid, GridItem } from 'vant-green';

Vue.use(Grid).use(GridItem);
```

## 代码演示

### 基础用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容

```html
<van-grid>
  <van-grid-item v-for="i in 4" :key="i" icon="photo" text="标题" />
</van-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过`column-num`自定义列数

```html
<van-grid :column-num="3">
  <van-grid-item v-for="i in 3" :key="i" icon="photo" text="标题" />
</van-grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容

```html
<van-grid :column-num="2" border>
  <van-grid-item v-for="i in 2" :key="i">
    <ul class="flex-align">
      <van-icon name="photo" :size="48" />
      <div class="margin-left12 line-height1_5">
        <li class="font-size3 van-color-text-primary bold">标题</li>
        <li class="margin-top4 font-size0 van-color-text-secondary">
          描述文字一行
        </li>
      </div>
    </ul>
  </van-grid-item>
</van-grid>
```

```html
<van-grid :column-num="1">
  <van-grid-item>
    <ul class="width100 flex1 flex-align-spacebetween">
      <div class="flex-align">
        <van-icon name="photo" :size="54" />
        <div class="margin-left18 line-height1_5">
          <li class="font-size6 van-color-text-primary bold">标题</li>
          <li class="margin-top6 font-size2 van-color-text-secondary">
            描述文字最多一行
          </li>
        </div>
      </div>
      <van-icon name="more" class="van-color-line-color font-size8" />
    </ul>
  </van-grid-item>
</van-grid>
```

### 边框

```html
<van-grid border :row-num="8/4">
  <van-grid-item v-for="i in 8" :key="i" icon="photo" text="标题" />
</van-grid>
```

### 格子间距

通过`gutter`属性设置格子之间的距离

```html
<van-grid :gutter="10" :row-num="8/4">
  <van-grid-item v-for="i in 8" :key="i" icon="photo" text="标题" />
</van-grid>
```

### 页面导航

通过`to`属性设置`vue-router`跳转链接，通过`url`属性设置 URL 跳转链接

```html
<van-grid clickable :column-num="2">
  <van-grid-item icon="wap-home-o" text="路由跳转" to="/" />
  <van-grid-item icon="search" text="URL 跳转" url="/mobile.html" />
</van-grid>
```

## API

### Grid Props

| 参数       | 说明                               | 类型               | 默认值  | 版本     |
| ---------- | ---------------------------------- | ------------------ | ------- | -------- |
| column-num | 列数                               | _number_           | `4`     | 2.0.4    |
| row-num    | 行数(用来区别每行四个时的多行样式) | _number_           | `1`     | vant-green@1.0.0 |
| gutter     | 格子之间的间距，默认单位为`px`     | _string \| number_ | `0`     | -        |
| border     | 是否显示边框                       | _boolean_          | `false` | -        |
| center     | 是否将格子内容居中显示             | _boolean_          | `true`  | -        |
| square     | 是否将格子固定为正方形             | _boolean_          | `false` | -        |
| clickable  | 是否开启格子点击反馈               | _boolean_          | `false` | -        |
| icon-size  | 图标大小，默认单位为`px`           | _string \| number_ | -       | 2.2.6    |

### GridItem Props

| 参数    | 说明                                                                                      | 类型               | 默认值  | 版本  |
| ------- | ----------------------------------------------------------------------------------------- | ------------------ | ------- | ----- |
| text    | 文字                                                                                      | _string_           | -       | -     |
| icon    | 图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                    | _string_           | -       | -     |
| dot     | 是否显示图标右上角小红点                                                                  | _boolean_          | `false` | 2.2.1 |
| info    | 图标右上角徽标的内容                                                                      | _string \| number_ | -       | 2.2.1 |
| url     | 点击后跳转的链接地址                                                                      | _string_           | -       | -     |
| to      | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -       | -     |
| replace | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false` | -     |

### GridItem Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击格子时触发 | event: Event |

### GridItem Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义宫格的所有内容 |
| icon    | 自定义图标           |
| text    | 自定义文字           |
