# Result 结果页

### 介绍

Result 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Result } from 'vant-green';

Vue.use(Result);
```

## 代码演示

### 基础用法

```html
<van-result type="success" />
<van-result
  type="fail"
  tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
/>
```

### 行内样式

通过`inline`设置为行内样式

```html
<van-result type="success" text-color="#00982D" inline />
<van-result type="fail" text-color="#FF5F4E" inline />
<van-result
  type="success"
  tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
  text-color="#00982D"
  inline
/>
<van-result
  type="fail"
  tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
  text-color="#FF5F4E"
  inline
/>
```

### 自定义图标

通过`icon`设置图标

```html
<van-result
  icon="star"
  color="#dfec12"
  tip="提示提示提示提示提示提示提示提示"
  title="标题"
/>
```

### 插槽用法

```html
<van-result type="success">
  <p class="margin-top8 font-size0 van-color-text-assist line-height20">
    提示文字
    <span class="van-color-warning">重点内容</span> 等等等
  </p>
</van-result>
```

## API

### Props

| 参数       | 说明                                | 类型      | 默认值  | 版本     |
| ---------- | ----------------------------------- | --------- | ------- | -------- |
| type       | 图标类型，可选值为 `success` `fail` | _string_  | -       | vant-green@1.0.0 |
| inline     | 是否排列在同一行                    | _boolean_ | `false` | vant-green@1.0.0 |
| icon       | 图标名称                            | _string_  | -       | vant-green@1.0.0 |
| title      | 标题文本                            | _string_  | -       | vant-green@1.0.0 |
| tip        | 提示文本                            | _string_  | -       | vant-green@1.0.0 |
| color      | 图标颜色                            | _string_  | -       | vant-green@1.0.0 |
| text-color | 文本颜色                            | _string_  | -       | vant-green@1.0.0 |

### Slots

| 名称    | 内容           |
| ------- | -------------- |
| default | 自定义组件内容 |
| icon    | 图标插槽       |
