# ImagePreview

### Install

```js
import Vue from 'vue';
import { ImagePreview } from 'vant-green';

Vue.use(ImagePreview);
```

## Usage

### Basic Usage

```javascript
ImagePreview([
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg'
]);
```

### Custom config

```javascript
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
```

### Async Close

```javascript
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg'
  ],
  asyncClose: true
});

setTimeout(() => {
  instance.close();
}, 1000);
```

### Component Call

```html
<van-image-preview v-model="show" :images="images" @change="onChange">
  <template slot="index">Page: {{ index }}</template>
</van-image-preview>
```

```js
export default {
  data() {
    return {
      show: false,
      index: 0,
      images: ['https://img.yzcdn.cn/1.jpg', 'https://img.yzcdn.cn/2.jpg']
    };
  },

  methods: {
    onChange(index) {
      this.index = index;
    }
  }
};
```

## API

### Options

| Attribute       | Description                                                                               | Type       | Default | Version |
| --------------- | ----------------------------------------------------------------------------------------- | ---------- | ------- | ------- |
| images          | Images URL list                                                                           | _string[]_ | `[]`    | -       |
| startPosition   | Start position                                                                            | _number_   | `0`     | -       |
| showIndex       | Whether to show index                                                                     | _boolean_  | `true`  | -       |
| showIndicators  | Whether to show indicators                                                                | _boolean_  | `false` | -       |
| loop            | Whether to enable loop                                                                    | _boolean_  | `true`  | -       |
| swipeDuration   | Animation duration (ms)                                                                   | _number_   | `500`   | -       |
| onClose         | Triggered when close                                                                      | _Function_ | -       | -       |
| onChange        | Triggered when current image change                                                       | _Function_ | -       | 2.0.3   |
| closeOnPopstate | Whether to close when popstate                                                            | _boolean_  | `false` | -       |
| asyncClose      | Whether to enable async close                                                             | _boolean_  | `false` | -       |
| className       | Custom className                                                                          | _any_      | -       | -       |
| lazyLoad        | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_  | `false` | -       |
| maxZoom         | Max zoom                                                                                  | _number_   | `3`     | -       |
| minZoom         | Min zoom                                                                                  | _number_   | `1/3`   | -       |

### Props

| Attribute         | Description                                                                               | Type       | Default | Version |
| ----------------- | ----------------------------------------------------------------------------------------- | ---------- | ------- | ------- |
| images            | Images URL list                                                                           | _string[]_ | `[]`    | -       |
| start-position    | Start position                                                                            | _number_   | `0`     | -       |
| show-index        | Whether to show index                                                                     | _boolean_  | `true`  | -       |
| show-indicators   | Whether to show indicators                                                                | _boolean_  | `false` | -       |
| loop              | Whether to enable loop                                                                    | _boolean_  | `true`  | -       |
| swipe-duration    | Animation duration (ms)                                                                   | _number_   | `500`   | -       |
| async-close       | Whether to enable async close                                                             | _boolean_  | `false` | -       |
| close-on-popstate | Whether to close when popstate                                                            | _boolean_  | `false` | -       |
| class-name        | Custom className                                                                          | _any_      | -       | -       |
| lazy-load         | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_  | `false` | -       |
| max-zoom          | Max zoom                                                                                  | _number_   | `3`     | -       |
| min-zoom          | Min zoom                                                                                  | _number_   | `1/3`   | -       |

### Events

| Event  | Description                         | Parameters                    |
| ------ | ----------------------------------- | ----------------------------- |
| close  | Triggered when close                | { index, url }                |
| change | Triggered when current image change | index: index of current image |

### Slots

| Name  | Description                                  |
| ----- | -------------------------------------------- |
| index | Custom index                                 |
| cover | Custom content that covers the image preview |

### onClose Parematers

| Attribute | Description            | Type     |
| --------- | ---------------------- | -------- |
| url       | Url of current image   | _number_ |
| index     | Index of current image | _string_ |
