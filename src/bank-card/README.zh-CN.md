# BankCard 银行卡

### 介绍

BankCard 为 vant-green@1.0.0 新增组件。

### 引入

```javascript
import Vue from 'vue';
import { BankCard } from 'vant-green';

Vue.use(BankCard);
```

## 代码演示

### 基础用法

```html
<van-bank-card name="NBBANK" type="DC" number="15879523658745" />
```

### Props

| 参数        | 说明                             | 类型     | 默认值 | 版本     |
| ----------- | -------------------------------- | -------- | ------ | -------- |
| name        | 银行名称 可选值见[name](#name)   | _string_ | -      | vant-green@1.0.0 |
| type        | 银行卡类型 可选值见[type](#type) | _string_ | `DC`   | vant-green@1.0.0 |
| number      | 银行卡号                         | _string_ | -      | vant-green@1.0.0 |
| show-length | 展示卡号的位数(从卡号末尾开始)   | _number_ | `4`    | vant-green@1.0.0 |

### name

| 序号 | 可选值  | 对应银行名称     |
| :--- | :------ | :--------------- |
| 1    | ABC     | 中国农业银行     |
| 2    | BJBANK  | 北京银行         |
| 3    | BOC     | 中国银行         |
| 4    | CCB     | 中国建设银行     |
| 5    | CEB     | 中国光大银行     |
| 6    | CIB     | 兴业银行         |
| 7    | CITIC   | 中信银行         |
| 8    | CMB     | 招商银行         |
| 9    | CMBC    | 中国民生银行     |
| 10   | COMM    | 交通银行         |
| 11   | GDB     | 广东发展银行     |
| 12   | HXBANK  | 华夏银行         |
| 13   | ICBC    | 中国工商银行     |
| 14   | NBBANK  | 宁波银行         |
| 15   | PSBC    | 中国邮政储蓄银行 |
| 16   | SHBANK  | 上海银行         |
| 17   | SPABANK | 平安银行         |
| 18   | SPDB    | 上海浦东发展银行 |

### type

| 序号 | 可选值 | 对应银行名称 |
| :--- | :----- | :----------- |
| 1    | DC     | 储蓄卡       |
| 2    | CC     | 信用卡       |
