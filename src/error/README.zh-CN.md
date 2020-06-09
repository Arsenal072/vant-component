# Error 报错

### 介绍

Error 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Error } from 'vant-green';

Vue.use(Error);
```

## 代码演示

### 基础用法

```html
<van-error
  :figure="2"
  title="您访问的页面不存在！"
  tip="您可能输错地址，或页面已删除！"
  button="返回首页"
/>
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

| 序号 | 可选值 | 对应图片       |
| :--- | :----- | :------------- |
| 1    | 1      | 网络繁忙插图   |
| 2    | 2      | 404 插图       |
| 3    | 3      | 503 插图       |
| 4    | string | 自定义插图 url |

### Slots

| 名称    | 内容     |
| ------- | -------- |
| default | 组件内容 |
| figure  | 插图内容 |
