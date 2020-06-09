<template>
  <demo-section>
    <demo-block :title="$t('Usage')">
      <van-tabs v-model="active1">
        <van-tab :title="$t('tab')" v-for="index in 2" :key="index" />
      </van-tabs>
      <van-tabs v-model="active" class="margin-top20">
        <van-tab :title="$t('tab')" v-for="index in tabs" :key="index" />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <van-tabs v-model="activeName">
        <van-tab name="a" :title="$t('tab')" />
        <van-tab name="b" :title="$t('tab')" />
        <van-tab name="c" :title="$t('tab')" />
        <van-tab name="d" :title="$t('tab')" />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-tabs>
        <van-tab v-for="index in 8" :title="$t('tab')" :key="index" />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-tabs @disabled="onClickDisabled">
        <van-tab
          v-for="index in 3"
          :title="$t('tab')"
          :disabled="index === 2"
          :key="index"
        />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-tabs v-model="active2" type="arrow">
        <van-tab :title="$t('tab')" v-for="index in 2" :key="index" />
      </van-tabs>
      <van-tabs type="card" class="margin-top20">
        <van-tab v-for="index in 3" :title="$t('tab')" :key="index" />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-tabs @click="onClick">
        <van-tab v-for="index in 2" :title="$t('tab')" :key="index" />
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <van-tabs :active="active" sticky>
        <van-tab :title="$t('tab')" v-for="index in 4" :key="index" />
      </van-tabs>
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('title7')">
      <van-tabs :active="active">
        <van-tab v-for="index in 2" :key="index">
          <template #title>
            <van-icon name="more" class="font-size-2" />
            {{ $t('tab') }}
          </template>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <van-tabs animated>
        <van-tab :title="$t('tab')" v-for="index in 4" :key="index">
          <div class="padding20X paddingX14 van-bgcolor-white">
            内容 {{ index }}
          </div>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <van-tabs :active="active3" swipeable>
        <van-tab :title="$t('tab')" v-for="index in 4" :key="index">
          <div class="padding20X paddingX14 van-bgcolor-white">
            内容 {{ index }}
          </div>
        </van-tab>
      </van-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
import { zhCNData } from '../../tree-select/demo/data.zh-CN';
import { enUSData } from '../../tree-select/demo/data.en-US';

export default {
  i18n: {
    'zh-CN': {
      tab: '标题 ',
      Usage: '基础用法',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配',
      data: zhCNData
    },
    'en-US': {
      tab: 'Tab ',
      Usage: 'top',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled',
      matchByName: 'Match By Name',
      data: enUSData
    }
  },
  data() {
    return {
      active: 0,
      active1: 0,
      active2: 0,
      active3: 0,
      activeName: 'b',
      tabs: [1, 2, 3]
    };
  },
  computed: {
    items() {
      return this.$t('data');
    }
  },
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(`${index} ${title}`);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;
  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }
}
</style>
