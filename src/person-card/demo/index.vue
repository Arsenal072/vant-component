<template>
  <demo-section>
    <demo-block>
      <van-person-card
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :sub-title="item.subTitle"
        :tag="item.tag"
        :tag-type="item.tag === '待审核'?'warning':item.tag === '已拒绝'?'danger':'default'"
        :corner="item.time"
        :content="item.content"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '标题',
          subTitle: '信息 信息',
          tag: '待审核',
          time: '15:30',
          content: ['辅助性文字', '辅助性文字']
        },
        {
          title: '标题',
          subTitle: '信息 信息',
          tag: '已通过',
          time: '15:30',
          content: ['辅助性文字', '辅助性文字']
        },
        {
          title: '标题',
          subTitle: '信息 信息',
          tag: '已拒绝',
          time: '15:30',
          content:
            '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        }
      ]
    };
  }
};
</script>
