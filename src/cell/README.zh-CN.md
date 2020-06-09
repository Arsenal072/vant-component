# Cell 单元格

### 引入

```javascript
import Vue from 'vue';
import { Cell, CellGroup } from 'vant-green';

Vue.use(Cell).use(CellGroup);
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供下外边框

```html
<van-cell-group>
  <van-cell title="标题" value="内容" />
  <van-cell title="标题" value="内容" label="详细信息" />
  <van-cell title="标题" label="详细信息" is-link center />
</van-cell-group>
```

### 展示箭头

设置`is-link`属性后会在单元格右侧显示箭头，并且可以通过`arrow-direction`属性控制箭头方向

```html
<van-cell-group>
  <van-cell title="标题" is-link />
  <van-cell title="标题" is-link value="内容" />
  <van-cell
    title="标题"
    is-link
    value="内容的极限情况内容的极限情况内容的极限情况内容的极限情况"
  />
</van-cell-group>
```

### 颜色反转

设置`reverse-color`属性后标题和内容的颜色会互换

```html
<van-cell-group>
  <van-cell title="标题" value="内容" />
  <van-cell title="标题" value="内容" reverse-color />
</van-cell-group>
```

### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<van-cell title="标题" value="内容" icon="location-o" />
```

### 只设置 value

在一些条件下只需要展示内容文本

```html
<van-cell value="内容" />
```

### 页面导航

可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转

```html
<van-cell-group>
  <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
  <van-cell title="路由跳转" is-link to="index" />
</van-cell-group>
```

### 组合使用

```html
<van-cell-group title="标题">
  <van-cell>
    <van-radio-group v-model="radio2" class="flex">
      <van-radio name="1">内容1</van-radio>
      <van-radio name="2" class="margin-left30">内容2</van-radio>
      <van-radio name="3" class="margin-left30">内容3</van-radio>
    </van-radio-group>
  </van-cell>
</van-cell-group>

<van-cell-group>
  <van-cell title="标题" reverse-color>
    <van-radio-group v-model="radio3" class="flex">
      <van-radio name="1">内容1</van-radio>
      <van-radio name="2" class="margin-left30">内容2</van-radio>
    </van-radio-group>
  </van-cell>
</van-cell-group>

<!-- 使用具名插槽right-icon来自定义内容 -->
<van-cell-group>
  <van-cell title="标题" clickable @click="radio4 = 1">
    <van-icon
      slot="right-icon"
      v-show="radio4 === 1"
      name="success"
      :size="16"
      color="#32ae57"
    />
  </van-cell>
  <van-cell title="标题" clickable @click="radio4 = 2">
    <van-icon
      slot="right-icon"
      v-show="radio4 === 2"
      name="success"
      :size="16"
      color="#32ae57"
    />
  </van-cell>
</van-cell-group>

<van-cell-group>
  <van-radio-group v-model="radio">
    <van-cell title="标题" clickable @click="radio = 1">
      <van-radio slot="right-icon" :name="1" />
    </van-cell>
    <van-cell title="标题" clickable @click="radio = 2">
      <van-radio slot="right-icon" :name="2" />
    </van-cell>
  </van-radio-group>
</van-cell-group>

<!-- 结合van-switch使用需加上类名switch-cell -->
<van-cell-group>
  <van-cell title="标题" cell-class="switch-cell">
    <van-switch slot="right-icon" v-model="checked" />
  </van-cell>
  <van-cell title="标题" cell-class="switch-cell">
    <van-switch slot="right-icon" v-model="checked1" />
  </van-cell>
</van-cell-group>
```

### 插槽用法

如以上用法不能满足你的需求，可以使用插槽来自定义内容

```html
<van-cell
  title="悬赏金 (元)"
  label="增加悬赏金可提高医生积极性、响应更快、服务更好"
>
  <van-stepper
    slot="right-icon"
    v-model="stepper1"
    button-size="24px"
    input-width="38px"
    class="absolute right14"
  />
</van-cell>

<van-cell value="内容" is-link>
  <template slot="title">
    <span class="margin-right5 vertical-middle">标题</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<!-- 使用value-class自定义内容样式 -->
<van-cell-group>
  <van-cell value-class="flex-align-end">
    <template slot="title">
      <div class="flex-align">
        <span class="font-size3 bold">大标题</span>
        <span class="margin-left10 font-size1 van-color-text-regular"
          >/ 副标题</span
        >
        <van-tag type="success" single class="margin-left12">专</van-tag>
      </div>
    </template>
    <template slot="label">
      <span class="font-size0 van-color-text-assist">辅助性文字</span>
    </template>
    <template>
      <span class="font-size2 van-color-warning bold">状态提示</span>
    </template>
  </van-cell>
  <van-cell value-class="flex-align-end">
    <template slot="title">
      <span class="font-size3 bold">大标题</span>
      <span class="margin-left10 font-size1 van-color-text-regular"
        >/ 副标题</span
      >
    </template>
    <template slot="label">
      <span class="font-size0 van-color-text-assist">辅助性文字</span>
    </template>
    <template>
      <span class="font-size2 van-color-text-placeholder bold">状态提示</span>
    </template>
  </van-cell>
</van-cell-group>

<!--使用title-style title-class label-class value-class 自定义样式，通过设置less-spacing减少标题和标题下方的描述信息的间距 -->
<van-cell-group>
  <van-cell
    v-for="(item, index) in list"
    :key="index"
    less-spacing
    title-style="flex: 5"
    title-class="van-multi-ellipsis--l2"
    label-class="font-size0 van-color-text-secondary"
    value-class="margin-left38 flex-align-spacebetween"
  >
    <template slot="title">
      <span class="van-multi-ellipsis--l2">{{ item.title }}</span>
    </template>
    <template slot="label">{{ item.label }}</template>
    <template>
      <span class="font-size1 van-color-text-assist">
        {{ item.unit }}
      </span>
      <span class="font-size2 van-color-text-assist">
        {{ item.price }}
        <i class="font-size-2">元</i>
      </span>
    </template>
  </van-cell>
</van-cell-group>
```

