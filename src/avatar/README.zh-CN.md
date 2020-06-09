# Avatar 头像

### 介绍

Avatar 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Avatar } from 'vant-green';

Vue.use(Avatar);
```

## 代码演示

### 基础用法

```html
<van-avatar :figure="2" size="100" :radius="4" />
```

### Props

| 参数       | 说明                                          | 类型               | 默认值  | 版本     |
| ---------- | --------------------------------------------- | ------------------ | ------- | -------- |
| figure     | 头像图片标识或路径，可选值见[figure](#figure) | _string \| number_ | `1`     | vant-green@1.0.0 |
| size       | 头像尺寸大小                                  | _string \| number_ | -       | vant-green@1.0.0 |
| radius     | 头像圆角大小                                  | _string \| number_ | -       | vant-green@1.0.0 |
| round      | 头像是否为圆形                                | _boolaen_          | `false` | vant-green@1.0.0 |
| background | 头像背景色                                    | _string_           | -       | vant-green@1.0.0 |

### figure

| 序号 | 可选值         | 对应图片       |
| :--- | :------------- | :------------- |
| 1    | number 1 ～ 18 | 头像 1 ～ 18   |
| 2    | string         | 自定义头像 url |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
