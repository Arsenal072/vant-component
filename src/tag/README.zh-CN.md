# Tag 标记

### 引入

```javascript
import Vue from 'vue';
import { Tag } from 'vant-green';

Vue.use(Tag);
```

## 代码演示

### 基础用法

通过`type`属性控制标签颜色，默认为灰色

```html
<van-tag>标签</van-tag>
<van-tag type="success">标签</van-tag>
<van-tag type="info">标签</van-tag>
<van-tag type="danger">标签</van-tag>
<van-tag type="warning">标签</van-tag>
```

### 圆角样式

通过`round`设置为圆角样式

```html
<van-tag round>标签</van-tag>
<van-tag type="success" round>标签</van-tag>
<van-tag type="info" round>标签</van-tag>
<van-tag type="danger" round>标签</van-tag>
<van-tag type="warning" round>标签</van-tag>
```

### 标记样式

通过`mark`设置为标记样式(水印)

```html
<van-tag mark>已诊断</van-tag>
<van-tag mark type="success">已诊断</van-tag>
<van-tag mark type="info">标签</van-tag>
<van-tag mark type="danger">标签</van-tag>
<van-tag mark type="warning">标签</van-tag>
```

### 背景填充

通过`:plain='false'`设置为背景填充

```html
<van-tag :plain="false">标签</van-tag>
<van-tag type="success" :plain="false">标签</van-tag>
<van-tag type="info" :plain="false">标签</van-tag>
<van-tag type="danger" :plain="false" round>标签</van-tag>
<van-tag type="warning" :plain="false" round>标签</van-tag>
```

### 自定义颜色

```html
<van-tag color="#6E6E6E">标签</van-tag>
<van-tag text-color="#666666" :plain="false">标签</van-tag>
<van-tag color="#6E6E6E" round>标签</van-tag>
<van-tag text-color="#666666" round :plain="false">标签</van-tag>
<van-tag color="#7232dd">标签</van-tag>
<van-tag color="#F0EAFB" text-color="#7232dd" :plain="false">标签</van-tag>
```

### 标签大小

```html
<van-tag type="success" size="small">标签</van-tag>
<van-tag type="success">标签</van-tag>
<van-tag type="success" size="small" :plain="false">标签</van-tag>
<van-tag type="success" :plain="false">标签</van-tag>
<van-tag type="success" size="small" round>标签</van-tag>
<van-tag type="success" round>标签</van-tag>
<van-tag type="success" size="small" round :plain="false">标签</van-tag>
<van-tag type="success" round :plain="false">标签</van-tag>
```

### 独字标签

```html
<van-tag single>专</van-tag>
<van-tag type="success" single>专</van-tag>
<van-tag type="info" single>专</van-tag>
<van-tag type="danger" single>专</van-tag>
<van-tag type="warning" single>专</van-tag>
<van-tag color="#32ae57" single>专</van-tag>
```

### 可关闭标签

添加`closeable`属性表示标签是可关闭的，关闭标签时会触发`close`事件，在`close`事件中可以执行隐藏标签的逻辑

```html
<van-tag v-if="show.success" closeable type="success" @close="close('success')">
  标签
</van-tag>
<van-tag v-if="show.info" closeable type="info" @close="close('info')">
  标签
</van-tag>
```

```js
export default {
  data() {
    return {
      show: {
        info: true,
        success: true
      }
    };
  },
  methods: {
    close(type) {
      this.show[type] = false;
    }
  }
};
```

## API

### Props

| 参数       | 说明                                              | 类型      | 默认值    | 版本     |
| ---------- | ------------------------------------------------- | --------- | --------- | -------- |
| type       | 类型，可选值为`success` `info` `danger` `warning` | _string_  | `default` | vant-green@1.0.0 |
| size       | 大小, 可选值为`small`                             | _string_  | -         | vant-green@1.0.0 |
| color      | 标签颜色                                          | _string_  | -         | -        |
| plain      | 是否为空心样式                                    | _boolean_ | `true`    | vant-green@1.0.0 |
| round      | 是否为圆角样式                                    | _boolean_ | `false`   | -        |
| mark       | 是否为标记样式                                    | _boolean_ | `false`   | -        |
| text-color | 文本颜色，优先级高于`color`属性                   | _string_  | `white`   | -        |
| closeable  | 是否为可关闭标签                                  | _boolean_ | `false`   | 2.2.9    |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击时触发     | event: Event |
| close  | 关闭标签时触发 | -            |
