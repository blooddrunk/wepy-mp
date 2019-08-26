<template>
  <div class="container">
    <div class="tw-bg-blue-400">{{ test }}</div>

    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" />
      <div class="userinfo-nickname">{{ userInfo.nickName }}</div>
    </div>

    <van-button type="warning" @tap="handleClick">TEST</van-button>

    <van-toast id="van-toast"></van-toast>
    <van-toast id="van-dialog"></van-toast>
  </div>
</template>

<config>
{
  navigationBarTitleText: 'WePY 2.0 Feature Demo',
  usingComponents: {
    'van-button': 'module:vant-weapp/lib/button',
    'van-toast': 'module:vant-weapp/lib/toast',
    'van-dialog': 'module:vant-weapp/lib/dialog',
  }
}
</config>

<script>
import wepy from '@wepy/core';
import Toast from 'vant-weapp/lib/toast/toast';

import login from '@/services/login';
import request from '@/services/request';

wepy.page({
  data: {
    userInfo: {
      nickName: '加载中...',
    },
  },

  computed: {},

  methods: {
    handleClick() {
      Toast.success({
        message: 'Clicked!',
      });
    },
  },

  async created() {
    this.userInfo = await login();
  },

  async ready() {
    request({
      url: 'https://hn.algolia.com/api/v1/search',
      __needAuth: false,
      transformData: ({ hits }) => hits,
    });
  },
});
</script>
