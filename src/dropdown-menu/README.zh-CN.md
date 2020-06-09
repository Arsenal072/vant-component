# DropdownMenu 下拉菜单

### 引入

```javascript
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant-green';

Vue.use(DropdownMenu).use(DropdownItem);
```

## 代码演示

### 基础用法

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    };
  }
};
```

### 多选菜单

通过设置`multiple`属性定义多选菜单，多选菜单项为行内元素

```html
<van-dropdown-menu>
  <van-dropdown-item
    ref="inlineOption"
    title="分组"
    multiple
    :options="inlineOption"
    @change="changeOption"
  >
    <van-button
      plain
      border-color="#e2e2e2"
      class="margin-top20 width50"
      @click="onCancel"
      >次按钮</van-button
    >
    <van-button type="primary" class="margin-top20 width50" @click="onConfirm"
      >主按钮</van-button
    >
  </van-dropdown-item>
  <van-dropdown-item
    ref="inlineOption1"
    title="不分组"
    multiple
    :options="inlineOption1"
    @change="changeOption1"
  >
    <van-button
      type="primary"
      plain
      block
      border-color="#e2e2e2"
      class="margin-top20"
      @click="onConfirm1"
      >主按钮</van-button
    >
  </van-dropdown-item>
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      inlineOption: [
        {
          title: '标题',
          options: [
            { text: '内容' },
            { text: '内容' },
            { text: '内容' },
            { text: '内容' }
          ]
        },
        {
          title: '标题1',
          options: [
            { text: '内容1' },
            { text: '内容1' },
            { text: '内容1' },
            { text: '内容1' }
          ]
        }
      ],
      inlineOption1: [
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' }
      ]
    };
  },
  methods: {
    changeOption(options) {
      this.inlineOption = options;
      this.inlineOption.map(item => {
        console.log(item.options.filter(obj => obj.checked));
      });
    },
    changeOption1(options) {
      this.inlineOption1 = options;
      console.log(this.inlineOption1.filter(obj => obj.checked));
    },
    onCancel() {
      this.$refs.inlineOption.reset();
      this.$refs.inlineOption.toggle();
    },
    onConfirm() {
      this.$refs.inlineOption.toggle();
    },
    onConfirm1() {
      this.$refs.inlineOption1.toggle();
    }
  }
};
```

### 自定义菜单内容

通过插槽可以自定义`DropdownItem`的内容，此时需要使用实例上的`toggle`方法手动控制菜单的显示

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="custom">
    <van-cell title="包邮" cell-class="switch-cell">
      <van-switch v-model="switch1" />
    </van-cell>
    <van-cell title="团购" cell-class="switch-cell">
      <van-switch v-model="switch2" />
    </van-cell>
    <van-button
      type="primary"
      border-color="transparent"
      plain
      block
      @click="onConfirm2"
      >确认</van-button
    >
  </van-dropdown-item>
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    };
  },

  methods: {
    onConfirm2() {
      this.$refs.custom.toggle();
    }
  }
};
```

### 自定义选中态颜色

通过`active-color`属性可以自定义菜单标题和选项的选中态颜色

```html
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 向上展开

将`direction`属性值设置为`up`，菜单即可向上展开

```html
<van-dropdown-menu direction="up">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 禁用菜单

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" disabled :options="option1" />
  <van-dropdown-item v-model="value2" disabled :options="option2" />
</van-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数                   | 说明                         | 类型      | 默认值 | 版本  |
| ---------------------- | ---------------------------- | --------- | ------ | ----- |
| active-color           | 菜单标题和选项的选中态颜色   | _string_  | -      | -     |
| z-index                | 菜单栏 z-index 层级          | _number_  | `10`   | -     |
| duration               | 动画时长，单位秒             | _number_  | `0.2`  | -     |
| direction              | 菜单展开方向，可选值为`up`   | _string_  | `down` | 2.0.1 |
| overlay                | 是否显示遮罩层               | _boolean_ | `true` | -     |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单   | _boolean_ | `true` | -     |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` | 2.0.7 |

### DropdownItem Props

| 参数          | 说明                                                             | 类型                      | 默认值         | 版本     |
| ------------- | ---------------------------------------------------------------- | ------------------------- | -------------- | -------- |
| multiple      | 是否多选                                                         | _boolean_                 | `false`        | vant-green@1.0.0 |
| value         | 当前选中项对应的 value，可以通过`v-model`双向绑定                | _string \| number_        | -              | -        |
| title         | 菜单项标题                                                       | _string_                  | 当前选中项文字 | -        |
| options       | 选项数组                                                         | _Option[]_                | `[]`           | -        |
| disabled      | 是否禁用菜单                                                     | _boolean_                 | `false`        | -        |
| title-class   | 标题额外类名                                                     | _string_                  | -              | -        |
| get-container | 指定弹出菜单挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | _string \| () => Element_ | -              | 2.2.4    |

### DropdownItem Events

| 事件名 | 说明                                                        | 回调参数                              |
| ------ | ----------------------------------------------------------- | ------------------------------------- |
| change | 多选：面板隐藏时触发<br>单选：点击选项导致 value 变化时触发 | 多选：options 选项数组<br>单选：value |
| open   | 打开菜单栏时触发                                            | -                                     |
| opened | 打开菜单栏且动画结束后触发                                  | -                                     |
| close  | 关闭菜单栏时触发                                            | -                                     |

### DropdownItem Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 菜单内容                   |
| title   | 自定义标题，不支持动态渲染 |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法

| 方法名 | 说明                   | 参数          | 返回值 |
| ------ | ---------------------- | ------------- | ------ |
| toggle | 切换菜单是否展示       | show: boolean | -      |
| reset  | 重置选项（多选时生效） | -             | -      |

### Option 数据结构

| 键名  | 说明                                                       | 类型               |
| ----- | ---------------------------------------------------------- | ------------------ |
| text  | 文字                                                       | _string_           |
| value | 标识符                                                     | _string \| number_ |
| icon  | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_           |
