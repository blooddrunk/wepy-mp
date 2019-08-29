<config>
{
    pages: [
      'pages/welcome',
      'pages/login',
      'pages/user-home',
      'pages/index'
    ],
    window: {
      navigationBarTitleText: '小程序',
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#3d20d0',
      navigationBarTextStyle: 'white'
    }
}
</config>

<script>
import wepy from '@wepy/core';
import promisify from '@wepy/use-promisify';
import vuex from '@wepy/x';
import { plugin } from '@/services';

wepy.use(promisify);
wepy.use(vuex);
wepy.use(plugin);

wepy.app({
  hooks: {},

  onLaunch() {},

  methods: {},
});
</script>

<style lang="postcss">
@import 'vant-weapp/lib/common/index.wxss';

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
