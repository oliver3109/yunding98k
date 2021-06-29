/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
  };
  phoneInfoCallback?: WechatMiniprogram.GetSystemInfoSuccessCallback;
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

declare module 'md5';
