<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home-o" info="3">
            {{ $t('tab') }}
          </van-tabbar-item>
          <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        </van-tabbar>
      </div>
    </demo-block>
    <demo-block :title="$t('transparent')">
      <div>
        <van-tabbar v-model="active6" transparent :border="false">
          <van-tabbar-item icon="wap-home-o">{{ $t('tab') }}</van-tabbar-item>
          <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
          <van-tabbar-item icon="location-o">{{ $t('tab') }}</van-tabbar-item>
        </van-tabbar>
      </div>
    </demo-block>
    <demo-block :title="$t('matchByName')">
      <van-tabbar v-model="activeName">
        <van-tabbar-item name="home" icon="wap-home-o">
          {{ $t('tab') }}
        </van-tabbar-item>
        <van-tabbar-item name="search" icon="search">
          {{ $t('tab') }}
        </van-tabbar-item>
        <van-tabbar-item name="location" icon="location-o">
          {{ $t('tab') }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>
    <demo-block :title="$t('customIcon')">
      <van-tabbar v-model="active3">
        <van-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <template #icon="{ active }">
            <img :src="active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="gem">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="user-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-tabbar
        v-model="active4"
        active-color="#4d1360"
        inactive-color="#000"
      >
        <van-tabbar-item icon="wap-home-o" info="5">
          {{ $t('tab') }}
        </van-tabbar-item>
        <van-tabbar-item icon="search">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="location-o">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="gem">{{ $t('tab') }}</van-tabbar-item>
        <van-tabbar-item icon="user-o">{{ $t('tab') }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>
    <demo-block :title="$t('system')">
      <img :src="tabbar" class="width100" />
    </demo-block>
  </demo-section>
</template>

<script>
import img from '../../../assets/images/other/tabbar.png';
import tabbarActive from '../../../assets/images/icon/tabbar-active.png';
import tabbarInactive from '../../../assets/images/icon/tabbar-inactive.png';

export default {
  i18n: {
    'zh-CN': {
      badge: '提示信息',
      transparent: '背景透明',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配',
      system: '系统自带'
    },
    'en-US': {
      badge: 'Show Badge',
      transparent: 'transparent',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name',
      system: 'System'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      active6: 0,
      activeName: 'home',
      tabbar: img,
      icon: {
        active: tabbarActive,
        inactive: tabbarInactive
      }
    };
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .van-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
