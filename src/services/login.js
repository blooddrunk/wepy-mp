import wepy from '@wepy/core';
import Toast from 'vant-weapp/lib/toast/toast';
import Dialog from 'vant-weapp/lib/dialog/dialog';

export const LOGIN_AUTH_KEY = 'LOGIN_AUTH_KEY';

const isDev = process.env.NODE_ENV === 'development';

const onLoginFailure = async (error, context) => {
  Toast.fail({
    context,
    message: '登录失败！',
    mask: true,
    forbidClick: true,
  });

  if (isDev) {
    console.error(error);
  }
};

const promptForUserInfo = async context => {
  await Dialog.alert({
    context,
    title: '提示',
    message: '不登录无法正常使用~\n\n请允许获取您的用户信息...',
    cancelText: '不了',
    confirmButtonText: '去允许',
  });

  try {
    const setting = await wepy.wx.openSetting();
    if (setting.authSetting['scope.userInfo']) {
      const response = await wepy.ex.getUserInfo();
      return response.userInfo;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default async context => {
  wepy.wx.removeStorageSync(LOGIN_AUTH_KEY);

  let code = '';

  // get login code
  try {
    const response = await wepy.wx.login();
    code = response.code;
  } catch (error) {
    onLoginFailure(error, context);
  }

  let userInfo = null;

  // get userInfo
  try {
    const response = await wepy.wx.getUserInfo();
    userInfo = response.userInfo;
  } catch (error) {
    userInfo = promptForUserInfo(context);
  }

  if (!userInfo) {
    onLoginFailure(new Error('用户未授权'), context);
  }

  userInfo.code = code;

  // TODO: remote login
  wepy.wx.setStorageSync(LOGIN_AUTH_KEY, 'get token from remote');

  return userInfo;
};
