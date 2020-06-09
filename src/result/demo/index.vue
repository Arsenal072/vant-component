<template>
  <demo-section>
    <demo-block title="基础用法">
      <van-result type="success" />
      <van-result type="fail" tip="提示语最多两行提示语最多两行提示语最多提示语最多两行" class="margin-top15" />
    </demo-block>
    <demo-block title="行内样式">
      <van-result type="success" text-color="#00982D" inline />
      <van-result type="fail" text-color="#FF5F4E" inline class="margin-top15" />
      <van-result
        type="success"
        tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
        text-color="#00982D"
        inline
        class="margin-top15"
      />
      <van-result
        type="fail"
        tip="提示语最多两行提示语最多两行提示语最多提示语最多两行"
        text-color="#FF5F4E"
        inline
        class="margin-top15"
      />
    </demo-block>
    <demo-block title="自定义图标">
      <van-result icon="star" color="#dfec12" tip="提示提示提示提示提示提示提示提示" title="标题" />
    </demo-block>
    <demo-block title="插槽用法">
      <van-result type="success">
        <p class="margin-top8 font-size0 van-color-text-assist line-height20">
          提示文字
          <span class="van-color-warning">重点内容</span> 等等等
        </p>
      </van-result>
    </demo-block>
  </demo-section>
</template>
