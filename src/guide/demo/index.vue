<template>
  <demo-section>
    <demo-block title="基础用法">
      <van-guide v-if="show" :img-list="imgList" @end="show = false" />
      <van-button type="primary" size="middle" @click="show = true">蒙层</van-button>
    </demo-block>
  </demo-section>
</template>

<script>
import img1 from '../../../assets/images/other/img1.png';
import img2 from '../../../assets/images/other/img2.png';

export default {
  data() {
    return {
      imgList: [img1, img2],
      show: false
    };
  }
};
</script>

<style scoped></style>
