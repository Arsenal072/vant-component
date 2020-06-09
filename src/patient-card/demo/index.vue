<template>
  <demo-section style="padding-bottom:80px">
    <van-notice-bar class="margin-bottom18">
      <div class="text-align-center van-color-text-assist">
        <span>您还可以办2张卡</span>
      </div>
    </van-notice-bar>
    <!-- <demo-block title="基础用法"> -->
      <van-patient-card
        v-for="(item, index) in mainList"
        :key="index"
        :type="item.type"
        :org="item.org"
        :card-name="item.cardName"
        :patient-name="item.patientName"
        :default="item.default"
        :i-d-number="item.IDNumber"
        :info-list="item.infoList"
        :code-url="item.codeUrl"
        :unbound="item.unbound"
        :incomplete="item.incomplete"
        :mask="item.mask"
        :upgrade="item.upgrade"
        @clickCard="clickCard"
        @clickBind="clickBind"
        @clickMask="clickMask"
      />
    <!-- </demo-block> -->
    <van-submit-bar>
      <div
        slot="top"
        class="padding-top14 padding-bottom9 van-color-text-assist font-size1 van-hairline--bottom flex-align-justify"
      >
        已有健康卡，
        <span class="van-color-primary">一键快速关联</span>
        <van-icon name="right" color="#32ae57" :size="11" class="margin-left2" /></van-icon>
      </div>
      <van-button
        type="primary"
        block
      >
        添加健康卡
      </van-button>
    </van-submit-bar>
  </demo-section>
</template>
<script>
import qrcode from '../../../assets/images/other/patient-code@2x.png';

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
  },
  methods: {
    clickCard() {
      this.$toast('clickCard');
    },
    clickBind() {
      this.$toast('clickBind');
    },
    clickMask() {
      this.$toast('clickMask');
    }
  }
};
</script>
