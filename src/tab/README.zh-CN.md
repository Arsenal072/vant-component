# Tab 标签页

### 引入

```javascript
import Vue from 'vue';
import { Tab, Tabs } from 'vant-green';

Vue.use(Tab).use(Tabs);
```

## 代码演示

### 基础用法

通过`v-model`绑定当前激活标签对应的索引值，默认情况下启用第一个标签。tab 为两个时，标题之间有分割线。

```html
<van-tabs v-model="active">
  <van-tab title="标题" v-for="index in 2" :key="index" />
</van-tabs>

<van-tabs v-model="active">
  <van-tab title="标题" v-for="index in 3" :key="index" />
</van-tabs>
```

```js
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
<van-tabs v-model="activeName">
  <van-tab name="a" title="标题" />
  <van-tab name="b" title="标题" />
  <van-tab name="c" title="标题" />
  <van-tab name="d" title="标题" />
</van-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a'
    };
  }
};
```

### 标签栏滚动

标签数量超过 4 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中

```html
<van-tabs>
  <van-tab v-for="index in 8" title="标题" :key="index" />
</van-tabs>
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`van-tabs`上监听`disabled`事件

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab
    v-for="index in 3"
    title="标题"
    :disabled="index === 2"
    :key="index"
  />
</van-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(name, title) {
      this.$toast(name + '已被禁用');
    }
  }
};
```

### 样式风格

`Tab`支持三种样式风格：`line`，`arrow`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<van-tabs type="arrow" v-model="active">
  <van-tab title="标题"></van-tab>
  <van-tab title="标题"></van-tab>
  <van-tab title="标题"></van-tab>
</van-tabs>

<van-tabs type="card" v-model="active">
  <van-tab title="标题"></van-tab>
  <van-tab title="标题"></van-tab>
  <van-tab title="标题"></van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 点击事件

可以在`van-tabs`上绑定`click`事件，事件传参为标签对应的索引和标题

```html
<van-tabs @click="onClick">
  <van-tab title="标题"></van-tab>
  <van-tab title="标题"></van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClick(index, title) {
      this.$toast(`${index} ${title}`);
    }
  }
};
```

### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<van-tabs v-model="active" sticky>
  <van-tab v-for="index in 4" title="标题"> </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 自定义标签

通过 title 插槽可以自定义标签内容

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 2" :key="index">
    <div slot="title">
      <van-icon name="more" class="font-size-2" />
      标题
    </div>
  </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 切换动画

通过`animated`属性可以开启切换标签内容时的转场动画

```html
<van-tabs v-model="active" animated>
  <van-tab v-for="index in 4" title="标题">
    <div class="padding20X paddingX14 van-bgcolor-white">
      内容 {{ index }}
    </div>
  </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页

```html
<van-tabs v-model="active" swipeable>
  <van-tab v-for="index in 4" title="标题">
    <div class="padding20X paddingX14 van-bgcolor-white">
      内容 {{ index }}
    </div>
  </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 0
    };
  }
};
```

## API

### Tabs Props

| 参数                 | 说明                                        | 类型               | 默认值    | 版本     |
| -------------------- | ------------------------------------------- | ------------------ | --------- | -------- |
| v-model              | 绑定当前选中标签的标识符                    | _string \| number_ | `0`       | -        |
| type                 | 样式类型，可选值为`line` `card` `arrow`     | _string_           | `line`    | vant-green@1.0.0 |
| duration             | 动画时间，单位秒                            | _number_           | `0.3`     | -        |
| background           | 标签栏背景色                                | _string_           | `white`   | -        |
| line-width           | 底部条宽度，默认单位 px                     | _string \| number_ | `auto`    | -        |
| line-height          | 底部条高度，默认单位 px                     | _string \| number_ | `3px`     | -        |
| color                | 标签主题色                                  | _string_           | `#ee0a24` | -        |
| title-active-color   | 标题选中态颜色                              | _string_           | -         | -        |
| title-inactive-color | 标题默认态颜色                              | _string_           | -         | -        |
| swipe-threshold      | 滚动阈值，标签数量超过多少个可滚动          | _number_           | `4`       | -        |
| offset-top           | 粘性定位布局下与顶部的最小距离，单位 px     | _number_           | `0`       | -        |
| animated             | 是否开启切换标签内容时的转场动画            | _boolean_          | `false`   | -        |
| border               | 是否显示标签栏下外边框，`type="card"`时无效 | _boolean_          | `true`    | vant-green@1.0.0 |
| ellipsis             | 是否省略过长的标题文字                      | _boolean_          | `true`    | -        |
| sticky               | 是否使用粘性定位布局                        | _boolean_          | `false`   | -        |
| swipeable            | 是否开启手势滑动切换                        | _boolean_          | `false`   | -        |
| lazy-render          | 是否开启标签页内容延迟渲染                  | _boolean_          | `true`    | -        |

### Tab Props

| 参数     | 说明                                                                                      | 类型               | 默认值       | 版本  |
| -------- | ----------------------------------------------------------------------------------------- | ------------------ | ------------ | ----- |
| name     | 标签名称，作为匹配的标识符                                                                | _string \| number_ | 标签的索引值 | 2.0.6 |
| title    | 标题                                                                                      | _string_           | -            | -     |
| disabled | 是否禁用标签                                                                              | _boolean_          | `false`      | -     |
| url      | 点击后跳转的链接地址                                                                      | _string_           | -            | 2.2.1 |
| to       | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -            | 2.2.1 |
| replace  | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`      | 2.2.1 |

### Tabs Slots

| 名称      | 说明         |
| --------- | ------------ |
| nav-left  | 标题左侧内容 |
| nav-right | 标题右侧内容 |

### Tab Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 标签页内容                 |
| title   | 自定义标题，不支持动态渲染 |

### Tabs Events

| 事件名   | 说明                               | 回调参数                                       |
| -------- | ---------------------------------- | ---------------------------------------------- |
| click    | 点击标签时触发                     | name：标签标识符，title：标题                  |
| change   | 当前激活的标签改变时触发           | name：标签标识符，title：标题                  |
| disabled | 点击被禁用的标签时触发             | name：标签标识符，title：标题                  |
| scroll   | 滚动时触发，仅在 sticky 模式下生效 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
