# Tabbar 标签栏

### 引入

```javascript
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant-green';

Vue.use(Tabbar).use(TabbarItem);
```

## 代码演示

### 基础用法

`v-model`默认绑定选中标签的索引值，通过修改`v-model`即可切换选中的标签

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o" info="3">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 背景透明

```html
<van-tabbar v-model="active" transparent :border="false">
  <van-tabbar-item icon="wap-home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="location-o">标签</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 通过名称匹配

在标签指定`name`属性的情况下，`v-model`的值为当前标签的`name`

```html
<van-tabbar v-model="activeName">
  <van-tabbar-item name="home" icon="wap-home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="location" icon="location-o">标签</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      activeName: 'home'
    };
  }
};
```

### 自定义图标

通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中

```html
<van-tabbar v-model="active">
  <van-tabbar-item info="3">
    <span>自定义</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.inactive"
    />
  </van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="gem">标签</van-tabbar-item>
  <van-tabbar-item icon="user-o">标签</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
```

### 自定义颜色

```html
<van-tabbar v-model="active" active-color="#4d1360" inactive-color="#000">
  <van-tabbar-item icon="wap-home-o" info="5">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="location-o">标签</van-tabbar-item>
  <van-tabbar-item icon="gem">标签</van-tabbar-item>
  <van-tabbar-item icon="user-o">标签</van-tabbar-item>
</van-tabbar>
```

## API

### Tabbar Props

| 参数                   | 说明                                                                            | 类型               | 默认值    | 版本     |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------ | --------- | -------- |
| v-model                | 当前选中标签的名称或索引值                                                      | _string \| number_ | `0`       | -        |
| fixed                  | 是否固定在底部                                                                  | _boolean_          | `true`    | -        |
| border                 | 是否显示上外边框                                                                | _boolean_          | `true`    | vant-green@1.0.0 |
| z-index                | 元素 z-index                                                                    | _number_           | `1`       | -        |
| active-color           | 选中标签的颜色                                                                  | _string_           | `#1989fa` | -        |
| inactive-color         | 未选中标签的颜色                                                                | _string_           | `#7d7e80` | -        |
| route                  | 是否开启路由模式                                                                | _boolean_          | `false`   | -        |
| transparent            | 背景是否透明                                                                    | _boolean_          | `false`   | vant-green@1.0.0 |
| safe-area-inset-bottom | 是否开启底部安全区适配，[详细说明](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_          | `true`    | -        |

### Tabbar Events

| 事件名 | 说明           | 回调参数                           |
| ------ | -------------- | ---------------------------------- |
| change | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数    | 说明                                                                                      | 类型               | 默认值           | 版本 |
| ------- | ----------------------------------------------------------------------------------------- | ------------------ | ---------------- | ---- |
| name    | 标签名称，作为匹配的标识符                                                                | _string \| number_ | 当前标签的索引值 | -    |
| icon    | 图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                    | _string_           | -                | -    |
| dot     | 是否显示图标右上角小红点                                                                  | _boolean_          | `false`          | -    |
| info    | 图标右上角徽标的内容                                                                      | _string \| number_ | -                | -    |
| url     | 点击后跳转的链接地址                                                                      | _string_           | -                | -    |
| to      | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -                | -    |
| replace | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`          | -    |

### TabbarItem Slots

| 名称 | 说明       | SlotProps              |
| ---- | ---------- | ---------------------- |
| icon | 自定义图标 | active: 是否为选中标签 |
