<template>
  <div class="user-home">
    <div
      class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-py-6 tw-bg-cover tw-text-white"
      style="height: 30vh; background-image: url(/static/images/bg.jpg);"
    >
      <div class="tw-text-sm">账户折合资产（油贝）</div>
      <div class="tw-p-4 tw-text-5xl">{{ propertyNum }}</div>
      <div class="tw-flex tw-items-center tw-px-4 tw-text-base">
        <div class="tw-px-4 with-border-right">{{ displayUserID }}</div>
        <div class="tw-px-4">{{ displayBelong }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import wepy from '@wepy/core';

wepy.page({
  data: {
    propertyNum: '12345.00',
    userID: '1234',
    belong: '突破华东一级经销商',
  },

  computed: {
    displayUserID() {
      return `ID: ${this.userID}`;
    },

    displayBelong() {
      return `归属: ${this.belong}`;
    },
  },

  onShareAppMessage() {
    return {
      path: 'welcome',
    };
  },
});
</script>

<style lang="scss">
@mixin hairline-border-right($color: white) {
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: $color;

  @media (min-resolution: 2dppx) {
    border-right-width: 0.5px;
  }

  @media (min-resolution: 3dppx) {
    border-right-width: 0.33333333px;
  }

  @media (min-resolution: 4dppx) {
    border-right-width: 0.25px;
  }
}

.user-home {
  .with-border-right {
    @include hairline-border-right;
  }
}
</style>
