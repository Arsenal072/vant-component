# OtherCard 就诊卡

### 介绍

OtherCard 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { OtherCard } from 'vant-green';

Vue.use(OtherCard);
```

## 代码演示

### 基础用法

```html
<van-other-card :figure="1" />
```

### Props

| 参数   | 说明       | 类型     | 默认值 | 版本     |
| ------ | ---------- | -------- | ------ | -------- |
| figure | 卡片的图片 | _number_ | -      | vant-green@1.0.0 |

### figure

| 序号 | 可选值         | 对应图片       |
| :--- | :------------- | :------------- |
| 1    | number 1 ～ 21 | 卡片图 1 ～ 21 |
