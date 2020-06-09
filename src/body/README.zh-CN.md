# Body 身体

### 介绍

Body 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Body } from 'vant-green';

Vue.use(Body);
```

## 代码演示

### 基础用法

```html
<van-body :figure="1" />
```

### Props

| 参数   | 说明                                | 类型               | 默认值 | 版本     |
| ------ | ----------------------------------- | ------------------ | ------ | -------- |
| figure | 身体图片，可选值见[figure](#figure) | _number \| string_ | -      | vant-green@1.0.0 |
| title  | 图片标题                            | _string_           | -      | vant-green@1.0.0 |

### figure

| 序号 | 可选值         | 对应图片       |
| :--- | :------------- | :------------- |
| 1    | number 1 ～ 13 | 身体图 1 ～ 13 |
