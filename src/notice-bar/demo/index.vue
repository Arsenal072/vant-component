<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-notice-bar :text="$t('text')" left-icon="volume" />
    </demo-block>

    <demo-block :title="$t('scrollable')">
      <van-notice-bar :text="$t('text')" scrollable />
    </demo-block>

    <demo-block :title="$t('wrapable')">
      <van-notice-bar left-icon="volume" wrapable :text="$t('text')" />
    </demo-block>

    <demo-block :title="$t('mode')">
      <van-notice-bar mode="closeable" :text="$t('text')" />
      <van-notice-bar mode="link" :text="$t('text')" />
      <van-notice-bar mode="tips" title="温馨提示" :text="$t('text')" />
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <van-notice-bar
        :text="$t('text')"
        color="#00982D"
        background="rgba(50, 174, 87, 0.12)"
        left-icon="info"
      />
    </demo-block>

    <demo-block :title="$t('slotUsage')">
      <van-notice-bar mode="closable">
        <p class="van-color-text-assist">
          当前设置可能会错过消息提醒。
          <span class="van-color-warning" @click="check">点击查看</span>
        </p>
      </van-notice-bar>
      <van-notice-bar>
        <div class="flex-align-justify">
          <span>尹丽惠 医保卡W327983232 滨江院区</span>
          <van-icon name="down" :size="9" class="margin-left8" />
        </div>
      </van-notice-bar>
      <van-notice-bar color="#00982D" background="rgba(50, 174, 87, 0.12)">
        <div class="text-align-center">
          <span>支付剩余时间</span>
          <van-count-down
            :time="time"
            format="mm:ss"
            class="margin-left6 inline-block van-color-success"
          />
        </div>
      </van-notice-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      scrollable: '开启滚动',
      mode: '通知栏模式',
      wrapable: '多行展示',
      text:
        '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
      text1: '',

      customStyle: '自定义样式'
    },
    'en-US': {
      mode: 'Mode',
      wrapable: 'Wrapable',
      scrollable: 'Scrollable',
      text:
        'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.',
      text1: 'Yin Lihui Medical Insurance Card W327983232',

      customStyle: 'Custom Style'
    }
  },
  data() {
    return {
      time: (2 * 60 + 40) * 1000
    };
  },
  methods: {
    check() {
      this.$toast(this.$t('slotUsage'));
    }
  }
};
</script>

<style lang="less">
.demo-notice-bar {
  .van-notice-bar:not(:first-of-type) {
    margin-top: 5px;
  }

  .van-doc-demo-block__title {
    padding-top: 25px;
  }
}
</style>
