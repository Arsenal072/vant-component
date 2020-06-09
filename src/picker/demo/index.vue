<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-picker :columns="$t('column1')" @change="onChange1" />
    </demo-block>

    <demo-block :title="$t('defaultIndex')">
      <van-picker
        :columns="$t('column4')"
        :default-index="2"
        @change="onChange1"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-picker
        show-toolbar
        :title="$t('title')"
        :columns="$t('column1')"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block :title="$t('withPopup')">
      <van-field
        readonly
        clickable
        :label="$t('card')"
        :value="fieldValue"
        :placeholder="$t('chooseCard')"
        @click="onClickField"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :title="$t('chooseCard')"
          :columns="$t('column1')"
          @cancel="onCancel2"
          @confirm="onConfirm2"
        />
      </van-popup>
    </demo-block>

    <!-- <demo-block :title="$t('title2')">
      <van-picker :columns="$t('column2')" />
    </demo-block> -->

    <demo-block :title="$t('title4')">
      <van-picker :columns="columns" @change="onChange2" />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <van-picker loading :columns="columns" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      card: '证件',
      title2: '禁用选项',
      title3: '展示顶部栏',
      title4: '多列联动（省市区选择详见业务组件Area）',
      defaultIndex: '默认选中项',
      withPopup: '搭配弹出层使用',
      chooseCard: '请选择证件',
      column1: ['港澳台胞证', '身份证', '居民户口簿', '临时身份证', '军官证'],
      column2: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      },
      column4: [
        '12-02 周六09:00-12:00 120元',
        '12-03 周日08:00-14:00 90元',
        '12-04 周一下午 60元',
        '12-05 周二上午 120元',
        '12-05 周二12：00-16：00 30元',
        '12-06 周三09:00-18:00 60元'
      ],
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`
    },
    'en-US': {
      card: 'Card',
      title2: 'Disable Option',
      title3: 'Show Toolbar',
      title4: 'Multi Columns(Component area see for details)',
      defaultIndex: 'Default Index',
      withPopup: 'With Popup',
      chooseCard: 'Choose Card Please',
      column1: [
        'Passport of Hong Kong, Macao and Taiwan',
        'ID card',
        'Household register',
        'Temporary ID card',
        'Officer card'
      ],
      column2: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' }
      ],
      column3: {
        Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
        Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas']
      },
      toastContent: (value, index) => `Value: ${value}, Index：${index}`
    }
  },

  data() {
    return {
      showPicker: false,
      fieldValue: ''
    };
  },

  computed: {
    columns() {
      const column = this.$t('column3');
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ];
    }
  },

  methods: {
    onChange1(picker, value, index) {
      this.$toast(this.$t('toastContent', value, index));
    },

    onChange2(picker, values) {
      picker.setColumnValues(1, this.$t('column3')[values[0]]);
    },

    onConfirm(value, index) {
      this.$toast(this.$t('toastContent', value, index));
    },

    onCancel() {
      this.$toast(this.$t('cancel'));
    },

    onClickField() {
      this.showPicker = true;
    },

    onConfirm2(value) {
      this.showPicker = false;
      this.fieldValue = value;
    },

    onCancel2() {
      this.showPicker = false;
    }
  }
};
</script>
