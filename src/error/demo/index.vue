<template>
  <div>
    <van-button
      type="primary"
      size="small"
      class="absolute top70 left14"
      @click="switchDefault"
    >figure: {{ figure }}</van-button>

    <van-error
      @clickButton="clickEvent"
      :figure="figure"
      :title="info.title"
      :tip="info.tip"
      :button="info.button"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      figure: 1,
      reference: [
        {
          title: '您访问的页面繁忙！',
          tip: '网站有点小扛不住啦',
          button: '重新加载'
        },
        {
          title: '您访问的页面不存在！',
          tip: '您可能输错地址，或页面已删除！'
        },
        { title: '服务异常', tip: '请您返回首页', button: '返回首页' }
      ]
    };
  },
  computed: {
    info() {
      return this.reference[this.figure - 1];
    }
  },
  methods: {
    switchDefault() {
      if (this.figure > 2) {
        this.figure = 1;
      } else {
        this.figure++;
      }
    },
    clickEvent() {
      this.$toast(this.info.button);
    }
  }
};
</script>
<style lang="less" scoped>
.van-error {
  height: calc(100vh - 56px);
}
</style>
