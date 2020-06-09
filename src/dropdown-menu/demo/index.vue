<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="$t('multipleMenu')">
      <van-dropdown-menu>
        <van-dropdown-item
          ref="inlineOption"
          :title="$t('group')"
          multiple
          :options="inlineOption"
          @change="changeOption"
        >
          <van-button
            plain
            border-color="#e2e2e2"
            class="margin-top20 width50"
            @click="onCancel"
          >
            {{ minor }}
          </van-button>
          <van-button
            type="primary"
            class="margin-top20 width50"
            @click="onConfirm"
          >
            {{ primary }}
          </van-button>
        </van-dropdown-item>
        <van-dropdown-item
          ref="inlineOption1"
          :title="$t('nogroup')"
          multiple
          :options="inlineOption1"
          @change="changeOption1"
        >
          <van-button
            type="primary"
            plain
            block
            border-color="#e2e2e2"
            class="margin-top20"
            @click="onConfirm1"
          >
            {{ primary }}
          </van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="筛选" ref="custom">
          <van-cell title="包邮" cell-class="switch-cell">
            <van-switch v-model="switch1" />
          </van-cell>
          <van-cell title="团购" cell-class="switch-cell">
            <van-switch v-model="switch2" />
          </van-cell>
          <van-button
            type="primary"
            border-color="transparent"
            plain
            block
            @click="onConfirm2"
          >
            确认
          </van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="$t('customActiveColor')">
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="$t('expandDirection')">
      <van-dropdown-menu direction="up">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </demo-block>

    <demo-block :title="$t('disableMenu')">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" />
        <van-dropdown-item v-model="value2" disabled :options="option2" />
      </van-dropdown-menu>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      disableMenu: '禁用菜单',
      switchTitle1: '包邮',
      switchTitle2: '团购',
      itemTitle: '筛选',
      expandDirection: '向上展开',
      customContent: '自定义菜单内容',
      customActiveColor: '自定义选中态颜色',
      multipleMenu: '多选菜单',
      group: '分组',
      nogroup: '不分组',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    },
    'en-US': {
      disableMenu: 'Disable Menu',
      switchTitle1: 'Title',
      switchTitle2: 'Title',
      itemTitle: 'Title',
      expandDirection: 'Expand Direction',
      customContent: 'Custom Content',
      customActiveColor: 'Custom Active Color',
      multipleMenu: 'Multiple Menu',
      group: 'By Group',
      nogroup: 'No Group',
      option1: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      option2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' }
      ]
    }
  },

  data() {
    return {
      switch1: true,
      switch2: false,
      value: 0,
      value1: 0,
      value2: 'a',
      unbind: false,
      primary: '主按钮',
      minor: '次按钮',
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      inlineOption: [
        {
          title: '标题',
          options: [
            { text: '内容' },
            { text: '内容' },
            { text: '内容' },
            { text: '内容' }
          ]
        },
        {
          title: '标题1',
          options: [
            { text: '内容1' },
            { text: '内容1' },
            { text: '内容1' },
            { text: '内容1' }
          ]
        }
      ],
      inlineOption1: [
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' },
        { text: '内容' }
      ]
    };
  },

  computed: {
    option1() {
      return this.$t('option1');
    },

    option2() {
      return this.$t('option2');
    }
  },

  methods: {
    changeOption(options) {
      this.inlineOption = options;
      this.inlineOption.map(item => {
        console.log(item.options.filter(obj => obj.checked));
      });
    },
    changeOption1(options) {
      this.inlineOption1 = options;
      console.log(this.inlineOption1.filter(obj => obj.checked));
    },
    onCancel() {
      this.$refs.inlineOption.reset();
      this.$refs.inlineOption.toggle();
    },
    onConfirm() {
      this.$refs.inlineOption.toggle();
    },
    onConfirm1() {
      this.$refs.inlineOption1.toggle();
    },
    onConfirm2() {
      this.$refs.custom.toggle();
    }
  }
};
</script>
