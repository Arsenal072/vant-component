<template>
  <demo-section>
    <demo-block :title="$t('defaultFileIcon')">
      <ul class="margin-left20" style="width:375px;">
        <li
          v-for=" (item,index) in list"
          :key="index"
          class="inline-block margin-right30 margin-top20 text-align-center"
        >
          <van-file-icon :name="item.name" :size="item.size" />
          <div class="margin-top3">{{ item.name }}</div>
        </li>
      </ul>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      defaultFileIcon: '文件图标'
    },
    'en-US': {
      defaultFileIcon: 'file-icon'
    }
  },
  data() {
    return {
      list: [
        {
          size: 60,
          name: 'doc'
        },
        {
          size: 60,
          name: 'eps'
        },
        {
          size: 60,
          name: 'jpg'
        },
        {
          size: 60,
          name: 'mp4'
        },
        {
          size: 60,
          name: 'pdf'
        },
        {
          size: 60,
          name: 'png'
        },
        {
          size: 60,
          name: 'ppt'
        },
        {
          size: 60,
          name: 'psd'
        },
        {
          size: 60,
          name: 'qa'
        },
        {
          size: 60,
          name: 'rep'
        },
        {
          size: 60,
          name: 'xls'
        },
        {
          size: 60,
          name: 'zip'
        }
      ]
    };
  }
};
</script>
