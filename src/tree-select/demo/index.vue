<template>
  <demo-section>
    <demo-block :title="$t('Usage')">
      <ul class="margin-bottom20">
        <van-tree-select
          :items="city1"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          arrow
        />
      </ul>
    </demo-block>
    <demo-block :title="$t('add')">
      <ul class="margin-bottom20">
        <van-tree-select
          :items="city2"
          :active-id.sync="activeId2"
          :main-active-index.sync="activeIndex2"
          arrow
        />
      </ul>
    </demo-block>
    <demo-block :title="$t('reverse')">
      <ul class="margin-bottom20">
        <div class="van-bgcolor-white width100" style="height:40px">
          <div class="line-height40">
            <van-icon
              name="location-o"
              class="van-color-primary margin-right8 margin-left18"
            />
            <span class="font-size0 margin-right4">杭州</span>
            <van-icon
              name="arrow"
              class="font-size-4 van-color-text-primary relative"
            />
          </div>
        </div>
        <van-tree-select
          :items="city3"
          :active-id.sync="activeId3"
          :main-active-index.sync="activeIndex3"
          reverse-border
          active-color
        />
      </ul>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <van-tree-select
        height="55vw"
        :items="simpleItems"
        :main-active-index.sync="activeIndex6"
      >
        <template slot="content">
          <van-image
            v-if="activeIndex6 === 0"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="activeIndex6 === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
      </van-tree-select>
    </demo-block>

    <demo-block :title="$t('showInfo')">
      <van-tree-select
        height="55vw"
        :items="infoItems"
        :active-id.sync="activeId5"
        :main-active-index.sync="activeIndex7"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import { zhCNData } from './data.zh-CN';
import { enUSData } from './data.en-US';
import { deepClone } from '../../utils/deep-clone';

export default {
  i18n: {
    'zh-CN': {
      Usage: '基础用法',
      add: '补充语及标签',
      reverse: '下划线反转',
      showInfo: '提示信息',
      radioMode: '单选模式',
      multipleMode: '多选模式',
      customContent: '自定义内容',
      data: zhCNData,
      dataSimple: [{ text: '分组 1' }, { text: '分组 2' }]
    },
    'en-US': {
      Usage: 'side',
      add: 'add',
      reverse: 'Reverse',
      showInfo: 'Show Info',
      radioMode: 'Radio Mode',
      multipleMode: 'Multiple Mode',
      customContent: 'Custom Content',
      data: enUSData,
      dataSimple: [{ text: 'Group 1' }, { text: 'Group 2' }]
    }
  },

  data() {
    return {
      activeId: 1,
      activeId3: 1,
      activeId2: 1,
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      city1: [
        {
          text: '选项',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1
              // disabled: true,
            },
            {
              text: '内容',
              id: 2
            },
            {
              text: '内容',
              id: 3
            }
          ]
        },
        {
          text: '选项',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1,
              disabled: false
            },
            {
              text: '内容',
              id: 2
            }
          ]
        }
      ],
      city2: [
        {
          text: '选项',
          add: '补充语',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1,
              // disabled: true,
              tag: { name: '标签', type: 'success' }
            },
            {
              text: '内容',
              id: 2,
              tag: { name: '标签', type: 'default' }
            }
          ]
        },
        {
          text: '选项',
          add: '补充语',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1,
              disabled: false,
              tag: { name: '标签', type: 'success' }
            },
            {
              text: '内容',
              id: 2,
              tag: { name: '标签', type: 'success' }
            }
          ]
        }
      ],
      city3: [
        {
          text: '热门地区',
          // add: '补充语',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '杭州',
              add: '25家',
              id: 1
            },
            {
              text: '上海',
              add: '25家',
              id: 2,
              disabled: true
            },
            {
              text: '北京',
              add: '25家',
              id: 3
            },
            {
              text: '广州',
              add: '25家',
              id: 4
            },
            {
              text: '深圳',
              add: '25家',
              id: 5
            },
            {
              text: '那然色布斯台音布拉格',
              add: '25家',
              id: 6
            }
          ]
        },
        {
          text: '湖南',
          add: '26家',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1,
              disabled: false
            },
            {
              text: '内容',
              id: 2
            }
          ]
        },
        {
          text: '天津',
          add: '56家',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1
            }
          ]
        },

        {
          text: '那然色布斯谷',
          add: '50家',
          dot: false,
          className: 'my-class',
          children: [
            {
              text: '内容',
              id: 1
            }
          ]
        }
      ],
      activeId4: 1,
      activeId5: 1,
      activeIds: [1, 2],
      activeIndex4: 0,
      activeIndex5: 0,
      activeIndex6: 0,
      activeIndex7: 0
    };
  },

  computed: {
    items() {
      return this.$t('data');
    },

    simpleItems() {
      return this.$t('dataSimple');
    },

    infoItems() {
      const data = deepClone(this.$t('data')).slice(0, 2);

      data[0].dot = true;
      data[1].info = 5;

      return data;
    }
  }
};
</script>
