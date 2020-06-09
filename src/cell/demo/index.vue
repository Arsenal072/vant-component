<template>
  <demo-section class="demo-cell">
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-cell :title="$t('title')" :value="$t('content')" />
        <van-cell :title="$t('title')" :value="$t('content')" :label="$t('desc')" />
        <van-cell :title="$t('title')" :label="$t('desc')" is-link center />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <van-cell-group>
        <van-cell :title="$t('title')" is-link />
        <van-cell :title="$t('title')" is-link :value="$t('content')" />
        <van-cell :title="$t('title')" is-link :value="$t('overcontent')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('reverseColor')">
      <van-cell-group>
        <van-cell :title="$t('title')" :value="$t('content')" />
        <van-cell :title="$t('title')" :value="$t('content')" reverse-color />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <van-cell :title="$t('title')" :value="$t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('valueOnly')">
      <van-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('router')">
      <van-cell-group>
        <van-cell :title="$t('urlRoute')" is-link url="/vant/mobile.html" />
        <van-cell :title="$t('vueRoute')" is-link to="index" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('cellGroup')">
      <van-cell-group :title="$t('title')">
        <van-cell>
          <van-radio-group v-model="radio2" class="flex">
            <van-radio name="1">{{ $t('content') }}1</van-radio>
            <van-radio name="2" class="margin-left30">{{ $t('content') }}2</van-radio>
            <van-radio name="3" class="margin-left30">{{ $t('content') }}3</van-radio>
          </van-radio-group>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="margin-top20">
        <van-cell :title="$t('title')" reverse-color>
          <van-radio-group v-model="radio3" class="flex">
            <van-radio name="1">{{ $t('content') }}1</van-radio>
            <van-radio name="2" class="margin-left30">{{ $t('content') }}2</van-radio>
          </van-radio-group>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="margin-top20">
        <van-cell :title="$t('title')" clickable @click="radio4 = 1">
          <template #right-icon>
            <van-icon v-show="radio4 === 1" name="success" :size="16" color="#32ae57" />
          </template>
        </van-cell>
        <van-cell :title="$t('title')" clickable @click="radio4 = 2">
          <template #right-icon>
            <van-icon v-show="radio4 === 2" name="success" :size="16" color="#32ae57" />
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="margin-top20">
        <van-radio-group v-model="radio">
          <van-cell :title="$t('title')" clickable @click="radio = 1">
            <van-radio slot="right-icon" :name="1" />
          </van-cell>
          <van-cell :title="$t('title')" clickable @click="radio = 2">
            <van-radio slot="right-icon" :name="2" />
          </van-cell>
        </van-radio-group>
      </van-cell-group>

      <van-cell-group class="margin-top20">
        <van-cell :title="$t('title')" cell-class="switch-cell">
          <van-switch slot="right-icon" v-model="checked" />
        </van-cell>
        <van-cell :title="$t('title')" cell-class="switch-cell">
          <van-switch slot="right-icon" v-model="checked1" />
        </van-cell>
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('slotUsage')">
      <div>
        <van-cell title="悬赏金 (元)" :label="$t('content2')">
          <template #right-icon>
            <van-stepper
              v-model="stepper1"
              button-size="24px"
              input-width="38px"
              class="absolute right14"
            />
          </template>
        </van-cell>
      </div>

      <div class="margin-top20">
        <van-cell :value="$t('content')" is-link>
          <template #title>
            <span class="margin-right5 vertical-middle">{{ $t('title') }}</span>
            <van-tag type="danger">{{ $t('tag') }}</van-tag>
          </template>
        </van-cell>
      </div>

      <van-cell-group class="margin-top20">
        <van-cell value-class="flex-align-end">
          <template #title>
            <div class="flex-align">
              <span class="font-size3 bold">大标题</span>
              <span class="margin-left10 font-size1 van-color-text-regular">/ 副标题</span>
              <van-tag type="success" single class="margin-left12">专</van-tag>
            </div>
          </template>
          <template #label>
            <span class="font-size0 van-color-text-assist">辅助性文字</span>
          </template>
          <template>
            <span class="font-size2 van-color-warning bold">状态提示</span>
          </template>
        </van-cell>
        <van-cell value-class="flex-align-end">
          <template #title>
            <span class="font-size3 bold">大标题</span>
            <span class="margin-left10 font-size1 van-color-text-regular">/ 副标题</span>
          </template>
          <template #label>
            <span class="font-size0 van-color-text-assist">辅助性文字</span>
          </template>
          <template>
            <span class="font-size2 van-color-text-placeholder bold">状态提示</span>
          </template>
        </van-cell>
      </van-cell-group>

      <div class="margin-top20">
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          less-spacing
          title-style="flex: 5"
          title-class="van-multi-ellipsis--l2"
          label-class="font-size0 van-color-text-secondary"
          value-class="margin-left38 flex-align-spacebetween"
        >
          <template #title>
            <span class="van-multi-ellipsis--l2">{{ item.title }}</span>
          </template>
          <template #label>{{ item.label }}</template>
          <template>
            <span class="font-size1 van-color-text-assist">
              {{
              item.unit
              }}
            </span>
            <span class="font-size2 van-color-text-assist">
              {{ item.price }}
              <i class="font-size-2">元</i>
            </span>
          </template>
        </van-cell>
      </div>

      <demo-block :title="$t('footer')">
        <van-cell-group class="padding20X">
          <van-cell
            cell-class="van-bgcolor-background-color"
            value-class="line-height32 text-align-center"
            :border="false"
          >
            <span class="font-size-2 van-color-text-placeholder">- 技术支持：杭州卓健信息科技有限公司 -</span>
          </van-cell>

          <van-cell
            cell-class="margin-top12 van-bgcolor-background-color"
            value-class="line-height32 text-align-center"
            :border="false"
          >
            <span class="font-size0 van-color-text-secondary">没有更多了</span>
          </van-cell>

          <van-cell
            cell-class="margin-top12 van-bgcolor-background-color"
            value-class="line-height32 text-align-center font-size-2 van-color-text-placeholder"
            :border="false"
          >
            <span class="font-size-2 van-color-text-secondary">
              客服电话：
              <span class="van-color-success">400 848 1766</span>
            </span>
          </van-cell>
        </van-cell-group>
      </demo-block>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标题',
      overcontent: '内容的极限情况内容的极限情况内容的极限情况内容的极限情况',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      content2: '增加悬赏金可提高医生积极性、响应更快、服务更好',
      reverseColor: '颜色反转',
      footer: '页脚',
      cellGroup: '组合使用'
    },
    'en-US': {
      title: 'title',
      overcontent: 'contentcontentcontentxontentcontentcontentcontent',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      reverseColor: 'Reverse Color',
      footer: 'footer',
      cellGroup: 'Cell Group'
    }
  },
  data() {
    return {
      checked: true,
      checked1: false,
      stepper1: 0,
      radio: 1,
      radio2: 1,
      radio3: 1,
      radio4: 1,
      list: [
        {
          title: '标题',
          label: '辅助性文字',
          unit: '单位',
          price: '50.00'
        },
        {
          title:
            '标题可以换行的极限情况标题可以换行标题可以换行的极限情况标题可以换行',
          label: '辅助性文字',
          unit: '单位',
          price: '750.00'
        }
      ]
    };
  }
};
</script>
