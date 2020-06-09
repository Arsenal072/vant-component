# Status 状态

### 介绍

Status 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Status } from 'vant-green';

Vue.use(Status);
```

## 代码演示

### 基础用法 1

orient 为 horizontal（默认）

```html
<!-- 风格一 -->
<van-status :figure="1" title="待付款" />

<!-- 风格二 -->
<van-status
  type="2"
  :figure="10"
  title="患者已经出院"
  background="linear-gradient(270deg, #5488FB 0%, #61B8FF 100%)"
/>
```

### 基础用法 2

orient 设置为 vertical

```html
<!-- 风格一 -->
<van-status orient="vertical" :figure="14" title="当前还未开诊"></van-status>

<!-- 风格二 -->
<van-status
  orient="vertical"
  type="2"
  :figure="14"
  title="当前还未开诊"
></van-status>
```

## API

### Props

| 参数       | 说明                                      | 类型               | 默认值       | 版本     |
| ---------- | ----------------------------------------- | ------------------ | ------------ | -------- |
| orient     | 排列方向，可选值为 `vertical`             | _string_           | `horizontal` | vant-green@1.0.0 |
| type       | 风格类型，可选值为 `2`                    | _string_           | `1`          | vant-green@1.0.0 |
| figure     | 插图标识或路径，可选值见[figure](#figure) | _string \| number_ | `1`          | vant-green@1.0.0 |
| title      | 标题文本                                  | _string_           | -            | vant-green@1.0.0 |
| tip        | 提示文本                                  | _string_           | -            | vant-green@1.0.0 |
| background | 背景样式                                  | _string_           | -            | vant-green@1.0.0 |

### figure

| 序号 | 可选值         | 对应图片       |
| :--- | :------------- | :------------- |
| 1    | number 1 ～ 18 | 插图 1 ～ 18   |
| 2    | string         | 自定义插图 url |

### Slots

| 名称    | 内容     |
| ------- | -------- |
| default | 组件内容 |
| figure  | 插图内容 |
