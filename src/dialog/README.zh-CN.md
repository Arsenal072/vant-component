# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作

弹出框组件支持函数调用和组件调用两种方式

### 函数调用

Dialog 是一个函数而不是组件，因此可以直接调用，展示对应的提示弹窗

```js
import { Dialog } from 'vant-green';

Dialog({ message: '提示' });
```

### 组件调用

通过组件调用 Dialog 时，可以通过下面的方式进行注册

```js
import Vue from 'vue';
import { Dialog } from 'vant-green';

// 全局注册
Vue.use(Dialog);

// 局部注册
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  }
};
```

## 代码演示

### 提示弹窗

用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '代码是写来给人看，能在机器上运行',
  confirmButtonText: '主要操作'
}).then(() => {
  // on close
});

// 无标题
Dialog.alert({
  message: '代码是写来给人看，能在机器上运行'
}).then(() => {
  // on close
});
```

### 确认

用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '代码是写来给人看，能在机器上运行',
  confirmButtonText: '主要操作',
  cancelButtonText: '次要操作'
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });

// 无标题
Dialog.confirm({
  message: '代码是写来给人看，能在机器上运行'
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 成功失败弹窗

用于提示成功失败，只包含一个确认按钮

```javascript
Dialog.alert({
  type: 'success',
  title: '成功提示',
  message: '代码是写来给人看，能在机器上运行'
}).then(() => {
  // on close
});

Dialog.alert({
  type: 'danger',
  title: '失败提示',
  message: '代码是写来给人看，能在机器上运行'
}).then(() => {
  // on close
});
```

### 异步关闭

```js
function beforeClose(action, done) {
  if (action === 'confirm') {
    setTimeout(done, 1000);
  } else {
    done();
  }
}

