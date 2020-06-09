<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tag>{{ $t('tag') }}</van-tag>
      <van-tag type="success">{{ $t('tag') }}</van-tag>
      <van-tag type="info">{{ $t('tag') }}</van-tag>
      <van-tag type="danger">{{ $t('tag') }}</van-tag>
      <van-tag type="warning">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <van-tag round>{{ $t('tag') }}</van-tag>
      <van-tag type="success" round>{{ $t('tag') }}</van-tag>
      <van-tag type="info" round>{{ $t('tag') }}</van-tag>
      <van-tag type="danger" round>{{ $t('tag') }}</van-tag>
      <van-tag type="warning" round>{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <van-tag mark>{{ $t('text1') }}</van-tag>
      <van-tag mark type="success">{{ $t('text1') }}</van-tag>
      <van-tag mark type="info">{{ $t('tag') }}</van-tag>
      <van-tag mark type="danger">{{ $t('tag') }}</van-tag>
      <van-tag mark type="warning">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <van-tag :plain="false">{{ $t('tag') }}</van-tag>
      <van-tag :plain="false" type="success">{{ $t('tag') }}</van-tag>
      <van-tag :plain="false" type="info">{{ $t('tag') }}</van-tag>
      <van-tag :plain="false" type="danger" round>{{ $t('tag') }}</van-tag>
      <van-tag :plain="false" type="warning" round>{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-tag color="#6E6E6E">{{ $t('tag') }}</van-tag>
      <van-tag text-color="#666666" :plain="false">{{ $t('tag') }}</van-tag>
      <van-tag color="#6E6E6E" round>{{ $t('tag') }}</van-tag>
      <van-tag text-color="#666666" round :plain="false">
        {{ $t('tag') }}
      </van-tag>
      <van-tag color="#7232dd">{{ $t('tag') }}</van-tag>
      <van-tag color="#F0EAFB" text-color="#7232dd" :plain="false">
        {{ $t('tag') }}
      </van-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <van-tag type="success" size="small">{{ $t('tag') }}</van-tag>
      <van-tag type="success">{{ $t('tag') }}</van-tag>
      <van-tag type="success" size="small" :plain="false">
        {{ $t('tag') }}
      </van-tag>
      <van-tag type="success" :plain="false">{{ $t('tag') }}</van-tag>
      <van-tag type="success" size="small" round>{{ $t('tag') }}</van-tag>
      <van-tag type="success" round>{{ $t('tag') }}</van-tag>
      <van-tag type="success" size="small" round :plain="false">
        {{ $t('tag') }}
      </van-tag>
      <van-tag type="success" round :plain="false">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('single')">
      <van-tag single>{{ $t('text2') }}</van-tag>
      <van-tag type="success" single>{{ $t('text2') }}</van-tag>
      <van-tag type="info" single>{{ $t('text2') }}</van-tag>
      <van-tag type="danger" single>{{ $t('text2') }}</van-tag>
      <van-tag type="warning" single>{{ $t('text2') }}</van-tag>
      <van-tag single color="#32ae57">{{ $t('text2') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('closeable')">
      <van-tag
        v-if="show.success"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag v-if="show.info" closeable type="info" @close="close('info')">
        {{ $t('tag') }}
      </van-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '背景填充',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
      text1: '已诊断',
      single: '独字标签',
      text2: '专'
    },
    'en-US': {
      plain: 'Non Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
      text1: 'Text1',
      single: 'Single Text',
      text2: 'Z'
    }
  },

  data() {
    return {
      show: {
        info: true,
        success: true
      }
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .van-tag + .van-tag {
    margin-left: @padding-xs;
    &--mark {
      margin: 10px 20px;
    }
  }

  .van-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
