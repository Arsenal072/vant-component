<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="margin-left20">
        <van-button type="primary" @click="show = true">评论</van-button>
        <van-evaluate-dialog
          :show="show"
          :options="options"
          :rate-text="rateText"
          :doctor-name="doctorName"
          :doctor-title="doctorTitle"
          allow-half
          @confirm="confirm"
          @close="close"
        />
      </div>
    </demo-block>
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
      show: false,
      avatarFigure: 1,
      avatarSize: 40,
      doctorName: '陈医生',
      doctorTitle: '副主任',
      options: [
        { text: '亲切和蔼' },
        { text: '经验丰富' },
        { text: '回复及时' },
        { text: '医术精湛' },
        { text: '专业解答' },
        { text: '医德高尚' },
        { text: '耐心细致' },
        { text: '认真负责' }
      ],
      rateText: [
        '半颗星',
        '一颗星',
        '一颗半星',
        '两颗星',
        '两颗半星',
        '三颗星',
        '三颗半星',
        '四颗星',
        '四颗半星',
        '五颗星'
      ]
    };
  },

  methods: {
    confirm({ rate, rateText, options, comment }) {
      this.show = false;
      console.log(rate, rateText, options, comment);
    },
    close() {
      this.show = false;
    }
  }
};
</script>
