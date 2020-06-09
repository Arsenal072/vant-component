# Uploader 文件上传

### 引入

```javascript
import Vue from 'vue';
import { Uploader } from 'vant-green';

Vue.use(Uploader);
```

## 代码演示

### 基础用法

文件上传完毕后会触发`after-read`回调函数，获取到对应的`file`对象

```html
<van-uploader v-model="fileList" :after-read="afterRead" />
```

```javascript
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead(files, detail) {
      console.log(files, detail);
      files.forEach(element => {
        // 模拟请求上传图片接口操作
        setTimeout(() => {
          element.status = null; // 上传成功后须将file对象的status属性置为null，否则遮罩不会消失。
        }, 2000);
      });
    }
  }
};
```

### 文件预览

通过`v-model`可以绑定已经上传的图片列表，并展示图片列表的预览图

```html
<van-uploader v-model="fileList" multiple :after-read="afterRead" />
```

```javascript
export default {
  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    };
  }
};
```

### 限制上传数量

通过`max-count`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域

```html
<van-uploader
  v-model="fileList"
  multiple
  :max-count="9"
  title="标题内容"
  description="(标题说明)"
  tip="文字提示文字提示文字提示文字提示"
  :after-read="afterRead"
/>
```

```javascript
export default {
  data() {
    return {
      fileList: []
    };
  }
};
```

### 上传前校验

通过传入`beforeRead`函数可以在上传前进行校验，返回`true`表示校验通过，返回`false`表示校验失败。支持返回`Promise`进行异步校验

```html
<van-uploader :before-read="beforeRead" />
```

```js
export default {
  methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }

      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    }
  }
};
```

### 上传进度

用法一：虚拟上传进度，通过`progress`属性可以设置是否展示虚拟的上传进度，通过`progress-interval`属性可以设置进度更新时间间隔

```html
<!-- 用法一：虚拟上传进度 -->
<van-uploader
  v-model="fileList"
  progress
  :progress-interval="500"
  :after-read="afterRead"
/>
```

```javascript
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead(files, detail) {
      files.forEach(element => {
        setTimeout(() => {
          element.status = null;
        }, 2000);
      });
    }
  }
};
```

用法二：自定义上传进度，在`after-read`回调函数中，通过给`file`对象的`rate`属性赋值，来自主设置进度值

```html
<!-- 用法二：自定义上传进度 -->
<van-uploader v-model="fileList" :after-read="afterRead" />
```

```javascript
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead(files, detail) {
      files.forEach(element => {
        element.rate = 10; // 通过给file对象的rate属性赋值，来自主设置进度值
        setTimeout(() => {
          element.status = null;
        }, 2000);
      });
    }
  }
};
```

### 上传失败&重新上传

通过`after-read`回调函数可以设置对应的`file`对象的上传状态，失败将`file`的`status`属性置为 fail，成功置为`null`

```html
<van-uploader
  v-model="fileList"
  multiple
  progress
  :max-count="9"
  title="标题内容"
  description="(标题说明)"
  :after-read="afterRead1"
/>
```

```javascript
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead1(files, detail) {
      console.log(files, detail);
      files.forEach(element => {
        setTimeout(() => {
          element.status = detail === 'reupload' ? null : 'fail'; // 重新上传detail为reupload，这里模拟第一次上传失败，重新上传成功。实际应用场景要根据接口返回值设置status的值
        }, 4000);
      });
    }
  }
};
```

### 异步上传

通过`async`属性可以设置异步上传

```html
<van-uploader v-model="fileList" async />
```

### 自定义上传样式

通过插槽可以自定义上传区域的样式

```html
<van-uploader>
  <van-button icon="photo" type="primary">上传图片</van-button>
</van-uploader>
```

## API

### Props

