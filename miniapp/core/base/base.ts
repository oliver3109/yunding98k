import { isPlainObject } from '../util';
import { IRouterUtil } from '../../utils/util.router';
import commonUtil, { ICommonUtil } from '../../utils/util.common';
import dateUtil, { IDateUtil } from '../../utils/util.date';
import $router from '../../utils/util.router';
import { appInterface, ShareOptions } from '../interfaces';
import api, { IApi } from '../../api/index';

declare type IAnyObject = Record<string, any>;

export interface BasePageProps
  extends WechatMiniprogram.Page.InstanceProperties {
  options: IAnyObject;
  data: any;
  url?: string;
}
export interface BasePage
  extends WechatMiniprogram.Page.ILifetime,
    WechatMiniprogram.Page.InstanceMethods<any>,
    BasePageProps {
  /** 设置小程序页面分享配置 */
  $setShareAppMessage(options: ShareOptions): void;
  [x: string]: any;
}

export class BasePage {
  readonly app: appInterface;
  $util: {
    common: ICommonUtil;
    date: IDateUtil;
  };
  $router: IRouterUtil;
  $api: IApi;
  constructor() {
    this.app = getApp();
    this.data = {
      isIpx: this.app.globalData.phoneInfo.isIpx
    };
    this.$router = $router;
    this.$util = {
      common: commonUtil,
      date: dateUtil
    };
    this.$api = api;
  }
}

export interface BaseComponent
  extends WechatMiniprogram.Component.Lifetimes,
    WechatMiniprogram.Component.OtherOption,
    WechatMiniprogram.Component.InstanceMethods<any> {
  properties: WechatMiniprogram.Component.PropertyOption;
  data: any;
  methods: Record<string, (...args: any[]) => any>;
  [x: string]: any;
}
export class BaseComponent {
  readonly app: appInterface;
  $util: {
    common: ICommonUtil;
    date: IDateUtil;
  };
  $router: IRouterUtil;
  $api: IApi;
  constructor() {
    this.app = getApp();
    this.data = {
      isIpx: this.app.globalData.phoneInfo.isIpx
    };
    this.$router = $router;
    this.$util = {
      common: commonUtil,
      date: dateUtil
    };
    this.$api = api;
  }
}

const RAW_LIFE_CYCLES = ['Created', 'Attached', 'Ready', 'Moved', 'Detached'];
const NATIVE_LIFE_CYCLES = RAW_LIFE_CYCLES.map((k) => k.toLowerCase());
const COMPONENT_NATIVE_PROPS = [
  'externalClasses',
  'properties',
  'data',
  'options',
  'relations',
  'behaviors'
];
export function toComponent(options: any = {}): any {
  if (options.properties) {
    Object.keys(options.properties).forEach((k) => {
      let opt: any = options.properties[k];
      if (!isPlainObject(opt)) {
        opt = { type: opt };
      }
      options.properties[k] = opt;
    });
  }
  if (!options.methods) options.methods = {} as any;
  const inits: { [key: string]: PropertyDescriptor } = {};
  Object.getOwnPropertyNames(options).forEach((k) => {
    const desc = Object.getOwnPropertyDescriptor(options, k);
    if (!desc) return;
    if (NATIVE_LIFE_CYCLES.indexOf(k) < 0 && typeof desc.value === 'function') {
      Object.defineProperty(options.methods, k, desc);
      delete options[k];
    } else if (COMPONENT_NATIVE_PROPS.indexOf(k) < 0) {
      inits[k] = desc;
    }
  });
  if (Object.keys(inits).length) {
    const oldCreated = options.created as any;
    options.created = function () {
      Object.defineProperties(this, inits);
      // eslint-disable-next-line prefer-rest-params
      if (oldCreated) oldCreated.apply(this, arguments);
    };
  }
  return options;
}
