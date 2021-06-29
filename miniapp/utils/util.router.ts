const errorHandle = () => {
  wx.showToast({
    icon: 'none',
    title: '该功能暂未开放',
    duration: 2000
  });
};
const navigateTo = (
  url: string,
  success?: WechatMiniprogram.NavigateToSuccessCallback
) => {
  wx.navigateTo({
    url,
    success,
    fail() {
      errorHandle();
    }
  });
};
const redirectTo = (
  url: string,
  success?: WechatMiniprogram.RedirectToSuccessCallback
) => {
  wx.redirectTo({
    url,
    success,
    fail() {
      errorHandle();
    }
  });
};
const reLaunch = (
  url: string,
  success?: WechatMiniprogram.ReLaunchSuccessCallback
) => {
  wx.reLaunch({
    url,
    success,
    fail() {
      errorHandle();
    }
  });
};

type TNavigateToFunction = (
  url: string,
  success?: WechatMiniprogram.NavigateToSuccessCallback
) => void;
type TRedirectToFunction = (
  url: string,
  success?: WechatMiniprogram.RedirectToSuccessCallback
) => void;
type TReLaunchFunction = (
  url: string,
  success?: WechatMiniprogram.ReLaunchSuccessCallback
) => void;

/** 路由工具对象 */
export interface IRouterUtil {
  navigateTo: TNavigateToFunction;
  redirectTo: TRedirectToFunction;
  reLaunch: TReLaunchFunction;
}

export default {
  navigateTo,
  redirectTo,
  reLaunch
};
