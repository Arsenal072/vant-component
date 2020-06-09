# TreeSelect 分类选择

### 引入

```javascript
import Vue from 'vue';
import { TreeSelect } from 'vant-green';

Vue.use(TreeSelect);
```

## 代码演示

### 基础用法

`arrow`为右侧内容是否需要箭头图标 `items`为分类显示所需的数据，数据格式见下方示例。`main-active-index`表示左侧高亮选项的索引，`active-id`表示右侧选择的选项 id。

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
  arrow
/>
```

```javascript
export default {
  data() {
    return {
      items: [
        {
          text: '选项',
          children: [
            {
              text: '内容',
              id: 1
            },
            {
              text: '内容',
              id: 2
            },
            {
              text: '内容',
              id: 3
            }
          ]
        },
        {
          text: '选项',
          children: [
            {
              text: '内容',
              id: 1
            },
            {
              text: '内容',
              id: 2
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  }
};
```

### 补充语及标签

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
  arrow
/>
```

```js
export default {
  data() {
    return {
      items: [
        {
          text: '选项',
          add: '补充语',
          children: [
            {
              text: '内容',
              id: 1,
              tag: { name: '标签', type: 'success' }
            },
            {
              text: '内容',
              id: 2,
              tag: { name: '标签', type: 'default' }
            }
          ]
        },
        {
          text: '选项',
          add: '补充语',
          children: [
            {
              text: '内容',
              id: 1,
              tag: { name: '标签', type: 'success' }
            },
            {
              text: '内容',
              id: 2,
              tag: { name: '标签', type: 'success' }
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  }
};
```

### 下划线反转

```html
<div class="van-bgcolor-white width100" style="height:40px">
  <div class="line-height40">
    <van-icon
      name="location-o"
      class="van-color-primary margin-right8 margin-left18"
    />
    <span class="font-size0 margin-right4">杭州</span>
    <van-icon
      name="arrow"
      class="font-size-4 van-color-text-primary relative"
    />
  </div>
</div>
<van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
  reverse-border
  active-color
/>
```

```javascript
export default {
  data() {
    return {
      items: [
        {
          text: '热门地区',
          children: [
            {
              text: '杭州',
              add: '25家',
              id: 1
            },
            {
              text: '上海',
              add: '25家',
              id: 2,
              disabled: true
            },
            {
              text: '北京',
              add: '25家',
              id: 3
            },
            {
              text: '广州',
              add: '25家',
              id: 4
            },
            {
              text: '深圳',
              add: '25家',
              id: 5
            },
            {
              text: '那然色布斯台音布拉格',
              add: '25家',
              id: 6
            }
          ]
        },
        {
          text: '湖南',
          add: '26家',
          children: [
            {
              text: '内容',
              id: 1
            },
            {
              text: '内容',
              id: 2
            }
          ]
        },
        {
          text: '天津',
          add: '56家',
          children: [
            {
              text: '内容',
              id: 1
            }
          ]
        },

        {
          text: '那然色布斯谷',
          add: '50家',
          children: [
            {
              text: '内容',
              id: 1
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  }
};
```

### 自定义内容

通过`content`插槽可以自定义右侧区域的内容

```html
<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
>
  <template slot="content">
    <van-image
      v-if="activeIndex === 0"
      src="https://img.yzcdn.cn/vant/apple-1.jpg"
    />
    <van-image
      v-if="activeIndex === 1"
      src="https://img.yzcdn.cn/vant/apple-2.jpg"
    />
  </template>
</van-tree-select>
```

```js
export default {
  data() {
    return {
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    };
  }
};
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标

```html
<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
/>
```

```js
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              id: 1
            },
            {
              text: '温州',
              id: 2
            }
          ],
          dot: true
        },
        {
          text: '江苏',
          children: [
            {
              text: '南京',
              id: 3
            },
            {
              text: '无锡',
              id: 4
            }
          ],
          info: 5
        }
      ]
    };
  }
};
```

## API

### Props

| 参数              | 说明                          | 类型                                       | 默认值     | 版本     |
| ----------------- | ----------------------------- | ------------------------------------------ | ---------- | -------- |
| items             | 分类显示所需的数据            | _Item[]_                                   | `[]`       | -        |
| arrow             | 内容右侧是否有箭头            | _boolean_                                  | `false`    | -        |
| height            | 高度，默认单位为`px`          | _string \| number_                         | `600`      | -        |
| main-active-index | 左侧选中项的索引              | _number_                                   | `0`        | -        |
| active-id         | 右侧选中项的 id，支持传入数组 | _string \| number \| (string \| number)[]_ | `0`        | -        |
| max               | 右侧项最大选中个数            | _number_                                   | `Infinity` | 2.2.0    |
| reverse-border    | 左右侧是否有下边框反转        | _boolean_                                  | `false`    | vant-green@1.0.0 |
| active-color      | 右侧选项选中是否变色          | _boolean_                                  | `false`    | vant-green@1.0.0 |

### Events

| 事件名     | 说明                 | 回调参数                  |
| ---------- | -------------------- | ------------------------- |
| click-nav  | 点击左侧导航时触发   | index：被点击的导航的索引 |
| click-item | 点击右侧选择项时触发 | data: 该点击项的数据      |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| content | 自定义右侧区域内容 |

### Item 数据结构

`items` 整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，`text`表示当前分类的名称，`text`中的`add`表示当前分类有无补充语，`children`表示分类里的可选项，`children`中的`tag`表示可选项后有无标签，`add`表示可选项有无补充语。`disabled`表示是否可选。

```javascript
[
  {
    text: '热门地区',
    add: '补充语',
    dot: false,
    className: 'my-class',
    children: [
      {
        text: '杭州',
        add: '25家',
        id: 1,
        tag: { name: '标签', type: 'success' }
      },
      {
        text: '上海',
        add: '25家',
        id: 2,
        disabled: true,
        tag: { name: '标签', type: 'success' }
      },
      {
        text: '北京',
        add: '25家',
        id: 3,
        tag: { name: '标签', type: 'success' }
      }
    ]
  },
  {
    text: '湖南',
    add: '26家',
    dot: false,
    className: 'my-class',
    children: [
      {
        text: '内容',
        id: 1,
        disabled: false,
        tag: { name: '标签', type: 'success' }
      },
      {
        text: '内容',
        id: 2,
        tag: { name: '标签', type: 'success' }
      }
    ]
  }
];
```
