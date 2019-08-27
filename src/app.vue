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
