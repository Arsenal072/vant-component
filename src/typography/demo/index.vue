<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <div class="margin-left20 margin-right20">
        中文—PingFang SC Regular
        <br />英文——Arial
        <br />数字——San Francisco Text
        <br />字间距：0.2
        <br />行间距：运用黄金比例，即文字的大小x1.5(黄金值)取四舍五入，得出字体间距规则。
        <br />间距：均为4的倍数 如4、8、12、16、20、24、28、32…
      </div>
    </demo-block>
    <demo-block :title="$t('title2')">
      <div class="margin-left20 margin-right20">
        <ul>
          <li class="margin-bottom10 font-size3">
            <span class="margin-right20">卓健科技</span>
            <span class="margin-right25">17px</span>用于大按钮文字、标题、状态图文字
          </li>
          <li class="margin-bottom10 font-size2">
            <span class="margin-right23">卓健科技</span>
            <span class="margin-right23">16px</span> 用于详情页标题文字、列表一级文字、文字按钮
          </li>
          <li class="margin-bottom10 font-size1">
            <span class="margin-right28">卓健科技</span>
            <span class="margin-right28">15px</span>常于列表二级文字、正文、Tab文字
          </li>
          <li class="margin-bottom10 font-size0">
            <span class="margin-right30">卓健科技</span>
            <span class="margin-right28">14px</span>用于提示、搜索文字、较少用于列表二级文字
          </li>
        </ul>
      </div>
    </demo-block>
    <demo-block :title="$t('title3')">
      <ul class="margin-left20 margin-right20">
        <li class="margin-bottom10 font-size4">
          <span class="margin-right15">卓健科技</span>
          <span class="margin-right22">18px</span>导航栏文字
        </li>

        <li class="margin-bottom10 font-size-1">
          <span class="margin-right40">卓健科技</span>
          <span class="margin-right32">12px</span>补充部分文字、列表中的时间文字、页脚
        </li>
      </ul>
    </demo-block>
    <demo-block :title="$t('title4')">
      <ul class="margin-left20 margin-right20">
        <li class="margin-bottom10 font-size14">卓健科技 &nbsp;28px &nbsp;用于特殊文字、列表中特殊数字</li>
        <li class="margin-bottom10 font-size12">
          <span class="margin-right25">卓健科技</span>
          <span class="margin-right20">24px</span>用于特殊文字、列表中特殊数字、语音视频页面姓名
        </li>
        <li class="margin-bottom10 font-size6">
          <span class="margin-right50">卓健科技</span>
          <span class="margin-right35">20px</span>操作完成提示（大）
        </li>
        <li class="margin-bottom10 font-size-2">
          <span class="margin-right40">卓健科技</span>
          <span class="margin-right32">10px</span>用于底部导航文字、用于标签内文字
        </li>
      </ul>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '字体',
      title2: '重要',
      title3: '一般',
      title4: '较弱'
    },
    'en-US': {
      title1: 'typography',
      title2: 'important',
      title3: 'normal',
      title4: 'week'
    }
  }
};
</script>
<style lang="less" scoped>
div {
  line-height: 1.5;
  letter-spacing: 0.2px;
}
</style>
