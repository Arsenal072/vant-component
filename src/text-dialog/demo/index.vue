<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="margin-left20">
        <van-button type="primary" @click="show1 = true">单个标题</van-button>
        <van-text-dialog
          :show="show1"
          :title="title"
          :body="data1"
          :button-text="buttonText"
          @confirm="confirm1"
          @close="close1"
        />
      </div>
    </demo-block>
    <demo-block :title="$t('multiTitle')">
      <div class="margin-left20">
        <van-button type="primary" @click="show2 = true">多标题</van-button>
        <van-text-dialog
          :show="show2"
          :title="title"
          :body="data2"
          :button-text="buttonText"
          mask
          :check="check"
          @confirm="confirm2"
          @close="close2"
          @toggle="toggle"
        >
          <template slot="checkbox-label">
            <div class="font-size1 van-color-text-assist">
              我已阅读
              <span class="van-color-success">《预约须知》</span>
            </div>
          </template>
        </van-text-dialog>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': { multiTitle: '多标题' },
    'en-US': { multiTitle: 'multiTitle' }
  },
  data() {
    return {
      show1: false,
      show2: false,
      title: '标题内容',
      buttonText: '自定义',
      check: false,
      data1:
        '内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文内容文本内容文本内容文本内容文本文本内容文',
      data2: [
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content: '内容文本内容文本内容文本内容文本文本内容文本'
        },
        {
          title: '标题',
          content:
            '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文内容文本内容文本内容文本内容'
        }
      ]
    };
  },

  methods: {
    toggle(v) {
      this.check = v;
      console.log('check-----', this.check);
    },
    confirm1() {
      this.show1 = false;
    },
    confirm2() {
      this.show2 = false;
    },
    close1() {
      this.show1 = false;
    },
    close2() {
      this.show2 = false;
    }
  }
};
</script>
