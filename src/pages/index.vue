<template>
  <div class="container">
    <div class="tw-bg-blue-400">{{ test }}</div>

    <div class="userinfo">
      <image class="userinfo-avatar" src="{{ userInfo.avatarUrl }}" background-size="cover" />
      <div class="userinfo-nickname">{{ userInfo.nickName }}</div>
    </div>
  </div>
</template>

<config>
{
    navigationBarTitleText: 'WePY 2.0 Feature Demo',
    usingComponents: {
    }
}
</config>

<script>
import wepy from '@wepy/core';

wepy.page({
  config: {
    navigationBarTitleText: 'test',
  },

  data: {
    userInfo: {
      nickName: '加载中...',
    },
  },

  computed: {},

  methods: {},

  created() {
    wx.getUserInfo({
      success(res) {
        self.userInfo = res.userInfo;
      },
    });
  },
});
</script>
