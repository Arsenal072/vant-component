<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-field v-model="value" :placeholder="$t('placeholder')" />
        <van-field
          v-model="defaultValue"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
        />
        <van-field
          v-model="defaultValue"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
          input-align="left"
        />
        <van-field
          v-model="defaultValue"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
          input-align="center"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-cell-group>
        <van-field
          v-model="username"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
          required
          clearable
          :label-width="100"
        />
        <van-field
          v-model="password"
          type="password"
          :label="$t('maxLabel')"
          :placeholder="$t('placeholder')"
          :label-width="100"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title6')">
      <van-cell-group>
        <van-field
          clearable
          v-model="sms"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
        >
          <template #text>{{ $t('how') }}</template>
        </van-field>
        <van-field
          center
          clearable
          v-model="sms"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
        >
          <template #button>
            <van-button type="primary" size="middle" plain>
              {{
                $t('sendSMS')
              }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-cell-group>
        <van-field
          :value="$t('inputDisabled')"
          :label="$t('label')"
          right-icon="scan"
          :right-icon-size="19"
          disabled
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-cell-group>
        <van-field
          v-model="username2"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
          error
        />
        <van-field
          v-model="phone"
          :label="$t('label')"
          :placeholder="$t('placeholder')"
          :error-message="$t('error')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title7')">
      <van-cell-group>
        <van-field
          readonly
          is-link
          v-model="cardType"
          :label="$t('cardType')"
          :placeholder="$t('cardPlaceholder')"
          @click="$toast('cardList')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('textareaAutosize')">
      <van-cell-group>
        <van-field
          type="textarea"
          v-model="message"
          :label="$t('message')"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
          required
        />
      </van-cell-group>
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('showWordLimit')">
      <van-cell-group>
        <van-field
          type="textarea"
          v-model="message2"
          :label="$t('message')"
          :placeholder="$t('messagePlaceholder')"
          rows="2"
          autosize
          maxlength="50"
          show-word-limit
        />
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '标题',
      maxLabel: '标题最多六字',
      placeholder: '提示性文字',
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title6: '插槽用法',
      title7: '选择型输入框',
      message: '留言',
      how: '如何获取？',
      sendSMS: '获取验证码',
      cardType: '证件类型',
      showWordLimit: '显示字数统计',
      textareaAutosize: '高度自适应',
      cardPlaceholder: '请选择证件类型',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      error: '格式错误'
    },
    'en-US': {
      label: 'Label',
      maxLabel: 'MaxLabel',
      placeholder: 'Placeholder',
      title2: 'Custom Type',
      title3: 'Disabled',
      title4: 'Error Info',
      title6: 'Insert Slots',
      title7: 'Select Input',
      message: 'Message',
      how: 'how?',
      sendSMS: 'Send SMS',
      cardType: 'Card Type',
      showWordLimit: 'Show Word Limit',
      textareaAutosize: 'Auto Resize',
      cardPlaceholder: 'Select Card Type',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      error: 'Invalid value'
    }
  },

  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      message2: '',
      phone: '',
      cardType: '',
      defaultValue: '输入的文字'
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;
}
</style>
