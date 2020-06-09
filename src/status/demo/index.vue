<template>
  <demo-section>
    <van-tabs>
      <van-tab title="orient: horizontal">
        <van-status
          v-for="(item, index) in posts"
          :key="index"
          :figure="item.figure"
          :type="item.type"
          :title="`${item.title || ''} ${item.figure}`"
          :tip="item.tip"
          :background="item.background"
          class="margin-top8"
        />
      </van-tab>
      <van-tab title="orient: vertical">
        <van-grid :border="false" :column-num="2" gutter="8" class="margin8X">
          <van-grid-item v-for="(item, index) in posts1" :key="index" class="margin-top8">
            <van-status
              orient="vertical"
              :figure="item.figure"
              :type="item.type"
              :title="`${item.title || ''} ${item.figure}`"
              :tip="item.tip"
              :background="item.background"
            >
              <div v-if="index === 2 || index === 3" class="margin-top18 flex-align">
                前面还有
                <span
                  :class="[
                    'marginX8',
                    'font-size14',
                    index === 2 ? 'van-color-success' : 'van-color-info'
                  ]"
                >1</span>人在候诊
              </div>
            </van-status>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {},
    'en-US': {}
  },
  data() {
    return {
      posts: [
        { figure: 1, title: '待付款' },
        { figure: 2, title: '待发货' },
        { figure: 3, title: '配送中' },
        { figure: 4, title: '待取药' },
        { figure: 5, title: '已完成' },
        { figure: 6, title: '已失效', tip: '原因：处方已失效' },
        { figure: 7, title: '待退款', tip: '原因：买错了不想要了' },
        { figure: 8, title: '退款中', tip: '原因：买错了不想要了' },
        { figure: 9, title: '已退款', tip: '原因：买错了不想要了' },
        {
          type: '2',
          figure: 10,
          title: '患者已经出院',
          background: 'linear-gradient(270deg, #5488FB 0%, #61B8FF 100%)'
        },
        {
          type: '2',
          figure: 11,
          title: '医生诊断结果已出'
        },
        {
          type: '2',
          figure: 12,
          title: '该患者已经出院啦',
          background: 'linear-gradient(270deg, #5488FB 0%, #61B8FF 100%)'
        },
        {
          type: '2',
          figure: 13,
          title: '医生诊断结果已出'
        }
      ],
      posts1: [
        { figure: 14, title: '当前还未开诊' },
        { type: '2', figure: 14, title: '当前还未开诊' },
        { figure: 15 },
        { type: '2', figure: 15 },
        { figure: 16, title: '反馈失败' },
        { type: '2', figure: 16, title: '反馈失败' },
        { figure: 17, title: '反馈成功' },
        { type: '2', figure: 17, title: '反馈成功' },
        { figure: 18, title: '取号失败', tip: '挂号费已退回' },
        {
          type: '2',
          figure: 18,
          title: '取号失败',
          tip: '挂号费已退回'
        }
      ]
    };
  }
};
</script>
