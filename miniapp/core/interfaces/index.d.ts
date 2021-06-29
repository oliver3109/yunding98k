export interface ShareOptions {
  /** 转发的标题 */
  title?: string;
  /** 分享的路径。不能添加参数，如果需要添加参数，请配置 param。*/
  path?: string;
  /** 图片地址 */
  imageUrl?: string;
  /** 自定义参数 */
  param?: {
    [index: string]: any;
  };
}

export interface DecoratorOptions {
  /** 当前页面标题 */
  title?: string;
  /** 当前页面路径 */
  path?: string;
  /** 分享配置 */
  shareOptions: ShareOptions;
}
// 手机信息
export interface PhoneInfo {
  isIpx: boolean;
  headHeight: number;
  screenHeight: number;
  statusBarHeight: number;
  isIos: boolean;
}
// 系统信息
export interface SysInfo {
  screenHeight: number;
  statusBarHeight: number;
  model: string;
}

type TRequestFuncton<R, D> = (data: D) => Promise<R>;

/**
 * Http请求交互接口
 */
export namespace Http {
  type method = 'GET' | 'POST';

  interface RequestData {
    method: method;
    url: string;
    data?: Record<string, any>;
    header?: Record<string, any>;
  }
  interface ResponseData {
    code: number;
    message: string;
    data: any;
  }
}

// 工具类变量
export interface globalDataInterface {
  gapTime: any;
  lastTime: any;
  timeOut: any;
}
export interface appInterface {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
    phoneInfo: PhoneInfo;
    systemInfo: SysInfo;
  };
}
