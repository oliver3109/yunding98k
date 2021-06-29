import { globalDataInterface } from '../core/interfaces';

const globalData: globalDataInterface = {
  gapTime: null,
  lastTime: null,
  timeOut: null
};

// 网络状态
const networkStatus = async () => {
  return new Promise<WechatMiniprogram.GetNetworkTypeSuccessCallbackResult>(
    (resolve) => {
      wx.getNetworkType({
        success(res) {
          resolve(res);
        }
      });
    }
  );
};

// 授权信息
const authSetting = async () => {
  return new Promise((resolve) => {
    wx.getSetting({
      success(res) {
        resolve(res.authSetting);
      }
    });
  });
};

// 系统信息
const getSystemInfo = async () => {
  return new Promise((resolve) => {
    wx.getSystemInfo({
      success(res) {
        resolve(res);
      }
    });
  });
};

// 节流
const throttle = (that: any, then: Function) => {
  if (globalData.gapTime == null) {
    globalData.gapTime = 500;
  }
  function t(): void {
    const nowTime = +new Date();
    if (
      nowTime - globalData.lastTime > globalData.gapTime ||
      !globalData.lastTime
    ) {
      wx.vibrateShort();
      // eslint-disable-next-line prefer-rest-params
      then.call(that, arguments);
      globalData.lastTime = nowTime;
    }
  }
  return t();
};

// rpx转换px
const rpxToPx = (num: number) => {
  return num / (750 / wx.getSystemInfoSync().windowWidth);
};

// px转换rpx
const pxToRpx = (num: number) => {
  return num * (750 / wx.getSystemInfoSync().windowWidth);
};

// 防抖
const deBounce = (that: any, then: Function) => {
  return function () {
    clearTimeout(globalData.timeOut);
    globalData.timeOut = setTimeout(() => {
      // eslint-disable-next-line prefer-rest-params
      const args = arguments;
      then.call(that, args);
    }, 1000);
  };
};

// 是否到顶
const sticky = (that: any, top: number, then: (r: boolean) => void) => {
  let sticky = false;
  if (
    top - that.app.globalData.phoneInfo.headHeight <=
    that.app.globalData.phoneInfo.headHeight -
      that.app.globalData.phoneInfo.statusBarHeight
  ) {
    sticky = true;
  } else {
    sticky = false;
  }
  then(sticky);
};

type TSFuncton<T, N, S> = (arg0: T, arg1: N, arg2: S) => void;
export interface ICommonUtil {
  networkStatus: () => Promise<WechatMiniprogram.GetNetworkTypeSuccessCallbackResult>;
  authSetting: Function;
  rpxToPx: Function;
  pxToRpx: Function;
  getSystemInfo: Function;
  throttle: Function;
  deBounce: Function;
  sticky: TSFuncton<any, number, (r: boolean) => void>;
}

export default {
  networkStatus,
  authSetting,
  rpxToPx,
  pxToRpx,
  getSystemInfo,
  throttle,
  deBounce,
  sticky
};
