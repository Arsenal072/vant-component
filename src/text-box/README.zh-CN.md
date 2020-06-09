# TextBox 图文列表

### 介绍

TextBox 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { TextBox } from 'vant-green';

Vue.use(TextBox);
```

## 代码演示

### 基础用法 1

type 为 1

```html
<div>
  <van-text-box
    title="大标题"
    content="列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容"
  />
</div>
<div
  class="padding-top16 padding-bottom8 padding-left14 van-bgcolor-white van-color-text-secondary font-size0 line-height1_5"
>
  列表小标题
</div>
```

### 基础用法 2

type 为 2

```html
<van-text-box
  cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
  type="2"
  title="标题"
  content="辅助性文字描述辅助性文字"
  sub-content="456789"
>
  <div slot="tip" class="font-size-2 van-color-text-secondary flex-align">
    <van-icon name="browsing-history" color="#C9C9C9" />
    <span class="margin-left4">345</span>
  </div>
</van-text-box>
```

### 基础用法 3

type 为 3

```html
<van-text-box
  cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
  type="3"
  title="标题"
  sub-title="副标题"
  tip="提示文字"
  content="描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文极限描述性文字描述性文字描述性文字"
/>
```

### 基础用法 4

type 为 4

```html
<van-text-box
  cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
  type="4"
  title="标题内容"
  :sub-title="['头孢地尼胶囊 (0.1g×14片)', '(0.5+0.5俊特)亚胺培南西司他丁针0.5克*1瓶']"
  :sub-content="[['发药数量: 1盒', '单次剂量: 1ml', '给药方式: 皮下注射', '频率: Q12HJY', '用药天数: 2'],['发药数量: 1盒', '单次剂量: 1ml', '给药方式: 皮下注射', '频率: Q12HJY', '用药天数: 2']]"
/>
```

### 基础用法 5

type 为 5

```html
<van-text-box
  cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
  type="5"
  title="标题"
  sub-title="辅助性文字"
  tip="提示文字"
  content="辅助性文字"
>
  <template>
    <van-divider dashed />
    <van-row type="flex" justify="end" class="padding10X padding-right14">
      <van-button type="warning" size="small">辅助按钮</van-button>
    </van-row>
  </template>
</van-text-box>
```

## API

### Props

| 参数        | 说明     | 类型                                              | 默认值 | 版本     |
| ----------- | -------- | ------------------------------------------------- | ------ | -------- |
| type        | 类型     | _string_                                          | `1`    | vant-green@1.0.0 |
| cover       | 图片地址 | _string_                                          | -      | vant-green@1.0.0 |
| title       | 标题     | _string_                                          | -      | vant-green@1.0.0 |
| content     | 内容     | _string_                                          | -      | vant-green@1.0.0 |
| sub-title   | 副标题   | _string_ \| _array_(type=4 时支持传入 array 类型) | -      | vant-green@1.0.0 |
| tip         | 提示     | _string_                                          | -      | vant-green@1.0.0 |
| sub-content | 辅助内容 | _string_ \| _array_(type=4 时支持传入 array 类型) | -      | vant-green@1.0.0 |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 组件内容插槽       |
| cover   | 图片插槽内容       |
| title   | 标题插槽内容       |
| content | 辅助性文本插槽内容 |
| tip     | 提示文本插槽内容   |
