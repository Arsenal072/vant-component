<template>
  <demo-section>
    <van-grid :column-num="2" :border="false">
      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('basicUsage') }}</h3>
        <van-sidebar v-model="activeKey1">
          <van-sidebar-item :title="$t('title')" />
          <van-sidebar-item :title="$t('title')" />
          <van-sidebar-item :title="$t('title')" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('showInfo') }}</h3>
        <van-sidebar v-model="activeKey2">
          <van-sidebar-item :title="$t('title')" dot />
          <van-sidebar-item :title="$t('title')" info="5" />
          <van-sidebar-item :title="$t('title')" info="99+" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('disabled') }}</h3>
        <van-sidebar v-model="activeKey3">
          <van-sidebar-item :title="$t('title')" />
          <van-sidebar-item :title="$t('title')" disabled />
          <van-sidebar-item :title="$t('title')" />
        </van-sidebar>
      </van-grid-item>
    </van-grid>
    <demo-block class="margin-left20">
      <h3 class="demo-sidebar-title">{{ $t('imgUsage') }}</h3>
      <van-sidebar v-model="activeKey4" class="image">
        <van-sidebar-item :title="$t('title2')" icon="smile-o" icon-size="46" />
        <van-sidebar-item
          :title="$t('title2')"
          icon="http://mui.ucmed.cn/images/default/avatar1.png"
        />
      </van-sidebar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名',
      title2: '选项',
      imgUsage: '带图',
      showInfo: '提示信息',
      disabled: '禁用选项'
    },
    'en-US': {
      showInfo: 'Show Info',
      disabled: 'Disabled'
    }
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .van-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @color-text-secondary;
    font-weight: normal;
    font-size: 14px;
  }
  .image {
    height: 603px;
    width: 100px;
    background: @background-color;
  }
}
</style>
