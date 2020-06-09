<template>
  <demo-section>
    <div>
      <van-call
        :mode="mode"
        :avatar-figure="1"
        :title="name"
        :tip="tip"
        :hand-free="handFree"
        :count="count"
        @switchMode="switchMode"
        @switchHandFree="switchHandFree"
        @switchCamera="switchCamera"
        @hangUp="hangUp"
      >
        <template slot="video">
          <div :class="['remote-wrapper', reverse ? 'local' : 'remote']" />
          <div :class="['local-wrapper', reverse ? 'remote' : 'local']" />
        </template>
      </van-call>
    </div>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      mode: 'voice',
      name: '吴化平',
      tip: '语音通话中',
      handFree: false,
      reverse: false,
      count: '14:15'
    };
  },
  methods: {
    switchMode() {
      this.mode = this.mode === 'voice' ? 'video' : 'voice';
      this.reset();
    },
    switchHandFree() {
      this.handFree = !this.handFree;
    },
    switchCamera() {
      this.reverse = !this.reverse;
    },
    hangUp() {
      this.$toast('hangUp');
    },
    reset() {
      this.reverse = false;
      this.handFree = false;
    }
  }
};
</script>

<style lang="less">
.remote-wrapper {
  width: 100%;
  height: 100%;
}
.remote {
  background: url('../../../assets/images/other/remote.png');
  background-size: 100% 100%;
}
.local-wrapper {
  position: fixed;
  top: 60px;
  right: 4px;
  z-index: 1;
  width: 92px;
  height: 164px;
  border-radius: 4px;
  overflow: hidden;
}
.local {
  background: url('../../../assets/images/other/local.png');
  background-size: 100% 100%;
}
</style>
