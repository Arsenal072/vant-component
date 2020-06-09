# Search 搜索

### 引入

```javascript
import Vue from 'vue';
import { Search } from 'vant-green';

Vue.use(Search);
```

## 代码演示

### 基础用法

v-model 用于控制搜索框中的文字，background 可以自定义搜索框外部背景色，show-action 控制搜索框右侧按钮的展示

```html
<van-search
  v-model="value"
  :show-action="showAction"
  placeholder="请输入搜索关键词"
  @search="onSearch"
  @cancel="onCancel"
  @focus="onFocus"
/>
```

```js
export default {
  data() {
    return {
      value: '',
      showAction: false
    };
  },
  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    }
  }
};
```

### 颜色反转

通过设置 `reverse-color` 属性可以将背景色和搜索框颜色反转

```html
<van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  :show-action="showAction"
  reverse-color
  @search="onSearch"
  @cancel="onCancel"
  @focus="onFocus"
/>
```

```js
export default {
  data() {
    return {
      value: '',
      showAction: false
    };
  },
  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    }
  }
};
```

### 自定义按钮

使用`action`插槽可以自定义右侧按钮的内容。使用插槽后，cancel 事件将不再触发

```html
<van-search
  v-model="value"
  :placeholder="请输入搜索关键词"
  :show-action="showAction"
  @search="onSearch"
  @focus="onFocus"
>
  <div slot="action" @click="value ? onSearch : onCancel">
    {{ value ? '搜索' : '取消' }}
  </div>
</van-search>
```

```js
export default {
  data() {
    return {
      value: '',
      showAction: false
    };
  },
  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    }
  }
};
```

## API

### Props

| 参数               | 说明                                                             | 类型               | 默认值    | 版本     |
| ------------------ | ---------------------------------------------------------------- | ------------------ | --------- | -------- |
| label              | 搜索框左侧文本                                                   | _string_           | -         | -        |
| shape              | 搜索框形状，可选值为 `round`                                     | _string_           | `square`  | -        |
| background         | 搜索框背景色                                                     | _string_           | `#f2f2f2` | -        |
| maxlength          | 输入的最大字符数                                                 | _string \| number_ | -         | -        |
| placeholder        | 占位提示文字                                                     | _string_           | -         | -        |
| clearable          | 是否启用清除控件                                                 | _boolean_          | `true`    | -        |
| show-action        | 是否展示搜索框右侧按钮                                           | _boolean_          | `false`   | -        |
| action-text        | 取消按钮文字                                                     | _boolean_          | `取消`    | 2.2.2    |
| disabled           | 是否禁用输入框                                                   | _boolean_          | `false`   | -        |
| readonly           | 是否将输入框设为只读                                             | _boolean_          | `false`   | -        |
| error              | 是否将输入内容标红                                               | _boolean_          | `false`   | -        |
| input-align        | 输入框内容对齐方式，可选值为 `center` `right`                    | _string_           | `left`    | -        |
| left-icon          | 输入框左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_           | `search`  | -        |
| right-icon         | 输入框右侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_           | -         | -        |
| reverse-color      | 是否设置颜色反转                                                 | _boolean_          | `false`   | vant-green@1.0.0 |
| placeholder-length | 占位提示文字长度                                                 | _number_           | -         | vant-green@1.0.0 |

### Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| search | 确定搜索时触发       | value: 输入框当前值 |
| input  | 输入框内容变化时触发 | value: 输入框当前值 |
| focus  | 输入框获得焦点时触发 | event: Event        |
| blur   | 输入框失去焦点时触发 | event: Event        |
| clear  | 点击清除按钮后触发   | event: Event        |
| cancel | 点击取消按钮时触发   | -                   |

### Slots

| 名称       | 说明                                              |
| ---------- | ------------------------------------------------- |
| label      | 自定义搜索框左侧文本                              |
| action     | 自定义搜索框右侧按钮，设置`show-action`属性后展示 |
| left-icon  | 自定义输入框左侧图标                              |
| right-icon | 自定义输入框右侧图标                              |
