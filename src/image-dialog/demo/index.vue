<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="margin-left20">
        <van-button type="primary" @click="show = true">打开弹窗</van-button>
        <van-image-dialog
          :show="show"
          img-url="../../../assets/images/other/title-img.png"
          title="申请签约成功！"
          content="医生会尽快联系你线下见面，请关注短信和平台通知！"
          button-text="确定"
          @confirm="confirm"
          @close="close"
        />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {},
    'en-US': {}
  },
  data() {
    return {
      show: false
    };
  },

  methods: {
    confirm() {
      this.show = false;
    },
    close() {
      this.show = false;
    }
  }
};
</script>
