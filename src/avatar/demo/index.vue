<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ul class="padding-left14">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="inline-block margin-right20 margin-top20 text-align-center"
        >
          <van-avatar
            :figure="item.figure"
            :size="item.size"
            :round="item.round"
            :background="item.background"
            :radius="item.radius"
          />
          <div class="margin-top5">figure:{{ index + 1 }}</div>
        </li>
      </ul>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {},
    'en-US': {}
  },
  data() {
    return {
      list: [
        {
          size: 100,
          figure: 1
        },
        {
          size: 100,
          figure: 2
        },
        {
          size: 100,
          figure: 3
        },
        {
          size: 100,
          figure: 4
        },
        {
          size: 100,
          figure: 5
        },
        {
          size: 100,
          figure: 6
        },
        {
          size: 100,
          figure: 7
        },
        {
          size: 100,
          figure: 8
        },
        {
          size: 100,
          figure: 9
          // round: true
        },
        {
          size: 100,
          figure: 10
          // background: 'red',
          // radius: 20
        },
        {
          size: 100,
          figure: 11
        },
        {
          size: 100,
          figure: 12
        },
        {
          size: 100,
          figure: 13
        },
        {
          size: 100,
          figure: 14
        },
        {
          size: 100,
          figure: 15
        },
        {
          size: 100,
          figure: 16
        },
        {
          size: 100,
          figure: 17
        },
        {
          size: 100,
          figure: 18
        }
      ]
    };
  }
};
</script>
