# PatientCard 就诊卡

### 介绍

PatientCard 为 vant-green@1.0.4 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { PatientCard } from 'vant-green';

Vue.use(PatientCard);
```

## 代码演示

### 基础用法

```html
<van-patient-card
    v-for="(item, index) in mainList"
    :key="index"
    :type="item.type"
    :org="item.org"
    :cardName="item.cardName"
    :patientName="item.patientName"
    :default="item.default"
    :IDNumber="item.IDNumber"
    :infoList="item.infoList"
    :unbound="item.unbound"
    :incomplete="item.incomplete"
    :mask="item.mask"
    />
```
```js
export default {
  data() {
    return {
      mainList: [
        {
          type: 'healthCard',
          org: '浙江大学附属第一医院',
          patientName: '肖梓强',
          default: true,
          IDNumber: '2368***********3538',
          unbound: false,
          codeUrl: qrcode
        },
        {
          type: 'healthCard',
          org: '浙江大学附属第一医院',
          patientName: '肖梓强',
          IDNumber: '2368***********3538',
          mask: true,
          codeUrl: qrcode
        },
        {
          type: 'healthCard',
          org: '浙江大学附属第一医院浙江大学附属第一医院',
          patientName: '肖梓强',
          IDNumber: '2368***********3538',
          unbound: true,
          codeUrl: qrcode
        },
        {
          type: 'healthCard',
          org: '浙江大学附属第一医院',
          patientName: '肖梓强',
          IDNumber: '2368***********3538',
          incomplete: true,
          codeUrl: qrcode
        },
        {
          cardName: '虚拟就诊卡',
          org: '智慧医疗',
          patientName: '肖梓强',
          default: true,
          codeUrl: '',
          infoList: [
            {
              key: '医保号',
              value: '121212121212122121212122'
            },
            {
              key: '身份证',
              value: '2368***********3538'
            }
          ]
        },
        {
          cardName: '虚拟就诊卡',
          org: '智慧医疗',
          patientName: '肖梓强',
          IDNumber: '2368***********3538',
          codeUrl: qrcode,
          upgrade: true
        }
      ]
    };
  }
};
```

### Props

| 参数        | 说明                             | 类型     | 默认值 | 版本     |
| ----------- | -------------------------------- | -------- | ------ | -------- |
| type        | 卡类型 可选值为 `healthCard` | _string_ | -   | vant-green@1.0.4 |
| org        | 机构名称   | _string_ | -      | vant-green@1.0.4 |
| cardName      | 右上角卡片名称（type不为healthCard时生效）                         | _string_ | -      | vant-green@1.0.4 |
| patientName | 就诊人姓名   | _string_ | -    | vant-green@1.0.4 |
| default | 是否为默认   | _boolean_ | `false`    | vant-green@1.0.4 |
| codeUrl | 二维码资源路径   | _string_ | -    | vant-green@1.0.4 |
| IDNumber | 身份证号码，优先级高于infoList   | _string_ | -    | vant-green@1.0.4 |
| infoList | 信息列表   | _array_ | -    | vant-green@1.0.4 |
| unbound | 是否未绑定院内卡（type为healthCard时生效）   | _boolean_ | `false`    | vant-green@1.0.4 |
| incomplete | 是否不完善（type为healthCard时生效）   | _boolean_ | `false`    | vant-green@1.0.4 |
| upgrade | 是否可升级为健康卡（type不为healthCard时生效）   | _boolean_ | `false`    | vant-green@1.0.4 |
| mask | 是否展示遮罩   | _boolean_ | `false`    | vant-green@1.0.25 |


### Events

| 事件    | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| clickCard | 点击卡片时触发       | -        |
| clickBind  | 点击未绑定院内卡时触发       | -        |
| clickMask  | 点击遮罩时触发       | -        |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义就诊人信息 |