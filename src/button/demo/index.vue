<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <van-button type="default">{{ $t('default') }}</van-button>
      <van-button type="primary">{{ $t('primary') }}</van-button>
      <van-button type="info">{{ $t('info') }}</van-button>
      <van-button type="danger">{{ $t('danger') }}</van-button>
      <van-button type="warning">{{ $t('warning') }}</van-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <van-button plain :text="$t('plain')" />
      <van-button plain type="primary" :text="$t('plain')" />
      <van-button plain type="info" :text="$t('plain')" />
      <van-button plain type="danger" :text="$t('plain')" />
      <van-button plain type="warning" :text="$t('plain')" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-button disabled :text="$t('disabled')" />
      <van-button disabled type="primary" :text="$t('disabled')" />
      <van-button disabled type="info" :text="$t('disabled')" />
      <van-button disabled plain type="danger" :text="$t('disabled')" />
      <van-button disabled plain type="warning" :text="$t('disabled')" />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading :loading-text="$t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="$t('shape')">
      <van-button type="primary" square :text="$t('square')" />
    </demo-block>

    <demo-block :title="$t('icon')">
      <van-button type="primary" icon="plus" />
      <van-button type="primary" icon="plus" :text="$t('button')" />
      <van-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/vant/logo.png"
        :text="$t('button')"
      />
    </demo-block>

    <demo-block :title="$t('size')">
      <van-button type="primary">{{ $t('normal') }}</van-button>
      <van-button type="primary" size="middle">{{ $t('middle') }}</van-button>
      <van-button type="primary" size="small">{{ $t('small') }}</van-button>
      <van-button type="primary" size="mini">{{ $t('mini') }}</van-button>
    </demo-block>

    <demo-block :title="$t('router')">
      <van-button :text="$t('urlRoute')" type="primary" url="/vant/mobile.html" />
      <van-button :text="$t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-button color="#7232dd" :text="$t('pure')" />
      <van-button plain color="#7232dd" :text="$t('pure')" />
      <van-button color="linear-gradient(to right, #3AD468, #2DAB53)" :text="$t('gradient')" />
    </demo-block>

    <demo-block :title="$t('customBorderColor')">
      <van-button plain type="primary" border-color="transparent" :text="$t('transparent')" />
      <van-button plain type="danger" border-color="#cdcdcd" :text="$t('borderColor')" />
    </demo-block>

    <demo-block :title="$t('block')">
      <div class="paddingX6">
        <van-button type="primary" block>{{ $t('block') }}</van-button>
        <van-button type="primary" plain block>{{ $t('plain') }}</van-button>
        <van-button block>{{ $t('weak') }}</van-button>
        <van-button type="danger" plain block>{{ $t('delete') }}</van-button>
        <van-button type="warning" block>{{ $t('assit') }}</van-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      normal: '普通按钮',
      middle: '中按钮',
      small: '小按钮',
      mini: '迷你',
      plain: '空心按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      customBorderColor: '自定义边框色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      block: '主按钮',
      weak: '弱按钮',
      assit: '辅按钮',
      delete: '删除按钮',
      transparent: '透明色',
      borderColor: '边框色'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      normal: 'Normal',
      middle: 'Middle',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      customBorderColor: 'Border Color',
      pure: 'Pure',
      gradient: 'Gradient',
      block: 'Block',
      transparent: 'Transparent',
      borderColor: 'Border Color'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  .van-button {
    margin-right: @padding-md;
    margin-bottom: @padding-md;
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