```js
export default {
  data() {
    return {
      list: [
        {
          title: '标题',
          label: '辅助性文字',
          unit: '单位',
          price: '50.00'
        },
        {
          title:
            '标题可以换行的极限情况标题可以换行标题可以换行的极限情况标题可以换行',
          label: '辅助性文字',
          unit: '单位',
          price: '750.00'
        }
      ]
    };
  }
};
```

### 页脚

自定义页脚内容

```html
<van-cell
  cell-class="van-bgcolor-background-color"
  value-class="line-height32 text-align-center"
  :border="false"
>
  <template>
    <span class="font-size-2 van-color-text-placeholder"
      >- 技术支持：杭州卓健信息科技有限公司 -</span
    >
  </template>
</van-cell>

<van-cell
  cell-class="margin-top12 van-bgcolor-background-color"
  value-class="line-height32 text-align-center"
  :border="false"
>
  <template>
    <span class="font-size0 van-color-text-secondary">没有更多了</span>
  </template>
</van-cell>

<van-cell
  cell-class="margin-top12 van-bgcolor-background-color"
  value-class="line-height32 text-align-center font-size-2 van-color-text-placeholder"
  :border="false"
>
  <template>
    <span class="font-size-2 van-color-text-secondary">
      客服电话：
      <span class="van-color-success">400 848 1766</span>
    </span>
  </template>
</van-cell>
```

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 | 版本 |
| ------ | -------------- | --------- | ------ | ---- |
| title  | 分组标题       | _string_  | `-`    | -    |
| border | 是否显示外边框 | _boolean_ | `true` | -    |

### Cell Props

| 参数            | 说明                                                                                      | 类型               | 默认值  | 版本     |
| --------------- | ----------------------------------------------------------------------------------------- | ------------------ | ------- | -------- |
| icon            | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                | _string_           | -       | -        |
| title           | 左侧标题                                                                                  | _string \| number_ | -       | -        |
| value           | 右侧内容                                                                                  | _string \| number_ | -       | -        |
| label           | 标题下方的描述信息                                                                        | _string_           | -       | -        |
| size            | 单元格大小，可选值为 `large`                                                              | _string_           | -       | -        |
| url             | 点击后跳转的链接地址                                                                      | _string_           | -       | -        |
| to              | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -       | -        |
| border          | 是否显示内边框                                                                            | _boolean_          | `true`  | -        |
| replace         | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false` | -        |
| clickable       | 是否开启点击反馈                                                                          | _boolean_          | `false` | -        |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                            | _boolean_          | `false` | -        |
| required        | 是否显示表单必填星号                                                                      | _boolean_          | `false` | -        |
| center          | 是否使内容垂直居中                                                                        | _boolean_          | `false` | -        |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down`                                                     | _string_           | -       | -        |
| cell-class      | 单元格额外类名                                                                            | _any_              | -       | vant-green@1.0.0 |
| title-style     | 左侧标题额外样式                                                                          | _any_              | -       | -        |
| title-class     | 左侧标题额外类名                                                                          | _any_              | -       | -        |
| value-class     | 右侧内容额外类名                                                                          | _any_              | -       | -        |
| label-class     | 描述信息额外类名                                                                          | _any_              | -       | -        |
| reverse-color   | 是否设置标题文字颜色和内容文字颜色互换                                                    | _boolean_          | `false` | vant-green@1.0.0 |
| less-spacing    | 是否减少标题和标题下方的描述信息的间距                                                    | _boolean_          | `false` | vant-green@1.0.0 |

### Cell Events

| 事件名 | 说明             | 回调参数     |
| ------ | ---------------- | ------------ |
| click  | 点击单元格时触发 | event: Event |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称       | 说明                          |
| ---------- | ----------------------------- |
| default    | 自定义右侧内容                |
| title      | 自定义左侧标题                |
| label      | 自定义标题下方描述            |
| icon       | 自定义左侧图标                |
| right-icon | 自定义右侧按钮，默认为`arrow` |
