# FileIcon 文件图标

### 介绍

FileIcon 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { FileIcon } from 'vant-green';

Vue.use(FileIcon);
```

## 代码演示

### 用法

```html
<van-file-icon name="doc" size="60" />
```

## API

### Props

| 参数 | 说明                            | 类型               | 默认值 | 版本     |
| ---- | ------------------------------- | ------------------ | ------ | -------- |
| name | 图标种类，可选值见[name](#name) | _string_           | -      | vant-green@1.0.0 |
| size | 图标大小（以宽度为准）          | _number \| string_ | -      | vant-green@1.0.0 |

### name 图标名称

| 参数 | 说明 |
| ---- | ---- |
| doc  | doc  |
| esp  | esp  |
| jpg  | jpg  |
| mp4  | mp4  |
| pdf  | pdf  |
| png  | png  |
| ppt  | ppt  |
| psd  | psd  |
| qa   | qa   |
| rep  | rep  |
| xls  | xls  |
| zip  | zip  |
