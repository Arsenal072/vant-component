# Nodata 无数据

### 介绍

Nodata 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Nodata } from 'vant-green';

Vue.use(Nodata);
```

## 代码演示

### 基础用法

```html
<van-nodata :figure="2" title="标题" tip="提示" button="按钮文本" />
```

## API

### Props

| 参数   | 说明           | 类型               | 默认值 | 版本     |
| ------ | -------------- | ------------------ | ------ | -------- |
| title  | 标题文本       | _string_           | -      | vant-green@1.0.0 |
| figure | 插图标识或路径 | _string \| number_ | `1`    | vant-green@1.0.0 |
| tip    | 提示文本       | _string_           | -      | vant-green@1.0.0 |
| button | 按钮文本       | _string_           | -      | vant-green@1.0.0 |

### figure

| 序号 | 可选值         | 对应图片       |
| :--- | :------------- | :------------- |
| 1    | number 1 ～ 22 | 插图 1 ～ 22   |
| 2    | string         | 自定义插图 url |

### Events

| 事件名      | 说明           | 回调参数 |
| ----------- | -------------- | -------- |
| clickButton | 点击按钮时触发 | -        |

### Slots

| 名称    | 内容     |
| ------- | -------- |
| default | 组件内容 |
| figure  | 插图内容 |
