<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-search
        v-model="value"
        :placeholder="$t('placeholder')"
        :show-action="showAction"
        @search="onSearch"
        @cancel="onCancel"
        @focus="onFocus"
      />
    </demo-block>

    <demo-block :title="$t('reverseColor')">
      <section class="padding8X van-bgcolor-white">
        <van-search
          v-model="value"
          :placeholder="$t('placeholder')"
          :show-action="showAction"
          reverse-color
          @search="onSearch"
          @cancel="onCancel"
          @focus="onFocus"
        />
      </section>
    </demo-block>

    <demo-block :title="$t('customButton')">
      <van-search
        v-model="value1"
        :placeholder="$t('placeholder')"
        :show-action="showAction1"
        @search="onSearch(1)"
        @focus="onFocus(1)"
      >
        <div slot="action" @click="value1 ? onSearch(1) : onCancel(1)">
          {{ value1 ? $t('search') : $t('cancel') }}
        </div>
      </van-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '地址',
      placeholder: '请输入搜索关键词',
      customButton: '自定义按钮',
      reverseColor: '颜色反转'
    },
    'en-US': {
      label: 'Address',
      placeholder: 'Placeholder',
      customButton: 'Custom Action Button',
      reverseColor: 'Reverse Color'
    }
  },

  data() {
    return {
      value: '',
      value1: '',
      showAction: false,
      showAction1: false
    };
  },

  methods: {
    onSearch(type) {
      this.$toast(type === 1 ? this.value1 : this.value);
    },

    onCancel(type) {
      this.$toast(this.$t('cancel'));
      type === 1 ? (this.showAction1 = false) : (this.showAction = false);
    },

    onFocus(type) {
      type === 1 ? (this.showAction1 = true) : (this.showAction = true);
    }
  }
};
</script>
