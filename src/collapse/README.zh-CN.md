# Collapse 折叠面板

### 引入

```javascript
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant-green';

Vue.use(Collapse).use(CollapseItem);
```

## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
</van-collapse>
```

```javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
</van-collapse>
```

```javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### 自定义标题内容

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <div slot="title">标题1 <van-icon name="info" /></div>
    内容
  </van-collapse-item>

  <van-collapse-item title="标题2" name="2" icon="gem">
    内容
  </van-collapse-item>
</van-collapse>
```

```javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| 参数      | 说明                | 类型                                                                   | 默认值  | 版本 |
| --------- | ------------------- | ---------------------------------------------------------------------- | ------- | ---- |
| v-model   | 当前展开面板的 name | 手风琴模式：_string \| number_<br>非手风琴模式：_(string \| number)[]_ | -       | -    |
| accordion | 是否开启手风琴模式  | _boolean_                                                              | `false` | -    |
| border    | 是否显示外边框      | _boolean_                                                              | `true`  | -    |

### Collapse Events

| 事件名 | 说明           | 回调参数                                 |
| ------ | -------------- | ---------------------------------------- |
| change | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### CollapseItem Props

| 参数        | 说明                                                             | 类型               | 默认值  | 版本 |
| ----------- | ---------------------------------------------------------------- | ------------------ | ------- | ---- |
| name        | 唯一标识符，默认为索引值                                         | _string \| number_ | `index` | -    |
| icon        | 标题栏左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_           | -       | -    |
| size        | 标题栏大小，可选值为 `large`                                     | _string_           | -       | -    |
| title       | 标题栏左侧内容                                                   | _string \| number_ | -       | -    |
| value       | 标题栏右侧内容                                                   | _string \| number_ | -       | -    |
| label       | 标题栏描述信息                                                   | _string \| number_ | -       | -    |
| border      | 是否显示内边框                                                   | _boolean_          | `true`  | -    |
| is-link     | 是否展示标题栏右侧箭头并开启点击反馈                             | _boolean_          | `true`  | -    |
| disabled    | 是否禁用面板                                                     | _boolean_          | `false` | -    |
| title-class | 左侧标题额外类名                                                 | _string_           | -       | -    |
| value-class | 右侧内容额外类名                                                 | _string_           | -       | -    |
| label-class | 描述信息额外类名                                                 | _string_           | -       | -    |

### CollapseItem Slots

| 名称       | 说明                          |
| ---------- | ----------------------------- |
| default    | 面板内容                      |
| value      | 自定义显示内容                |
| icon       | 自定义`icon`                  |
| title      | 自定义`title`                 |
| right-icon | 自定义右侧按钮，默认是`arrow` |
