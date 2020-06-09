# Schedule 排班

### 介绍

Schedule 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { Schedule } from 'vant-green';

Vue.use(Schedule);
```

## 代码演示

### 基础用法

```html
<van-schedule
  :data="data"
  data-key="text"
  prefix="周"
  lighter="停诊"
  :opacity="['约满', '停诊']"
  start="2020/1/1"
  date-format="mm.dd"
  :label="['上午', '下午', '晚上']"
  title="排班信息"
/>
```

```javascript
export default {
  data() {
    return {
      data: [
        [
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '' }
        ],
        [
          { text: '' },
          { text: '约满' },
          { text: '' },
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '' }
        ],
        [
          { text: '' },
          { text: '停诊' },
          { text: '' },
          { text: '' },
          { text: '' },
          { text: '停诊' },
          { text: '停诊' }
        ]
      ]
    };
  }
};
```

## API

### Props

| 参数        | 说明                     | 类型              | 默认值    | 版本     |
| ----------- | ------------------------ | ----------------- | --------- | -------- |
| title       | 表格标题                 | _string_          | -         | vant-green@1.0.0 |
| data        | 表格数据                 | _array_           | `[]`      | vant-green@1.0.0 |
| data-key    | 数据键值                 | _string_          | `content` | vant-green@1.0.0 |
| calendar    | 表头日历                 | _array_           | -         | vant-green@1.0.0 |
| label       | 第一列文本（行标题）     | _array_           | -         | vant-green@1.0.0 |
| start       | 表头开始日期             | _string_          | -         | vant-green@1.0.0 |
| days        | 表头天数                 | _number_          | `7`       | vant-green@1.0.0 |
| prefix      | 星期的前缀，可选值为`周` | _string_          | `星期`    | vant-green@1.0.0 |
| exclude     | 排除的星期               | _array_           | -         | vant-green@1.0.0 |
| show-week   | 是否展示星期             | _boolean_         | `true`    | vant-green@1.0.0 |
| date-format | 日期格式                 | _string_          | `mm-dd`   | vant-green@1.0.0 |
| lighter     | 变浅的文本               | _string \| array_ | -         | vant-green@1.0.0 |
| opacity     | 设置透明度的文本         | _string \| array_ | -         | vant-green@1.0.0 |

### Slots

| 名称    | 内容             |
| ------- | ---------------- |
| default | 内容插槽         |
| title   | 标题文本插槽内容 |
| header  | 数组插槽内容     |
