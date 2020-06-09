<template>
  <demo-section>
    <div class="absolute top70 left14">
      figure: <van-stepper v-model="figure" min="1" max="23" class="margin-top10" />
    </div>
    <van-nodata
      @clickButton="clickEvent"
      :figure="figure"
      :title="$t('title')"
      :tip="$t('tip')"
      :button="$t('reload')"
    />
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      reload: '重新加载',
      title: '标题',
      tip: '提示'
    },
    'en-US': {
      reload: 'Reload',
      title: 'Title',
      tip: 'Tip'
    }
  },
  data() {
    return {
      figure: 1
    };
  },
  methods: {
    clickEvent() {
      this.$toast(this.$t('reload'));
    }
  }
};
</script>
