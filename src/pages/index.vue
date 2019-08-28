<template>
  <div class="container">
    <div class="tw-bg-blue-400">{{ test }}</div>

    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" />
      <div class="userinfo-nickname">{{ userInfo.nickName }}</div>
    </div>

    <van-button type="warning" @tap="handleClick">TEST</van-button>

    <simple-list :items="asyncData.list.value" :loading="asyncData.list.loading"></simple-list>

    <van-toast id="van-toast"></van-toast>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<config>
{
  navigationBarTitleText: '小程序',
  usingComponents: {
    'van-button': 'module:vant-weapp/lib/button',
    'van-toast': 'module:vant-weapp/lib/toast',
    'van-dialog': 'module:vant-weapp/lib/dialog',
    'simple-list': '~@/components/simple-list'
  }
}
</config>

<script>
import wepy from '@wepy/core';
import Toast from 'vant-weapp/lib/toast/toast';

import login from '@/services/login';
import withAsyncData from '@/mixins/withAsyncData';

wepy.page({
  mixins: [withAsyncData(['list'])],

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
    this.userInfo = await login(this.$wx);
  },

  async ready() {
    this.fetchAsyncData('list', {
      url: 'https://hn.algolia.com/api/v1/search',
      __needAuth: false,
      transformData: ({ hits }) => hits,
    });
  },
});
</script>
