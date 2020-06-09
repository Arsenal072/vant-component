<template>
  <demo-section>
    <van-schedule
      :data="data"
      data-key="text"
      prefix="周"
      lighter="停诊"
      :opacity="['约满', '停诊']"
      start="2020/1/1"
      date-format="mm.dd"
      :label="['上午', '下午', '晚上']"
      title="排班信息"
      class="margin-top8"
    />
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        [
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '' }
        ],
        [
          { text: '' },
          { text: '约满' },
          { text: '' },
          { text: '挂号' },
          { text: '' },
          { text: '' },
          { text: '' }
        ],
        [
          { text: '' },
          { text: '停诊' },
          { text: '' },
          { text: '' },
          { text: '' },
          { text: '停诊' },
          { text: '停诊' }
        ]
      ]
    };
  }
};
</script>
