<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-uploader v-model="fileList0" :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('preview')">
      <van-uploader v-model="fileList1" multiple :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('maxCount')">
      <van-uploader
        v-model="fileList2"
        multiple
        :max-count="9"
        title="标题内容"
        description="(标题说明)"
        tip="文字提示文字提示文字提示文字提示"
        :after-read="afterRead"
      />
    </demo-block>

    <demo-block :title="$t('beforeRead')">
      <van-uploader v-model="fileList3" multiple :before-read="beforeRead" :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('progress')">
      <van-uploader
        v-model="fileList6"
        multiple
        progress
        :progress-interval="500"
        :after-read="afterRead"
      />
    </demo-block>

    <demo-block :title="$t('fail')">
      <van-uploader
        v-model="fileList4"
        multiple
        progress
        :max-count="9"
        title="标题内容"
        description="(标题说明)"
        :after-read="afterRead1"
      />
    </demo-block>

    <demo-block :title="$t('async')">
      <van-uploader v-model="fileList5" multiple async />
    </demo-block>

    <demo-block :title="$t('uploadStyle')">
      <van-uploader>
        <van-button type="primary" icon="photo">
          {{
          this.$t('upload')
          }}
        </van-button>
      </van-uploader>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      upload: '上传文件',
      preview: '文件预览',
      maxCount: '限制上传数量',
      beforeRead: '上传前校验',
      uploadStyle: '自定义上传样式',
      invalidType: '请上传 jpg 格式图片',
      fail: '上传失败&重新上传',
      async: '异步上传',
      progress: '上传进度'
    },
    'en-US': {
      upload: 'Upload File',
      preview: 'Preview File',
      maxCount: 'Max Count',
      beforeRead: 'Before Read',
      uploadStyle: 'Upload Style',
      invalidType: 'Please upload an image in jpg format',
      fail: 'Uplload Fail & Reupload',
      async: 'Async Loading',
      progress: 'Upload Progress'
    }
  },

  data() {
    return {
      fileList0: [],
      fileList1: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' }
      ],
      fileList2: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
        { url: 'https://img.yzcdn.cn/vant/sand.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
        { url: 'https://img.yzcdn.cn/vant/sand.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
        { url: 'https://img.yzcdn.cn/vant/sand.jpg' }
      ],
      fileList3: [],
      fileList4: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg', status: 'fail' }
      ],
      fileList5: [],
      fileList6: []
    };
  },

  methods: {
    beforeRead(files) {
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (files[i].type !== 'image/jpeg') {
          this.$toast(this.$t('invalidType'));
          return false;
        }
      }

      return true;
    },

    afterRead(files, detail) {
      console.log(files, detail);
      files.forEach(element => {
        setTimeout(() => {
          element.status = null;
        }, 2000);
      });
    },

    afterRead1(files, detail) {
      console.log(files, detail);
      files.forEach(element => {
        setTimeout(() => {
          element.status = detail === 'reupload' ? null : 'fail';
        }, 4000);
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-uploader {
  background-color: @white;
}
</style>
