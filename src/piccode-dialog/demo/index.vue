<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="margin-left20">
        <van-button type="primary" @click="show = true">验证码</van-button>

        <van-piccode-dialog
          :show="show"
          :title="$t('title')"
          :pic="pic"
          :value="value"
          :error-info="errorInfo"
          @input="onInput"
          @delete="onDelete"
          @focus="onFocus"
          @check="checked"
          @refresh="refresh"
          @close="close"
        />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import img from '../../../assets/images/other/code-img.gif';

export default {
  i18n: {
    'zh-CN': { title: '请输入图形验证码' },
    'en-US': { title: 'input code' }
  },
  data() {
    return {
      show: false,
      pic: img,
      value: '',
      errorInfo: '',
      length: 4
    };
  },

  methods: {
    onInput(v) {
      if (this.value.length <= this.length) {
        this.value = (this.value + v).slice(0, this.length);
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onFocus() {
      console.log('focus');
    },
    checked(v) {
      if (v === '2263') {
        this.show = false;
        this.value = '';
      } else {
        this.errorInfo = '验证码错误，请重新输入';
      }
    },
    refresh() {
      this.pic = img;
      this.value = '';
    },
    close() {
      this.show = false;
      this.value = '';
    }
  }
};
</script>
