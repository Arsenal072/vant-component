<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button type="primary" size="middle" :text="$t('basicUsage')" @click="showNotify" />
    </demo-block>

    <demo-block :title="$t('notifyType')">
      <div style="margin-bottom: 15px;">
        <van-button
          type="primary"
          size="middle"
          :text="$t('success')"
          @click="showType('success')"
        />
        <van-button type="info" size="middle" :text="$t('info')" @click="showType('info')" />
      </div>

      <van-button type="danger" size="middle" :text="$t('danger')" @click="showType('danger')" />
      <van-button type="warning" size="middle" :text="$t('warning')" @click="showType('warning')" />
    </demo-block>

    <demo-block :title="$t('customNotify')">
      <van-button type="info" size="middle" :text="$t('customColor')" @click="showCustomColor" />
      <van-button
        type="info"
        size="middle"
        :text="$t('customDuration')"
        @click="showCustomDuration"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      success: '成功通知',
      info: '信息通知',
      danger: '危险通知',
      warning: '警告通知',
      content: '通知内容',
      notifyType: '通知类型',
      customColor: '自定义颜色',
      customNotify: '自定义配置',
      customDuration: '自定义时长'
    },
    'en-US': {
      success: 'Success',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      content: 'Notify Message',
      notifyType: 'Notify Type',
      customColor: 'Custom Color',
      customNotify: 'Custom Notify',
      customDuration: 'Custom Duration'
    }
  },

  methods: {
    showNotify() {
      this.$notify(this.$t('content'));
    },

    showCustomColor() {
      this.$notify({
        message: this.$t('customColor'),
        color: '#ad0000',
        background: '#ffe1e1'
      });
    },

    showCustomDuration() {
      this.$notify({
        message: this.$t('customDuration'),
        duration: 1000
      });
    },

    showType(type) {
      this.$notify({
        message: this.$t('content'),
        type
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-notify {
  background-color: @white;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
