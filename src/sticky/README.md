# Sticky

### Install

```javascript
import Vue from 'vue';
import { Sticky } from 'vant-green';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<van-sticky>
  <van-button type="primary" size="middle">Basic Usage</van-button>
</van-sticky>
```

### Offset Top

```html
<van-sticky :offset-top="50">
  <van-button type="info" size="middle">Offset Top</van-button>
</van-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <van-sticky :container="container">
    <van-button type="warning" size="middle">Set Container</van-button>
  </van-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute  | Description         | Type          | Default | Version |
| ---------- | ------------------- | ------------- | ------- | ------- |
| offset-top | Offset top          | _number_      | `0`     | -       |
| z-index    | z-index when sticky | _number_      | `99`    | -       |
| container  | Container DOM       | _HTMLElement_ | -       | -       |

### Events

| Event  | Description           | Arguments                      |
| ------ | --------------------- | ------------------------------ |
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
