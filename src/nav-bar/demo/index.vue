<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-nav-bar
        :title="$t('title')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-nav-bar :title="$t('title')" left-arrow>
        <template #right>
          <van-icon name="search" />
        </template>
      </van-nav-bar>
    </demo-block>
    <demo-block :title="$t('example')">
      <img :src="navBar" class="width100" >
    </demo-block>
  </demo-section>
</template>

<script>
import nav from '../../../assets/images/other/navbar.png';

export default {
  data() {
    return {
      navBar: nav
    };
  },
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
