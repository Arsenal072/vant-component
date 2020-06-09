<template>
  <demo-section class="demo-color">
    <demo-block :title="$t('mainColor')">
      <ul class="flex-align margin-left20">
        <li class="colorbar van-bgcolor-primary" />
        <li class="margin-left17">#32AE57</li>
        <li class="margin-left15">color-primary</li>
      </ul>
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-primary-dark-1" />
        <li class="margin-left15">#2C994D</li>
        <li class="margin-left15">color-primary-dark-1</li>
      </ul>-->
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-primary-light-7" />
        <li class="margin-left15">#C2E7CD</li>
        <li class="margin-left12">color-primary-light-7</li>
      </ul>-->
      <div class="margin-left20 margin-top10">品牌色，所有的组件主色使用</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-success" />
        <li class="margin-left15">#00982D</li>
        <li class="margin-left14">color-success</li>
      </ul>
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-success-dark-1" />
        <li class="margin-left15">#008628</li>
        <li class="margin-left15">color-success-dark-1</li>
      </ul>-->
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-success-light-7" />
        <li class="margin-left15">#B3E0C0</li>
        <li class="margin-left10">color-success-light-7</li>
      </ul>-->
      <div class="margin-left20 margin-top10">所有字体使用的主色</div>
    </demo-block>
    <demo-block :title="$t('assistColor')">
      <ul class="flex-align margin-left20">
        <li class="colorbar van-bgcolor-warning" />
        <li class="margin-left15">#FF7B35</li>
        <li class="margin-left15">color-warning</li>
      </ul>
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-warning-dark-1" />
        <li class="margin-left15">#E06C2F</li>
        <li class="margin-left13">color-warning-dark-1</li>
      </ul>-->
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-warning-light-7" />
        <li class="margin-left15">#FFD7C2</li>
        <li class="margin-left10">color-warning-light-7</li>
      </ul>-->
      <div class="margin-left20 margin-top10">支付按钮、特殊文字、重点传达信息文字</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-danger" />
        <li class="margin-left15">#FF5F4E</li>
        <li class="margin-left15">color-danger</li>
      </ul>
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-danger-dark-1" />
        <li class="margin-left15">#E05445</li>
        <li class="margin-left18">color-danger-dark-1</li>
      </ul>-->
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-danger-light-7" />
        <li class="margin-left15">#FFCFCA</li>
        <li class="margin-left12">color-danger-light-7</li>
      </ul>-->
      <div class="margin-left20 margin-top10">错误提示、删除文字及图标等警示类信息</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-info" />
        <li class="margin-left18">#0283EF</li>
        <li class="margin-left14">color-info</li>
      </ul>
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-info-dark-1" />
        <li class="margin-left19">#0273D2</li>
        <li class="margin-left14">color-info-dark-1</li>
      </ul>-->
      <!-- <ul class="flex-align margin-left20 margin-top10">
        <li class="colorbar van-bgcolor-info-light-7" />
        <li class="margin-left15">#B3DAFA</li>
        <li class="margin-left14">color-info-light-7</li>
      </ul>-->
      <div class="margin-left20 margin-top10">信息色</div>
    </demo-block>

    <demo-block :title="$t('fontColor')">
      <ul class="flex-align margin-left20">
        <li class="colorbar van-bgcolor-text-primary" />
        <li class="margin-left30">#111111</li>
        <li class="margin-left20">color-text-primary</li>
      </ul>
      <div class="margin-left20 margin-top10">一级信息、标题、主内容文字等</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-text-regular" />
        <li class="margin-left30">#333333</li>
        <li class="margin-left16">color-text-regular</li>
      </ul>
      <div class="margin-left20 margin-top10">二级信息、普通级别、tab文字等</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-text-assist" />
        <li class="margin-left30">#666666</li>
        <li class="margin-left16">color-text-assist</li>
      </ul>
      <div class="margin-left20 margin-top10">辅助文字、次要信息、表单标题等</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-text-secondary" />
        <li class="margin-left30">#999999</li>
        <li class="margin-left16">color-text-secondary</li>
      </ul>
      <div class="margin-left20 margin-top10">表单次级辅助文字，时间、数据等</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-text-placeholder" />
        <li class="margin-left30">#B2B2B2</li>
        <li class="margin-left10">color-text-placeholder</li>
      </ul>
      <div class="margin-left20 margin-top10">表单输入提示性文字</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-text-empty" />
        <li class="margin-left30">#6C7D8F</li>
        <li class="margin-left17">color-text-empty</li>
      </ul>
      <div class="margin-left20 margin-top10">无数据提示文字</div>
    </demo-block>

    <demo-block :title="$t('otherColor')">
      <ul class="flex-align margin-left20">
        <li class="colorbar van-bgcolor-border-color" />
        <li class="margin-left30">#CDCDCD</li>
        <li class="margin-left10">border-color</li>
      </ul>
      <div class="margin-left20 margin-top10">边框色</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-line-color" />
        <li class="margin-left30">#E2E2E2</li>
        <li class="margin-left20">line-color</li>
      </ul>
      <div class="margin-left20 margin-top10">分割线</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-background-color" />
        <li class="margin-left30">#F6F6F6</li>
        <li class="margin-left22">background-color</li>
      </ul>
      <div class="margin-left20 margin-top10">页面最底层背景</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-white border1" />
        <li class="margin-left30">#FFFFFF</li>
        <li class="margin-left22">white</li>
      </ul>
      <div class="margin-left20 margin-top10">白色</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-black" />
        <li class="margin-left30">#000000</li>
        <li class="margin-left22">black</li>
      </ul>
      <div class="margin-left20 margin-top10">黑色</div>

      <ul class="flex-align margin-left20 margin-top20">
        <li class="colorbar van-bgcolor-transparent" />
        <li class="margin-left30">transparent</li>
        <li class="margin-left22">transparent</li>
      </ul>
      <div class="margin-left20 margin-top10">透明色</div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      mainColor: '主色调',
      assistColor: '辅助色',
      fontColor: '文字色',
      otherColor: '其他色'
    },
    'en-US': {
      mainColor: 'mainColor',
      assistColor: 'assistColor',
      fontColor: 'fontColor',
      otherColor: 'otherColor'
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.van-doc-demo-section {
  background-color: @white;
}
.colorbar {
  width: 80px;
  height: 25px;
}

.van-bgcolor-transparent {
  border: 1px solid #fcc3c3;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.…0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%, auto;
}
</style>
