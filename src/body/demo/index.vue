<template>
  <demo-section>
    <van-button type="primary" size="small" @click="add">figure:{{ index + 0 }}</van-button>
    <demo-block>
      <van-body :figure="index" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      index: 1
    };
  },
  methods: {
    add() {
      this.index++;
      if (this.index === 14) {
        this.index = 1;
      }
    }
  }
};
</script>
