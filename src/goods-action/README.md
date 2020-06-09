# GoodsAction

### Install

```javascript
import Vue from 'vue';
import { GoodsAction, GoodsActionButton, GoodsActionIcon } from 'vant-green';

Vue.use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="Icon2" @click="onClickIcon" />
  <van-goods-action-button
    type="warning"
    text="Button1"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="Button2"
    @click="onClickButton"
  />
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickIcon() {
      Toast('Click Icon');
    },
    onClickButton() {
      Toast('Click Button');
    }
  }
};
```

### Icon info

Use `info` prop to show badge in icon

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" />
  <van-goods-action-icon icon="cart-o" text="Icon2" info="5" />
  <van-goods-action-icon icon="shop-o" text="Icon3" info="12" />
  <van-goods-action-button type="warning" text="Button1" />
  <van-goods-action-button type="danger" text="Button2" />
</van-goods-action>
```

### Custom Button Color

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" />
  <van-goods-action-icon icon="shop-o" text="Icon2" />
  <van-goods-action-button color="#be99ff" type="warning" text="Button1" />
  <van-goods-action-button color="#7232dd" type="danger" text="Button2" />
</van-goods-action>
```

## API

### GoodsAction Props

| Attribute              | Description                                   | Type      | Default | Version |
| ---------------------- | --------------------------------------------- | --------- | ------- | ------- |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true`  | -       |

### GoodsActionIcon Props

| Attribute  | Description                                             | Type               | Default | Version |
| ---------- | ------------------------------------------------------- | ------------------ | ------- | ------- |
| text       | Button text                                             | _string_           | -       | -       |
| icon       | Icon                                                    | _string_           | -       | -       |
| icon-class | Icon class name                                         | _any_              | `''`    | -       |
| info       | Content of the badge                                    | _string \| number_ | -       | -       |
| url        | Link                                                    | _string_           | -       | -       |
| to         | Target route of the link, same as to of vue-router      | _string \| object_ | -       | -       |
| replace    | If true, the navigation will not leave a history record | _boolean_          | `false` | -       |

### GoodsActionButton Props

| Attribute | Description                                                    | Type               | Default   | Version |
| --------- | -------------------------------------------------------------- | ------------------ | --------- | ------- |
| text      | Button text                                                    | _string_           | -         | -       |
| type      | Button type, Can be set to `primary` `info` `warning` `danger` | _string_           | `default` | -       |
| color     | Button color, support linear-gradient                          | _string_           | -         | 2.1.8   |
| primary   | Is primary button (red color)                                  | _boolean_          | `false`   | -       |
| disabled  | Whether to disable button                                      | _boolean_          | `false`   | -       |
| loading   | Whether show loading status                                    | _boolean_          | `false`   | -       |
| url       | Link                                                           | _string_           | -         | -       |
| to        | Target route of the link, same as to of vue-router             | _string \| object_ | -         | -       |
| replace   | If true, the navigation will not leave a history record        | _boolean_          | `false`   | -       |

### GoodsActionIcon Slots

| Name    | Description |
| ------- | ----------- |
| default | Text        |
| icon    | Custom icon |

### GoodsActionButton Slots

| Name    | Description    |
| ------- | -------------- |
| default | Button content |
