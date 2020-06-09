# Notify 消息提示

### 引入

```javascript
import Vue from 'vue';
import { Notify } from 'vant-green';

Vue.use(Notify);
```

## 代码演示

### 基础用法

```js
Notify('通知内容');
```

### 通知类型

支持`success`、`info`、`danger`、`warning`四种通知类型，默认为`success`

```js
// 成功通知
Notify({ type: 'success', message: '通知内容' });

// 信息通知
Notify({ type: 'info', message: '通知内容' });

// 危险通知
Notify({ type: 'danger', message: '通知内容' });

// 警告通知
Notify({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长

```js
Notify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1'
});

Notify({
  message: '自定义时长',
  duration: 1000
});
```

### 组件内调用

引入 Notify 组件后，会自动在 Vue 的 prototype 上挂载 \$notify 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$notify('提示文案');
  }
};
```

## API

### 方法

| 方法名                     | 说明                             | 参数                | 返回值      |
| -------------------------- | -------------------------------- | ------------------- | ----------- |
| Notify                     | 展示提示                         | `options | message` | notify 实例 |
| Notify.clear               | 关闭提示                         | -                   | `void`      |
| Notify.setDefaultOptions   | 修改默认配置，对所有 Notify 生效 | `options`           | `void`      |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | -                   | `void`      |

### Options

| 参数       | 说明                                     | 类型       | 默认值    | 版本     |
| ---------- | ---------------------------------------- | ---------- | --------- | -------- |
| type       | 类型，可选值为 `info` `danger` `warning` | _string_   | `success` | vant-green@1.0.0 |
| message    | 展示文案，支持通过`\n`换行               | _string_   | -         | -        |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失 | _number_   | `3000`    | -        |
| color      | 字体颜色                                 | _string_   | `#fff`    | -        |
| background | 背景颜色                                 | _string_   | -         | -        |
| className  | 自定义类名                               | _any_      | -         | -        |
| onClick    | 点击时的回调函数                         | _Function_ | -         | -        |
| onOpened   | 完全展示后的回调函数                     | _Function_ | -         | -        |
| onClose    | 关闭时的回调函数                         | _Function_ | -         | -        |
