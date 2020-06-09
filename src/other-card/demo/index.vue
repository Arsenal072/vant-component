<template>
  <demo-section>
    <van-button type="primary" size="small" @click="add">
      figure:{{ index }}
    </van-button>
    <demo-block>
      <van-other-card :figure="index" />
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
      if (this.index === 22) {
        this.index = 1;
      }
    }
  }
};
</script>
