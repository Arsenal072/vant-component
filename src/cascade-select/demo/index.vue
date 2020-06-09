<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cascade-select
        :length="3"
        :list="list"
        :height="200"
        @clickItem="onClick"
        @confirm="onComfirm"
        @close="close"
      />
    </demo-block>
    <demo-block :title="$t('popup')">
      <van-button type="primary" @click="openPopup" class="margin-left10">结合popup</van-button>
      <van-popup v-model="showPopup" position="bottom">
        <van-cascade-select
          :list="list1"
          data-key="content"
          :height="400"
          @clickItem="onClick1"
          @confirm="onComfirm1"
          @close="close1"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': { popup: '结合popup使用' },
    'en-US': { popup: 'popup' }
  },

  data() {
    return {
      showPopup: false,
      list: [],
      initList: [
        '一级1',
        '一级2',
        '一级3',
        '一级4',
        '一级5',
        '一级6',
        '一级7',
        '一级8',
        '一级9',
        '一级10'
      ],
      list1: [],
      initList1: [
        { content: '一级1' },
        { content: '一级2' },
        { content: '一级3' },
        { content: '一级4' },
        { content: '一级5' },
        { content: '一级6' },
        { content: '一级7' },
        { content: '一级8' },
        { content: '一级9' },
        { content: '一级10' }
      ]
    };
  },
  created() {
    this.list = this.initList;
  },
  methods: {
    onClick({ columnIndex, index, item }) {
      console.log('clickItem-----', { columnIndex, index, item });
      switch (columnIndex) {
        case 0:
          this.list = [
            '二级1',
            '二级2',
            '二级3',
            '二级4',
            '二级5',
            '二级6',
            '二级7',
            '二级8',
            '二级9',
            '二级10'
          ];
          break;
        case 1:
          this.list = [
            '三级1',
            '三级2',
            '三级3',
            '三级4',
            '三级5',
            '三级6',
            '三级7',
            '三级8',
            '三级9',
            '三级10'
          ];
          break;
      }
    },
    onComfirm(arr) {
      this.$toast(arr.map(item => item.item).join(','));
    },
    close() {
      this.list = this.initList;
    },
    openPopup() {
      this.showPopup = true;
      this.list1 = this.initList1;
    },
    onClick1({ columnIndex, index, item }) {
      console.log('clickItem-----', { columnIndex, index, item });
      switch (columnIndex) {
        case 0:
          this.list1 = [
            { content: '二级1' },
            { content: '二级2' },
            { content: '二级3' },
            { content: '二级4' },
            { content: '二级5' },
            { content: '二级6' },
            { content: '二级7' },
            { content: '二级8' },
            { content: '二级9' },
            { content: '二级10' }
          ];
          break;
        case 1:
          this.list1 = [
            { content: '三级1' },
            { content: '三级2' },
            { content: '三级3' },
            { content: '三级4' },
            { content: '三级5' },
            { content: '三级6' },
            { content: '三级7' },
            { content: '三级8' },
            { content: '三级9' },
            { content: '三级10' }
          ];
          break;
        case 2:
          this.list1 = [
            { content: '四级1' },
            { content: '四级2' },
            { content: '四级3' },
            { content: '四级4' },
            { content: '四级5' },
            { content: '四级6' },
            { content: '四级7' },
            { content: '四级8' },
            { content: '四级9' },
            { content: '四级10' }
          ];
          break;
      }
    },
    onComfirm1(arr) {
      this.$toast(arr.map(item => item.item.content).join(','));
    },
    close1() {
      this.showPopup = false;
    }
  }
};
</script>
