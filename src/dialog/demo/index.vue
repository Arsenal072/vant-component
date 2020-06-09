<template>
  <demo-section>
    <demo-block :title="$t('alert1')">
      <van-button type="primary" size="middle" @click="onClickAlert">
        {{ $t('alert1') }}
      </van-button>
      <van-button type="primary" size="middle" @click="onClickAlert2">
        {{ $t('alert2') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('confirm')">
      <van-button type="primary" size="middle" @click="onClickConfirm">
        {{ $t('confirm1') }}
      </van-button>
      <van-button type="primary" size="middle" @click="onClickConfirm2">
        {{ $t('confirm2') }}
      </van-button>
    </demo-block>
    <demo-block :title="$t('success')">
      <van-button type="primary" size="middle" @click="onClickSuccess">
        {{ $t('successful') }}
      </van-button>
      <van-button type="primary" size="middle" @click="onClickFail">
        {{ $t('fail') }}
      </van-button>
    </demo-block>
    <demo-block :title="$t('asyncClose')">
      <van-button type="primary" size="middle" @click="onClickAsyncClose">
        {{ $t('asyncClose') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('componentCall')">
      <van-button type="primary" size="middle" @click="show = true">
        {{ $t('componentCall') }}
      </van-button>
      <van-dialog
        v-model="show"
        :title="$t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <img :src="image" />
      </van-dialog>

      <van-button type="primary" size="middle" @click="show1 = true">
        步进器
      </van-button>
      <van-dialog
        v-model="show1"
        :title="$t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <van-stepper v-model="stepper1" class="text-align-center margin34X" />
      </van-dialog>

      <van-button type="primary" size="middle" @click="show2 = true">
        输入框
      </van-button>
      <van-dialog
        v-model="show2"
        :title="$t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <van-field
          type="textarea"
          v-model="message"
          rows="2"
          autosize
          autofocus
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          class="message"
        />
      </van-dialog>

      <van-button
        type="primary"
        size="middle"
        @click="show3 = true"
        class="margin-top20"
      >
        提现金额
      </van-button>
      <van-dialog
        v-model="show3"
        :title="$t('submit')"
        show-cancel-button
        :lazy-render="false"
      >
        <div class="flex-align withdraw">
          <div class="font-size18">￥</div>
          <van-field type="number" v-model="value" autofocus />
          <van-icon
            name="clear"
            class="van-color-text-placeholder"
            @click="clearMoney"
          />
        </div>
      </van-dialog>

      <van-button type="primary" size="middle" @click="showBottom = true">
        排班
      </van-button>
      <van-popup v-model="showBottom" position="bottom">
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
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      alert1: '提示弹窗',
      alert2: '提示弹窗（无标题）',
      confirm1: '确认弹窗',
      confirm2: '弹窗（无标题）',
      success: '成功失败弹窗',
      successful: '成功提示',
      fail: '失败提示',
      asyncClose: '异步关闭',
      componentCall: '组件调用',
      content: '代码是写来给人看，能在机器上运行',
      submit: '提现金额'
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm1: 'Confirm dialog',
      confirm2: 'Confirm without title',
      success: 'success/fail',
      successful: 'success',
      fail: 'fail',
      asyncClose: 'Async Close',
      componentCall: 'Component Call',
      content:
        'The code is written to show people that it can run on the machine',
      submit: 'submit'
    }
  },

  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      showBottom: false,
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
      ],
      currentRate: 0,
      stepper1: 1,
      message: '',
      value: '',
      image: 'https://img.yzcdn.cn/vant/apple-3.jpg'
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.$t('title'),
        message: this.$t('content'),
        confirmButtonText: '主要操作'
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content'),
        confirmButtonText: '主要操作',
        cancelButtonText: '次要操作'
      });
    },
    onClickConfirm2() {
      this.$dialog.confirm({
        message: this.$t('content')
      });
    },
    onClickSuccess() {
      this.$dialog.alert({
        type: 'success',
        title: '成功提示',
        message: this.$t('content')
      });
    },
    onClickFail() {
      this.$dialog.alert({
        type: 'danger',
        title: '失败提示',
        message: this.$t('content')
      });
    },
    onClickAsyncClose() {
      function beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content'),
        beforeClose
      });
    },
    clearMoney() {
      this.value = '';
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-dialog {
  background-color: @white;

  .van-doc-demo-block > .van-button {
    margin-left: @padding-md;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
  .message {
    .van-field {
      border: 1px solid #e2e2e2;
      width: 90%;
      margin: 12px auto 28px auto;
      background: #f6f6f6;
    }
  }
  .withdraw {
    margin: 20px 20px 27px 28px;
    .van-cell {
      font-size: 38px;
      width: 80%;
      padding: 18px 0 16px 9px;
    }
    .van-field__field-wrap:not(:last-child) .van-cell::after {
      border-bottom: 0;
    }
  }
}
</style>