| 参数               | 说明                                                                                                                                                   | 类型               | 默认值    | 版本     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | --------- | -------- |
| name               | 标识符，可以在回调函数的第二项参数中获取                                                                                                               | _string \| number_ | -         | 2.0.3    |
| accept             | 接受的文件类型                                                                                                                                         | _string_           | `image/*` | -        |
| preview-size       | 预览图和上传区域的尺寸，默认单位为`px`                                                                                                                 | _string \| number_ | `80px`    | -        |
| preview-image      | 是否在上传完成后展示预览图                                                                                                                             | _boolean_          | `true`    | -        |
| preview-full-image | 是否在点击预览图后展示全屏图片预览                                                                                                                     | _boolean_          | `true`    | 2.1.5    |
| multiple           | 是否开启图片多选，部分安卓机型不支持                                                                                                                   | _boolean_          | `false`   | -        |
| disabled           | 是否禁用文件上传                                                                                                                                       | _boolean_          | `false`   | -        |
| deletable          | 是否展示删除按钮                                                                                                                                       | _boolean_          | `true`    | 2.2.12   |
| capture            | 图片选取模式，可选值为`camera`(直接调起摄像头)                                                                                                         | _string_           | -         | -        |
| async              | 是否异步上传（异步上传指选择图片和上传图片分开操作，如发朋友圈，这种情况不展示上传中遮罩层。默认同步上传，即选择后立即请求接口上传，展示上传中遮罩层） | _boolean_          | `false`   | vant-green@1.0.0 |
| progress           | 是否展示虚拟的上传进度（async 为默认值时生效）                                                                                                         | _boolean_          | `false`   | vant-green@1.0.0 |
| progress-interval  | 虚拟上传进度的更新时间间隔（progress 为真时生效，单位 ms)                                                                                              | _number_           | `1000`    | vant-green@1.0.0 |
| after-read         | 文件读取完成后的回调函数（async 为默认值时必填）                                                                                                       | _Function_(Array)  | -         | -        |
| before-read        | 文件读取前的回调函数，返回`false`可终止文件读取，支持返回`Promise`                                                                                     | _Function_(Array)  | -         | -        |
| before-delete      | 文件删除前的回调函数，返回`false`可终止文件读取，支持返回`Promise`                                                                                     | _Function_         | -         | -        |
| max-size           | 文件大小限制，单位为`byte`                                                                                                                             | _number_           | -         | -        |
| max-count          | 文件上传数量限制                                                                                                                                       | _number_           | -         | -        |
| title              | 标题文本                                                                                                                                               | _string_           | -         | vant-green@1.0.0 |
| description        | 标题说明文本                                                                                                                                           | _string_           | -         | vant-green@1.0.0 |
| tip                | 底部提示文本                                                                                                                                           | _string_           | -         | vant-green@1.0.0 |
| result-type        | 文件读取结果类型，可选值为`file` `text`                                                                                                                | _string_           | `dataUrl` | 2.2.7    |
| upload-text        | 上传区域文字提示                                                                                                                                       | _string_           | -         | -        |
| image-fit          | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件                                                                                                   | _string_           | `cover`   | 2.1.5    |

### Events

| 事件名        | 说明                   | 回调参数       |
| ------------- | ---------------------- | -------------- |
| oversize      | 文件大小超过限制时触发 | 同`after-read` |
| click-preview | 点击预览图时触发       | 同`after-read` |
| close-preview | 关闭全屏图片预览时触发 | -              |
| delete        | 删除文件预览时触发     | 同`after-read` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义上传区域 |

### 回调参数

before-read、after-read、before-delete 执行时会传递以下回调参数：

| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | 文件解析后的 file 对象            | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |

### ResultType  可选值

`result-type`字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值      | 描述                                           |
| ------- | ---------------------------------------------- |
| file    | 结果仅包含 File 对象                           |
| text    | 结果包含 File 对象，以及文件的文本内容         |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

### 方法

通过 ref 可以获取到 Uploader 实例并调用实例方法

| 方法名            | 说明               | 参数 | 返回值 |
| ----------------- | ------------------ | ---- | ------ |
| closeImagePreview | 关闭全屏的图片预览 | -    | -      |
