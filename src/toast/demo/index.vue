<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button
        type="primary"
        :text="$t('title1')"
        @click="$toast($t('text'))"
      />
      <van-button
        type="primary"
        :text="$t('longTextButton')"
        @click="$toast($t('longText'))"
      />
      <van-button type="primary" :text="$t('html')" @click="showHtmlToast" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button
        type="primary"
        :text="$t('title2')"
        @click="showLoadingToast()"
      />
      <van-button
        type="primary"
        :text="$t('loadingType')"
        @click="showLoadingToast('circular')"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button type="info" :text="$t('success')" @click="showSuccessToast" />
      <van-button type="danger" :text="$t('fail')" @click="showFailToast" />
    </demo-block>

    <demo-block :title="$t('large')">
      <van-button type="primary" :text="$t('large')" @click="showLargeToast1" />
      <van-button type="primary" :text="$t('large')" @click="showLargeToast2" />
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('customIcon')">
      <van-button
        type="primary"
        :text="$t('customIcon')"
        @click="showIconToast"
      />
      <van-button
        type="primary"
        :text="$t('customImage')"
        @click="showImageToast"
      />
    </demo-block>

    <demo-block :title="$t('updateMessage')">
      <van-button
        type="primary"
        :text="$t('updateMessage')"
        @click="showCustomizedToast"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '文字提示',
      title2: '加载提示',
      title3: '成功/失败提示',
      success: '成功提示',
      fail: '失败提示',
      text: '提示内容提示内容提示内容',
      longText: '这是一条长文字提示，超过一定字数就会换行',
      text2: '成功文案',
      text3: '失败文案',
      customIcon: '自定义图标',
      customImage: '展示图片',
      text4: second => `倒计时 ${second} 秒`,
      longTextButton: '长文字提示',
      updateMessage: '动态更新提示',
      loadingType: '自定义加载图标',
      html: 'html提示',
      large: '大号提示'
    },
    'en-US': {
      title1: 'Text',
      title2: 'Loading',
      title3: 'Success/Fail',
      success: 'Success',
      fail: 'Fail',
      text: 'Some messages',
      longText:
        'This is a long message, text will wrap when over a certain length',
      text2: 'Success',
      text3: 'Fail',
      customIcon: 'Custom Icon',
      customImage: 'Custom Image',
      text4: second => `${second} seconds`,
      longTextButton: 'Long Text',
      updateMessage: 'Update Message',
      loadingType: 'Loading Type',
      html: 'Html',
      large: 'Large'
    }
  },

  methods: {
    showHtmlToast() {
      this.$toast({
        type: 'html',
        message: '<div>密码格式错误<br>须包含6-16位数字和大小写字母</div>'
      });
    },

    showLoadingToast(loadingType) {
      this.$toast.loading({
        message: this.$t('loading'),
        forbidClick: true,
        loadingType
      });
    },

    showSuccessToast() {
      this.$toast.success(this.$t('text2'));
    },

    showFailToast() {
      this.$toast.fail(this.$t('text3'));
    },

    showIconToast() {
      this.$toast({
        message: this.$t('customIcon'),
        icon: 'location-o'
      });
    },

    showImageToast() {
      this.$toast({
        message: this.$t('customImage'),
        icon: 'https://img.yzcdn.cn/vant/logo.png'
      });
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: this.$t('text4', 3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.$t('text4', second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    },

    showLargeToast1() {
      this.$toast({
        icon: 'voice',
        message: '手指上划 取消发送',
        size: 'large'
      });
    },

    showLargeToast2() {
      this.$toast({
        type: 'html',
        icon: 'cancel',
        message:
          '<div style="background: #A62E34;padding: 0 4px; border-radius: 2px">松开手指 取消发送</div>',
        size: 'large'
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-toast {
  background-color: @white;

  .van-button {
    margin-left: @padding-md;
    margin-bottom: @padding-md;
  }
}
</style>
