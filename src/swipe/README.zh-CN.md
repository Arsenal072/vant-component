# Swipe 轮播

### 引入

```javascript
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant-green';

Vue.use(Swipe).use(SwipeItem);
```

## 代码演示

### 基础用法

通过`autoplay`属性设置自动轮播间隔

```html
<van-swipe :autoplay="3000" :height="160">
  <van-swipe-item default="1">1</van-swipe-item>
  <van-swipe-item default="2">2</van-swipe-item>
  <van-swipe-item default="http://mui.ucmed.cn/images/default/avatar1.png"
    >3</van-swipe-item
  >
  <van-swipe-item
    default="https://pic.rmb.bdstatic.com/e01fc4c2c29bad7063f0edbfe177668d.jpeg"
    >4</van-swipe-item
  >
</van-swipe>
```

### 卡片模式

通过`type="card"`设置卡片模式

```html
<van-swipe type="card" :height="156" :autoplay="3000" :loop="false">
  <van-swipe-item default="1">1</van-swipe-item>
  <van-swipe-item default="2">2</van-swipe-item>
  <van-swipe-item default="1">3</van-swipe-item>
  <van-swipe-item default="2">4</van-swipe-item>
</van-swipe>
```

### 单图模式

通过`type="single"`设置单图模式

```html
<van-swipe type="single" :height="160">
  <van-swipe-item default="1">1</van-swipe-item>
</van-swipe>
```

### 遮罩模式

通过`type="mask"`设置遮罩模式

```html
<van-swipe type="mask" :autoplay="3000" :height="184">
  <van-swipe-item default="1">1</van-swipe-item>
  <van-swipe-item default="2">2</van-swipe-item>
  <van-swipe-item default="1">3</van-swipe-item>
  <van-swipe-item default="2">4</van-swipe-item>
</van-swipe>
```

### 图片懒加载

配合 [Lazyload](#/zh-CN/lazyload) 组件实现图片懒加载

```html
<van-swipe :autoplay="3000" :height="160">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ]
    };
  }
};
```

### 监听 change 事件

```html
<van-swipe :height="160" @change="onChange1">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

```js
export default {
  methods: {
    onChange1(index) {
      this.$toast(this.$t('message') + index);
    }
  }
};
```

### 纵向滚动

设置`vertical`属性后滑块会纵向排列，此时需要指定滑块容器的高度

```html
<van-swipe vertical :autoplay="3000" :height="200" style="height: 200px;">
  <van-swipe-item default="2">1</van-swipe-item>
  <van-swipe-item default="2">2</van-swipe-item>
  <van-swipe-item default="2">3</van-swipe-item>
  <van-swipe-item default="2">4</van-swipe-item>
</van-swipe>
```

### 设置滑块大小

滑块默认宽度为`100%`，可以通过`width`属性设置滑块的宽度，此属性不能与循环播放同时使用

```html
<van-swipe
  :width="300"
  :height="160"
  :loop="false"
  indicator-color="white"
  class="back-swipe"
>
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

### 自定义指示器

通过`indicator`插槽可以自定义指示器的样式

```html
<van-swipe :height="160" @change="onChange2" class="back-swipe">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>

  <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/4</div>
  </template>
</van-swipe>
```

```js
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange2(index) {
      this.current = index;
    }
  }
};
```

## API

### Swipe Props

| 参数             | 说明                                       | 类型      | 默认值    | 版本             |
| ---------------- | ------------------------------------------ | --------- | --------- | ---------------- |
| type             | 轮播图模式，可选值为`card` `single` `mask` | _string_  | -         | vant-green@1.0.0 |
| autoplay         | 自动轮播间隔，单位为 ms                    | _number_  | -         | -                |
| duration         | 动画时长，单位为 ms                        | _number_  | `500`     | -                |
| initial-swipe    | 初始位置索引值                             | _number_  | `0`       | -                |
| width            | 滑块宽度                                   | _number_  | `auto`    | -                |
| height           | 滑块高度                                   | _number_  | -         | -                |
| loop             | 是否开启循环播放                           | _boolean_ | `true`    | -                |
| show-indicators  | 是否显示指示器                             | _boolean_ | `true`    | -                |
| indicator-color  | 指示器颜色                                 | _string_  | `#1989fa` | -                |
| vertical         | 是否为纵向滚动                             | _boolean_ | `false`   | -                |
| touchable        | 是否可以通过手势滑动                       | _boolean_ | `true`    | -                |
| stop-propagation | 是否阻止滑动事件冒泡                       | _boolean_ | `true`    | 2.2.13           |

### Swipe Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwipeItem Props

| 参数    | 说明                                | 类型     | 默认值 | 版本             |
| ------- | ----------------------------------- | -------- | ------ | ---------------- |
| default | 默认图片，可选值为`1` `2`或图片路径 | _string_ | -      | vant-green@1.0.0 |

### SwipeItem Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发 | event: Event |

### Swipe 方法

通过 ref 可以获取到 swipe 实例并调用实例方法

| 方法名  | 说明           | 参数                                 | 返回值 |
| ------- | -------------- | ------------------------------------ | ------ |
| swipeTo | 滚动到目标位置 | index: 目标位置的索引, options: 选项 | void   |

### swipeTo Options 格式

| 名称      | 说明         | 类型      |
| --------- | ------------ | --------- |
| immediate | 是否跳过动画 | _boolean_ |

### Swipe Slots

| 名称      | 说明         |
| --------- | ------------ |
| default   | 轮播内容     |
| indicator | 自定义指示器 |
