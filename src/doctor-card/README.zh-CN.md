# Doctor-card 医生信息卡片

### 介绍

Doctor-card 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { DoctorCard } from 'vant-green';

Vue.use(DoctorCard);
```

## 代码演示

### 基础用法 1

```html
<van-doctor-card
  v-for="(item, index) in list1"
  :key="index"
  :avatar-offset-top="4"
  :avatar-figure="7"
  :avatar-size="68"
  :name="item.name"
  :title="item.title"
  :hospital="item.hospital"
  :department="item.department"
  :skill="item.skill"
  :score="item.score"
  :receive-num="item.receiveNum"
  show-online
  :online="item.online"
>
  <div slot="corner" class="flex-align">
    <van-icon name="photo" color="#98B3DB" size="11" />
    <van-icon style="margin-left:10px" name="phone" color="#98B3DB" size="11" />
    <van-icon style="margin-left:10px" name="video" color="#98B3DB" size="14" />
  </div>
</van-doctor-card>
```

```js
export default {
  data() {
    return {
      list1: [
        {
          name: '吴化平',
          title: '副主任医师',
          hospital: '浙江大学附属第一医院',
          department: '脑肿瘤科',
          skill: '冠心病外科治疗、心脏不停跳下',
          receiveNum: 40,
          score: 4,
          online: true
        },
        {
          name: '秦英',
          title: '主任医师',
          hospital: '浙江省中医院',
          department: '呼吸内科',
          skill: '急性上呼吸道感染、肺炎、哮喘，急性上呼吸道感染、肺炎、哮喘',
          receiveNum: 86,
          score: 4.8,
          online: false
        }
      ]
    };
  }
};
```

### 基础用法 2

```html
<van-doctor-card
  v-for="(item, index) in list2"
  :key="index"
  :avatar-offset-top="4"
  :avatar-figure="7"
  :avatar-size="68"
  :avatar-radius="4"
  :name="item.name"
  :title="item.title"
  :hospital-level="item.hospitalLevel"
  :hospital="item.hospital"
  :department="item.department"
  :skill-tag="item.skillTag"
  :praise-num="item.praiseNum"
  :response-time="item.responseTime"
  :consult-num="item.consultNum"
  button-text="立即咨询"
  @clickCard="clickCard"
  @clickButton="clickButton"
>
  <span slot="corner" class="bold van-color-warning">
    5.00
    <i class="font-size-3" style="margin-left: -5px">元</i>
  </span>
</van-doctor-card>
```

```js
export default {
  data() {
    return {
      list2: [
        {
          name: '吴化平',
          title: '副主任医师',
          hospitalLevel: '三甲',
          hospital: '浙江大学附属第一医院',
          department: '脑肿瘤科',
          skillTag: ['冠心病', '心脏骤停伴随脑损伤', '心脏不停跳下'],
          praiseNum: 86,
          responseTime: '2分56秒',
          consultNum: 132
        },
        {
          name: '秦英',
          title: '主任医师',
          hospitalLevel: '三甲',
          hospital: '浙江省中医院',
          department: '呼吸内科',
          skillTag: [
            '冠心病',
            '心脏骤停伴随脑损伤',
            '心脏不停跳下',
            '冠心病',
            '心脏骤停伴随脑损伤',
            '心脏不停跳下'
          ],
          praiseNum: 27,
          responseTime: '10分03秒',
          consultNum: 318
        }
      ]
    };
  }
};
```

### 基础用法 3

```html
<van-doctor-card
  v-for="(item, index) in list3"
  :key="index"
  :avatar-figure="7"
  :avatar-radius="3"
  :name="item.name"
  :title="item.title"
  :skill="item.skill"
>
  <van-tag
    slot="corner"
    :type="item.status === '可约' ? 'success' : ''"
    round
    :color="item.status === '约满' ? '#999999' : ''"
  >
    {{ item.status }}
  </van-tag>
</van-doctor-card>
```

```js
export default {
  data() {
    return {
      list3: [
        {
          name: '吴化平',
          title: '副主任医师',
          skill: '冠心病外科治疗、心脏不停跳下',
          status: '可约'
        },
        {
          name: '秦英',
          title: '主任医师',
          skill: '急性上呼吸道感染、肺炎、哮喘，急性上呼吸道感染、肺炎、哮喘',
          status: '约满'
        }
      ]
    };
  }
};
```

## API

### Props

| 参数              | 说明                             | 类型                 | 默认值  | 版本     |
| ----------------- | -------------------------------- | -------------------- | ------- | -------- |
| avatar-offset-top | 头像顶部偏移距离，默认单位为`px` | _number_ \| _string_ | -       | vant-green@1.0.0 |
| avatar-figure     | 头像图片                         | _number_ \| _string_ | `1`     | vant-green@1.0.0 |
| avatar-size       | 头像尺寸，默认单位为`px`         | _number_ \| _string_ | `50`    | vant-green@1.0.0 |
| avatar-radius     | 头像圆角，默认单位为`px`         | _number_ \| _string_ | `4`     | vant-green@1.0.0 |
| show-online       | 是否展示医生是否在线             | _boolean_            | `false` | vant-green@1.0.0 |
| online            | 是否在线                         | _boolean_            | `false` | vant-green@1.0.0 |
| name              | 医生名字                         | _string_             | -       | vant-green@1.0.0 |
| title             | 医生职称                         | _string_             | -       | vant-green@1.0.0 |
| hospital-level    | 医院等级                         | _string_             | -       | vant-green@1.0.0 |
| hospital          | 医院名称                         | _string_             | -       | vant-green@1.0.0 |
| department        | 科室名称                         | _string_             | -       | vant-green@1.0.0 |
| skill             | 医生擅长                         | _string_             | -       | vant-green@1.0.0 |
| skill-tag         | 医生擅长标签                     | _array_              | -       | vant-green@1.0.0 |
| praise-num        | 好评数                           | _number_             | -       | vant-green@1.0.0 |
| response-time     | 响应时间                         | _string_             | -       | vant-green@1.0.0 |
| receive-num       | 接诊量                           | _number_             | -       | vant-green@1.0.0 |
| consult-num       | 咨询人数                         | _number_             | -       | vant-green@1.0.0 |
| score             | 评分                             | _number_             | -       | vant-green@1.0.0 |
| button-text       | 按钮文本                         | _string_             | -       | vant-green@1.0.0 |

### Events

| 事件名      | 说明           | 回调参数 |
| ----------- | -------------- | -------- |
| clickCard   | 点击卡片时触发 | -        |
| clickButton | 点击按钮时触发 | -        |

### Slots

| 名称   | 内容       |
| ------ | ---------- |
| avatar | 头像插槽   |
| corner | 右上角插槽 |
| footer | 底部插槽   |
