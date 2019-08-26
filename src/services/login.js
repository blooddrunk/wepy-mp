import Wepy from '@wepy/core';
import Toast from 'vant-weapp/lib/toast/toast';
import Dialog from 'vant-weapp/lib/dialog/dialog';

export const LOGIN_AUTH_KEY = 'LOGIN_AUTH_KEY';

const isDev = process.env.NODE_ENV === 'development';

const onLoginFailure = async error => {
  Toast.fail({
    message: '登录失败！',
    mask: true,
    forbidClick: true,
  });

  Wepy.wx.navigateTo({
    navigateTo: 'pages/index',
  });

  if (isDev) {
    console.error(error);
  }
};

const promptForUserInfo = async () => {
  await Dialog.alert({
    title: '提示',
    message: '不登录无法正常使用~\n\n请允许获取您的用户信息...',
    cancelText: '不了',
    confirmButtonText: '去允许',
  });

  try {
    const setting = await Wepy.wx.openSetting();
    if (setting.authSetting['scope.userInfo']) {
      const response = await Wepy.ex.getUserInfo();
      return response.userInfo;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default async () => {
  let code = '';

  // get login code
  try {
    const response = await Wepy.wx.login();
    code = response.code;
  } catch (error) {
    onLoginFailure(error);
  }

  let userInfo = null;

  // get userInfo
  try {
    const response = await Wepy.wx.getUserInfo();
    userInfo = response.userInfo;
  } catch (error) {
    userInfo = promptForUserInfo();
  }

  if (!userInfo) {
    onLoginFailure();
  }

  userInfo.code = code;

  // TODO: remote login
  Wepy.wx.setStorageSync(LOGIN_AUTH_KEY, 'get token from remote');

  return userInfo;
};
