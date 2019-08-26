<config>
{
    pages: [
      'pages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
}
</config>

<script>
import wepy from '@wepy/core';
import eventHub from './common/eventHub';
import vuex from '@wepy/x';

wepy.use(vuex);

wepy.app({
  hooks: {},

  onLaunch() {},

  methods: {},
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<style lang="postcss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
