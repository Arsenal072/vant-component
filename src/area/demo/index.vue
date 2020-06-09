<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-area :area-list="$t('areaList')" :title="$t('title5')" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-area :area-list="$t('areaList')" :value="value" :title="$t('title5')" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-area :area-list="$t('areaList')" :columns-num="2" :title="$t('title6')" />
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-area
        :area-list="$t('areaList')"
        :columns-placeholder="$t('columnsPlaceholder')"
        :title="$t('title')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from './area';
import AreaListEn from './area-en';

export default {
  i18n: {
    'zh-CN': {
      title2: '选中省市区',
      title5: '请选择省市区',
      title6: '请选择省市',
      title3: '配置显示列',
      title4: '配置列占位提示文字',
      columnsPlaceholder: ['请选择', '请选择', '请选择'],
      areaList: AreaList
    },
    'en-US': {
      title2: 'Initial Value',
      title5: 'Province,city and area',
      title6: 'Province and city',
      title3: 'Columns Number',
      title4: 'Columns Placeholder',
      columnsPlaceholder: ['Choose', 'Choose', 'Choose'],
      areaList: AreaListEn
    }
  },

  data() {
    return {
      value: '330302'
    };
  }
};
</script>
