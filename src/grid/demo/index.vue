<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-grid>
        <van-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo"
          :text="$t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="$t('columnNum')">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="i in 3"
          :key="i"
          icon="photo"
          :text="$t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <van-grid :column-num="2" border>
        <van-grid-item v-for="i in 2" :key="i">
          <ul class="flex-align">
            <van-icon name="photo" :size="48" />
            <div class="margin-left12 line-height1_5">
              <li class="font-size3 van-color-text-primary bold">标题</li>
              <li class="margin-top4 font-size0 van-color-text-secondary">
                描述文字一行
              </li>
            </div>
          </ul>
        </van-grid-item>
      </van-grid>
      <van-grid :column-num="1" class="margin-top20">
        <van-grid-item>
          <ul class="width100 flex1 flex-align-spacebetween">
            <div class="flex-align">
              <van-icon name="photo" :size="54" />
              <div class="margin-left18 line-height1_5">
                <li class="font-size6 van-color-text-primary bold">标题</li>
                <li class="margin-top6 font-size2 van-color-text-secondary">
                  描述文字最多一行
                </li>
              </div>
            </div>
            <van-icon name="more" class="van-color-line-color font-size8" />
          </ul>
        </van-grid-item>
      </van-grid>
    </demo-block>

    <demo-block :title="$t('border')">
      <van-grid border :row-num="8 / 4">
        <van-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo"
          :text="$t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="$t('gutter')">
      <van-grid :gutter="10" :row-num="8 / 4">
        <van-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo"
          :text="$t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="$t('route')">
      <van-grid clickable :column-num="2">
        <van-grid-item icon="wap-home-o" :text="$t('vueRoute')" to="/" />
        <van-grid-item
          icon="search"
          :text="$t('urlRoute')"
          url="/mobile.html"
        />
      </van-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showInfo: '提示信息',
      border: '边框'
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showInfo: 'Show Info',
      border: 'Border'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
</style>
