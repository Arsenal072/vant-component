# Checkbox

### Install

```javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant-green';

Vue.use(Checkbox).use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<van-checkbox v-model="checked">Checkbox</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

### Disabled

```html
<van-checkbox v-model="checked" disabled>Checkbox</van-checkbox>
```

### Custom Shape

```html
<van-checkbox v-model="checked" shape="square">Checkbox</van-checkbox>
```

### Custom Color

```html
<van-checkbox v-model="checked" checked-color="#07c160">Checkbox</van-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<van-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? activeIcon : inactiveIcon"
  />
</van-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
    };
  }
};
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<van-checkbox-group v-model="result">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
  <van-checkbox name="c">Checkbox c</van-checkbox>
</van-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      result: ['a', 'b']
    };
  }
};
```

### Maximum amount of checked options

```html
<van-checkbox-group v-model="result" :max="2">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
  <van-checkbox name="c">Checkbox c</van-checkbox>
</van-checkbox-group>
```

### Toggle All

```html
<van-checkbox-group v-model="result" ref="checkboxGroup">
  <van-checkbox name="a">Checkbox a</van-checkbox>
  <van-checkbox name="b">Checkbox b</van-checkbox>
  <van-checkbox name="c">Checkbox c</van-checkbox>
</van-checkbox-group>

<van-button type="primary" size="middle" @click="checkAll"
  >Check All</van-button
>
<van-button type="info" size="middle" @click="toggleAll">Toggle All</van-button>
```

```js
export default {
  data() {
    return {
      result: []
    };
  },

  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  }
};
```

### Inside a Cell

```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <van-checkbox :name="item" ref="checkboxes" slot="right-icon" />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
```

## API

### Checkbox Props

| Attribute      | Description                        | Type               | Default   | Version |
| -------------- | ---------------------------------- | ------------------ | --------- | ------- |
| name           | Checkbox name                      | _any_              | -         | -       |
| shape          | Can be set to `square`             | _string_           | `round`   | -       |
| v-model        | Check status                       | _boolean_          | `false`   | -       |
| disabled       | Disable checkbox                   | _boolean_          | `false`   | -       |
| label-disabled | Whether to disable label click     | _boolean_          | `false`   | -       |
| label-position | Can be set to `left`               | _string_           | `right`   | -       |
| icon-size      | Icon size                          | _string \| number_ | `20px`    | -       |
| checked-color  | Checked color                      | _string_           | `#1989fa` | -       | - |
| bind-group     | Whether to bind with CheckboxGroup | _boolean_          | `true`    | 2.2.4   |

### CheckboxGroup Props

| Attribute     | Description                       | Type               | Default        | Version |
| ------------- | --------------------------------- | ------------------ | -------------- | ------- |
| v-model       | Names of all checked checkboxes   | _any[]_            | -              | -       |
| max           | Maximum amount of checked options | _number_           | `0`(Unlimited) | -       |
| disabled      | Disable all checkboxes            | _boolean_          | `false`        | -       |
| icon-size     | Icon size of all checkboxes       | _string \| number_ | `20px`         | 2.2.3   |
| checked-color | Checked color of all checkboxes   | _string_           | `#1989fa`      | -       | 2.2.3 |

### Checkbox Events

| Event  | Description                   | Parameters    |
| ------ | ----------------------------- | ------------- |
| change | Triggered when value changed  | current value |
| click  | Triggered when click checkbox | event: Event  |

### CheckboxGroup Events

| Event  | Description                  | Parameters    |
| ------ | ---------------------------- | ------------- |
| change | Triggered when value changed | current value |

### Checkbox Slots

| Name    | Description  | SlotProps                      |
| ------- | ------------ | ------------------------------ |
| default | Custom label | -                              |
| icon    | Custom icon  | checked: whether to be checked |

### CheckboxGroup Methods

Use ref to get CheckboxGroup instance and call instance methods

| Name      | Description                           | Attribute         | Return value |
| --------- | ------------------------------------- | ----------------- | ------------ |
| toggleAll | Toggle check status of all checkboxes | checked?: boolean | -            |

### Checkbox Methods

Use ref to get Checkbox instance and call instance methods

| Name   | Description         | Attribute         | Return value |
| ------ | ------------------- | ----------------- | ------------ |
| toggle | Toggle check status | checked?: boolean | -            |
