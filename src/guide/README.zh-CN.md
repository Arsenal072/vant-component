# Guide 蒙层页

### 介绍

Guide 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Guide } from 'vant-green';

Vue.use(Guide);
```

## 代码演示

### 基础用法

```html
<van-guide :imgList="imgList" />
```

```javascript
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';

export default {
  data() {
    return {
      imgList: [img1, img2]
    };
  }
};
```

## API

### Props

| 参数     | 说明     | 类型    | 默认值 | 版本     |
| -------- | -------- | ------- | ------ | -------- |
| img-list | 蒙层图片 | _array_ | `[]`   | vant-green@1.0.0 |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| end    | 蒙层结束时触发 | -        |
