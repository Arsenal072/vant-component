<template>
  <demo-section>
    <demo-block class="text-align-center">
      <h2 class="van-doc-demo-block__title text-align-left">{{ $t('ios') }}</h2>
      <img :src="imgIos" width="95%" />
      <h2 class="van-doc-demo-block__title text-align-left">
        {{ $t('android') }}
      </h2>
      <img :src="imgAndroid" width="95%" />
    </demo-block>
  </demo-section>
</template>

<script>
import layout1 from '../../../assets/images/other/ios.png';
import layout2 from '../../../assets/images/other/android.png';

export default {
  i18n: {
    'zh-CN': {
      ios: 'ios平台',
      android: 'android平台'
    },
    'en-US': {
      ios: 'ios',
      android: 'android'
    }
  },
  data() {
    return {
      imgIos: layout1,
      imgAndroid: layout2
    };
  }
};
</script>