Dialog.confirm({
  title: '标题',
  message: '代码是写来给人看，能在机器上运行',
  beforeClose
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式

```html
<van-dialog v-model="show" title="标题" show-cancel-button>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
};
```

```html
<!-- 步进器-->
<van-dialog v-model="show" title="标题" show-cancel-button :lazy-render="false">
  <van-stepper v-model="stepper" class="text-align-center margin34X" />
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      stepper: 1
    };
  }
};
```

```html
<!-- 输入框 -->
<van-dialog v-model="show" title="标题" show-cancel-button :lazy-render="false">
  <van-field
    type="textarea"
    v-model="message"
    rows="2"
    autosize
    autofocus
    maxlength="50"
    placeholder="请输入留言"
    show-word-limit
    class="message"
  />
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      message: ''
    };
  }
};
```

```css
.message {
  .van-field {
    border: 1px solid #e2e2e2;
    width: 90%;
    margin: 12px auto 28px auto;
    background: #f6f6f6;
  }
}
```

```html
<!-- 提现金额 -->
<van-dialog
  v-model="show"
  title="提现金额"
  show-cancel-button
  :lazy-render="false"
>
  <div class="flex-align withdraw">
    <div class="font-size18">￥</div>
    <van-field type="number" v-model="value" autofocus />
    <van-icon
      name="clear"
      class="van-color-text-placeholder"
      @click="clearMoney"
    />
  </div>
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
      value:''
    }
  }
  methods:{
    clearMoney() {
      this.value = '';
    }
  }
}
```

```css
.withdraw {
  margin: 20px 20px 27px 28px;
  .van-cell {
    font-size: 38px;
    width: 80%;
    padding: 18px 0 16px 9px;
  }
  .van-field__field-wrap:not(:last-child) .van-cell::after {
    border-bottom: 0;
  }
}
```

```html
<!-- 排班 -->
<van-popup v-model="showBottom" position="bottom">
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
</van-popup>
```

```javascript
export default {
  data() {
    return {
      showBottom: false,
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

### 全局方法

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 \$dialog 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
};
```

## API

### 方法

| 方法名                     | 说明                             | 参数      | 返回值    |
| -------------------------- | -------------------------------- | --------- | --------- |
| Dialog                     | 展示弹窗                         | `options` | `Promise` |
| Dialog.alert               | 展示消息提示弹窗                 | `options` | `Promise` |
| Dialog.confirm             | 展示消息确认弹窗                 | `options` | `Promise` |
| Dialog.setDefaultOptions   | 修改默认配置，对所有 Dialog 生效 | `options` | `void`    |
| Dialog.resetDefaultOptions | 重置默认配置，对所有 Dialog 生效 | -         | `void`    |
| Dialog.close               | 关闭弹窗                         | -         | `void`    |

### Options

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数                   | 说明                                                                                         | 类型                      | 默认值    | 版本     |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------- | --------- | -------- |
| title                  | 标题                                                                                         | _string_                  | -         | -        |
| type                   | 类型 可选值为`success` `info` `danger` `warning`                                             | _string_                  | -         | vant-green@1.0.0 |
| icon                   | 标题左侧图标                                                                                 | _string_                  | -         | vant-green@1.0.0 |
| width                  | 弹窗宽度，默认单位为`px`                                                                     | _string \| number_        | `320px`   | 2.2.7    |
| message                | 文本内容，支持通过`\n`换行                                                                   | _string_                  | -         | -        |
| message-align          | 内容对齐方式，可选值为`left` `right`                                                         | _string_                  | `center`  | -        |
| class-name             | 自定义类名                                                                                   | _any_                     | -         | -        |
| show-confirm-button    | 是否展示确认按钮                                                                             | _boolean_                 | `true`    | -        |
| show-cancel-button     | 是否展示取消按钮                                                                             | _boolean_                 | `false`   | -        |
| confirm-button-text    | 确认按钮文案                                                                                 | _string_                  | `确认`    | -        |
| confirm-button-color   | 确认按钮颜色                                                                                 | _string_                  | `#1989fa` | -        |
| cancel-button-text     | 取消按钮文案                                                                                 | _string_                  | `取消`    | -        |
| cancel-button-color    | 取消按钮颜色                                                                                 | _string_                  | `#000`    | -        |
| overlay                | 是否展示遮罩层                                                                               | _boolean_                 | `true`    | -        |
| overlay-class          | 自定义遮罩层类名                                                                             | _string_                  | -         | 2.2.7    |
| overlay-style          | 自定义遮罩层样式                                                                             | _object_                  | -         | 2.2.7    |
| close-on-popstate      | 是否在页面回退时自动关闭                                                                     | _boolean_                 | `false`   | 2.0.5    |
| close-on-click-overlay | 是否在点击遮罩层后关闭弹窗                                                                   | _boolean_                 | `false`   | -        |
| lock-scroll            | 是否锁定背景滚动                                                                             | _boolean_                 | `true`    | -        |
| before-close           | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭              | _(action, done) => void_  | -         | -        |
| transition             | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_                  | -         | 2.2.6    |
| get-container          | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数                                     | _string \| () => Element_ | `body`    | -        |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数                   | 说明                                                                                         | 类型                      | 默认值    | 版本     |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------- | --------- | -------- |
| v-model                | 是否显示弹窗                                                                                 | _boolean_                 | -         | -        |
| title                  | 标题                                                                                         | _string_                  | -         | -        |
| type                   | 类型 可选值为`success` `danger` `warning` `info`                                             | _string_                  | -         | vant-green@1.0.0 |
| icon                   | 标题中的图标                                                                                 | _string_                  | -         | vant-green@1.0.0 |
| width                  | 弹窗宽度，默认单位为`px`                                                                     | _string \| number_        | `320px`   | 2.2.7    |
| message                | 文本内容，支持通过`\n`换行                                                                   | _string_                  | -         | -        |
| message-align          | 内容对齐方式，可选值为`left` `right`                                                         | _string_                  | `center`  | -        |
| show-confirm-button    | 是否展示确认按钮                                                                             | _boolean_                 | `true`    | -        |
| show-cancel-button     | 是否展示取消按钮                                                                             | _boolean_                 | `false`   | -        |
| confirm-button-text    | 确认按钮文案                                                                                 | _string_                  | `确认`    | -        |
| confirm-button-color   | 确认按钮颜色                                                                                 | _string_                  | `#1989fa` | -        |
| cancel-button-text     | 取消按钮文案                                                                                 | _string_                  | `取消`    | -        |
| cancel-button-color    | 取消按钮颜色                                                                                 | _string_                  | `#000`    | -        |
| overlay                | 是否展示遮罩层                                                                               | _boolean_                 | `true`    | -        |
| overlay-class          | 自定义遮罩层类名                                                                             | _string_                  | -         | 2.2.7    |
| overlay-style          | 自定义遮罩层样式                                                                             | _object_                  | -         | 2.2.7    |
| close-on-popstate      | 是否在页面回退时自动关闭                                                                     | _boolean_                 | `false`   | 2.0.5    |
| close-on-click-overlay | 是否在点击遮罩层后关闭弹窗                                                                   | _boolean_                 | `false`   | -        |
| lazy-render            | 是否在显示弹层时才渲染节点                                                                   | _boolean_                 | `true`    | -        |
| lock-scroll            | 是否锁定背景滚动                                                                             | _boolean_                 | `true`    | -        |
| before-close           | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭              | _(action, done) => void_  | -         | -        |
| transition             | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_                  | -         | 2.2.6    |
| get-container          | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数                                     | _string \| () => Element_ | -         | -        |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件    | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| confirm | 点击确认按钮时触发       | -        |
| cancel  | 点击取消按钮时触发       | -        |
| open    | 打开弹窗时触发           | -        |
| opened  | 打开弹窗且动画结束后触发 | -        |
| close   | 关闭弹窗时触发           | -        |
| closed  | 关闭弹窗且动画结束后触发 | -        |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| title   | 自定义标题 |
