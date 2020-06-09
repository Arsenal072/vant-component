<template>
  <demo-section>
    <demo-block title="用法一">
      <van-doctor-card
        v-for="(item, index) in list1"
        :key="index"
        :avatar-offset-top="4"
        :avatar-figure="7"
        :avatar-size="68"
        :name="item.name"
        :title="item.title"
        :hospital="item.hospital"
        :department="item.department"
        :skill="item.skill"
        :score="item.score"
        :receive-num="item.receiveNum"
        show-online
        :online="item.online"
      >
        <div slot="corner" class="flex-align">
          <van-icon name="photo" color="#98B3DB" size="11" />
          <van-icon
            style="margin-left:10px"
            name="phone"
            color="#98B3DB"
            size="11"
          />
          <van-icon
            style="margin-left:10px"
            name="video"
            color="#98B3DB"
            size="14"
          />
        </div>
      </van-doctor-card>
    </demo-block>

    <demo-block title="用法二">
      <van-doctor-card
        v-for="(item, index) in list2"
        :key="index"
        :avatar-offset-top="4"
        :avatar-figure="7"
        :avatar-size="68"
        :avatar-radius="4"
        :name="item.name"
        :title="item.title"
        :hospital-level="item.hospitalLevel"
        :hospital="item.hospital"
        :department="item.department"
        :skill-tag="item.skillTag"
        :praise-num="item.praiseNum"
        :response-time="item.responseTime"
        :consult-num="item.consultNum"
        button-text="立即咨询"
        @clickCard="clickCard"
        @clickButton="clickButton"
      >
        <span slot="corner" class="bold van-color-warning">
          5.00
          <i class="font-size-3" style="margin-left: -5px">元</i>
        </span>
      </van-doctor-card>
    </demo-block>

    <demo-block title="用法三">
      <van-doctor-card
        v-for="(item, index) in list3"
        :key="index"
        :avatar-figure="7"
        :avatar-radius="3"
        :name="item.name"
        :title="item.title"
        :skill="item.skill"
      >
        <van-tag
          slot="corner"
          :type="item.status === '可约' ? 'success' : ''"
          round
          :color="item.status === '约满' ? '#999999' : ''"
        >
          {{ item.status }}
        </van-tag>
      </van-doctor-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          name: '吴化平',
          title: '副主任医师',
          hospital: '浙江大学附属第一医院',
          department: '脑肿瘤科',
          skill: '冠心病外科治疗、心脏不停跳下',
          receiveNum: 40,
          score: 4,
          online: true
        },
        {
          name: '秦英',
          title: '主任医师',
          hospital: '浙江省中医院',
          department: '呼吸内科',
          skill: '急性上呼吸道感染、肺炎、哮喘，急性上呼吸道感染、肺炎、哮喘',
          receiveNum: 86,
          score: 4.8,
          online: false
        }
      ],
      list2: [
        {
          name: '吴化平',
          title: '副主任医师',
          hospitalLevel: '三甲',
          hospital: '浙江大学附属第一医院',
          department: '脑肿瘤科',
          skillTag: ['冠心病', '心脏骤停伴随脑损伤', '心脏不停跳下'],
          praiseNum: 86,
          responseTime: '2分56秒',
          consultNum: 132
        },
        {
          name: '秦英',
          title: '主任医师',
          hospitalLevel: '三甲',
          hospital: '浙江省中医院',
          department: '呼吸内科',
          skillTag: [
            '冠心病',
            '心脏骤停伴随脑损伤',
            '心脏不停跳下',
            '冠心病',
            '心脏骤停伴随脑损伤',
            '心脏不停跳下'
          ],
          praiseNum: 27,
          responseTime: '10分03秒',
          consultNum: 318
        }
      ],
      list3: [
        {
          name: '吴化平',
          title: '副主任医师',
          skill: '冠心病外科治疗、心脏不停跳下',
          status: '可约'
        },
        {
          name: '秦英',
          title: '主任医师',
          skill: '急性上呼吸道感染、肺炎、哮喘，急性上呼吸道感染、肺炎、哮喘',
          status: '约满'
        }
      ]
    };
  },
  methods: {
    clickCard() {
      this.$toast('点击卡片');
    },
    clickButton() {
      this.$toast('点击按钮');
    }
  }
};
</script>
