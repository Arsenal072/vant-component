<template>
  <demo-section>
    <demo-block title="type:1（默认）">
      <div>
        <van-text-box
          title="大标题"
          content="列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容"
        />
      </div>
      <div
        class="padding-top16 padding-bottom8 padding-left14 van-bgcolor-white van-color-text-secondary font-size0 line-height1_5"
      >
        列表小标题
      </div>
    </demo-block>
    <demo-block title="type:2">
      <van-text-box
        cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
        type="2"
        title="标题"
        content="辅助性文字描述辅助性文字辅助性文字描述辅助性文字"
        sub-content="456789"
      >
        <div slot="tip" class="font-size-2 van-color-text-secondary flex-align">
          <van-icon name="browsing-history" color="#C9C9C9" />
          <span class="margin-left4">345</span>
        </div>
      </van-text-box>
      <van-text-box
        cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
        type="2"
        title="标题内容最长的极限文字字数是标题内容最长的极限文字字数是"
        content="辅助性文字描述辅助性文字辅助性文字描述辅助性文字"
        sub-content="456789"
      >
        <div slot="tip" class="font-size-2 van-color-text-secondary flex-align">
          <van-icon name="browsing-history" color="#C9C9C9" />
          <span class="margin-left4">345</span>
        </div>
      </van-text-box>
    </demo-block>
    <demo-block title="type:3">
      <van-text-box
        cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
        type="3"
        title="标题"
        sub-title="副标题"
        tip="提示文字"
        content="描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字描述性文极限描述性文字描述性文字描述性文字"
      />
    </demo-block>
    <demo-block title="type:4">
      <van-text-box
        cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
        type="4"
        title="标题内容"
        :sub-title="[
          '头孢地尼胶囊 (0.1g×14片)',
          '(0.5+0.5俊特)亚胺培南西司他丁针0.5克*1瓶'
        ]"
        :sub-content="[
          [
            '发药数量: 1盒',
            '单次剂量: 1ml',
            '给药方式: 皮下注射',
            '频率: Q12HJY',
            '用药天数: 2'
          ],
          [
            '发药数量: 1盒',
            '单次剂量: 1ml',
            '给药方式: 皮下注射',
            '频率: Q12HJY',
            '用药天数: 2'
          ]
        ]"
      />
    </demo-block>
    <demo-block title="type:5">
      <van-text-box
        cover="https://img.yzcdn.cn/vant/t-thirt.jpg"
        type="5"
        title="标题"
        sub-title="辅助性文字"
        tip="提示文字"
        content="辅助性文字"
      >
        <template>
          <van-divider dashed />
          <van-row type="flex" justify="end" class="padding8X padding-right14">
            <van-button type="warning" size="small">辅助按钮</van-button>
          </van-row>
        </template>
      </van-text-box>
    </demo-block>
  </demo-section>
</template>
