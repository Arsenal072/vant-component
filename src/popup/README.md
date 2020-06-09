# Popup

### Install

```javascript
import Vue from 'vue';
import { Popup } from 'vant-green';

Vue.use(Popup);
```

## Usage

### Basic Usage

```html
<van-cell is-link @click="showPopup">Show Popup</van-cell>

<van-popup v-model="show">Content</van-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### Position

Use `position` prop to set popup display position

```html
<van-popup v-model="show" position="top" :style="{ height: '20%' }" />
```

### Close Icon

```html
<van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '20%' }"
/>

<!-- Custom Icon -->
<van-popup
  v-model="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '20%' }"
/>

<!-- Icon Position -->
<van-popup
  v-model="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '20%' }"
/>
```

### Round Corner

```html
<van-popup v-model="show" round position="bottom" :style="{ height: '20%' }" />
```

### Get Container

Use `get-container` prop to specify mount location

```html
<!-- mount to body -->
<van-popup v-model="show" get-container="body" />

<!-- mount to #app -->
<van-popup v-model="show" get-container="#app" />

<!-- Specify the mount location by function -->
<van-popup v-model="show" :get-container="getContainer" />
```

```js
export default {
  methods: {
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
};
```

## API

### Props

| Attribute              | Description                                                                                | Type                      | Default     | Version |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------------- | ----------- | ------- |
| v-model                | Whether to show popup                                                                      | _boolean_                 | `false`     | -       |
| overlay                | Whether to show overlay                                                                    | _boolean_                 | `true`      | -       |
| position               | Can be set to `top` `bottom` `right` `left`                                                | _string_                  | `center`    | -       |
| overlay-class          | Custom overlay class                                                                       | _string_                  | -           | -       |
| overlay-style          | Custom overlay style                                                                       | _object_                  | -           | -       |
| duration               | Transition duration, unit second                                                           | _number_                  | `0.3`       | -       |
| round                  | Whether to show round corner                                                               | _boolean_                 | `false`     | 2.0.7   |
| lock-scroll            | Whether to lock background scroll                                                          | _boolean_                 | `true`      | -       |
| lazy-render            | Whether to lazy render util appeared                                                       | _boolean_                 | `true`      | -       |
| close-on-popstate      | Whether to close when popstate                                                             | _boolean_                 | `false`     | 2.2.10  |
| close-on-click-overlay | Whether to close when click overlay                                                        | _boolean_                 | `true`      | -       |
| closeable              | Whether to show close icon                                                                 | _boolean_                 | `false`     | 2.2.0   |
| close-icon             | Close icon name                                                                            | _string_                  | `cross`     | 2.2.0   |
| close-icon-position    | Close Icon Position，can be set to `top-left` `bottom-left` `bottom-right`                 | _string_                  | `top-right` | 2.2.2   |
| transition             | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | _string_                  | -           | -       |
| get-container          | Return the mount node for Popup                                                            | _string \| () => Element_ | -           | -       |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation                                              | _boolean_                 | `true`      | 2.2.1   |

### Events

| Event         | Description                  | Arguments    |
| ------------- | ---------------------------- | ------------ |
| click         | Triggered when click Popup   | event: Event |
| open          | Triggered when open Popup    | -            |
| opened        | Triggered when opened Popup  | -            |
| close         | Triggered when close Popup   | -            |
| closed        | Triggered when closed Popup  | -            |
| click-overlay | Triggered when click overlay | -            |
