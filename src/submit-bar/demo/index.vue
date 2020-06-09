<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-submit-bar
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-submit-bar
        disabled
        :price="3050"
        suffix-label="原价100"
        :button-text="$t('submit')"
        :tip="$t('tip1')"
        :border="false"
        tip-icon="info"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <van-submit-bar
        loading
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-submit-bar
        :price="3050"
        label="合计"
        :button-text="$t('submit')"
        :border="false"
        @submit="onClickButton"
      >
        <template #tip>
          {{ $t('tip2') }}
          <span class="van-color-info" @click="onClickLink">
            {{ $t('tip3') }}
          </span>
        </template>
        <template #left>
          <van-checkbox v-model="checked">{{ $t('check') }}</van-checkbox>
        </template>
      </van-submit-bar>
    </demo-block>

    <demo-block :title="$t('slotUsage')">
      <van-submit-bar>
        <van-button type="primary" block>{{ $t('primary') }}</van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <van-button type="primary" icon="plus" block>
          {{ $t('primary') }}
        </van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <van-button class="width50">{{ $t('week') }}</van-button>
        <van-button type="primary" class="margin-left12 width50">
          {{ $t('primary') }}
        </van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <van-button type="primary" plain class="width50">
          {{ $t('plain') }}
        </van-button>
        <van-button type="primary" class="margin-left12 width50">
          {{ $t('primary') }}
        </van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <template #top>
          <div
            class="padding-top16 padding-bottom8 text-align-center van-color-text-assist font-size1"
          >
            {{ $t('tip4') }}
          </div>
        </template>
        <van-button type="primary" block>{{ $t('primary') }}</van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <van-button type="warning" block>
          <div class="flex-align-justify">
            {{ $t('confirm') }}
            <span class="margin-left7 font-size12">39.8</span>
            <i class="margin-left2 font-size2">元</i>
          </div>
        </van-button>
      </van-submit-bar>

      <van-submit-bar class="margin-top20">
        <van-button type="warning" block>
          {{ $t('confirm') }}
          <van-icon name="clock-o" class="margin-left10" />
          <van-count-down
            :time="time"
            format="mm:ss"
            class="margin-left4 inline-block van-color-white font-size3"
          />
        </van-button>
      </van-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交订单',
      tip1: '你的收货地址不支持同城送, 我们已为你推荐快递',
      tip2: '你的收货地址不支持同城送, ',
      tip3: '修改地址',
      tip4: '按钮提示文字',
      check: '全选',
      clickButton: '点击按钮',
      clickLink: '修改地址',
      primary: '主按钮',
      plain: '次按钮',
      confirm: '确认支付',
      week: '弱按钮'
    },
    'en-US': {
      submit: 'Submit',
      tip1: 'Some tips',
      tip2: 'Some tips, ',
      tip3: 'Link',
      tip4: 'Button tips',
      check: 'Label',
      clickButton: 'Click button',
      clickLink: 'Click Link',
      primary: 'Primary',
      plain: 'Plain',
      confirm: 'Confirm',
      week: 'Week'
    }
  },

  data() {
    return {
      checked: true,
      time: 15 * 60 * 1000
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.$t('clickButton'));
    },
    onClickLink() {
      this.$toast(this.$t('clickLink'));
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }
}
</style>
