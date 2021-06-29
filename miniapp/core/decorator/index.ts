import { toObject } from '../util';
import { BasePage } from '../base/base';
import { BaseComponent, toComponent } from '../base/base';
import { DecoratorOptions, ShareOptions } from '../interfaces';

export function WxPage(decoratorOptions?: DecoratorOptions) {
  return function (constructor: new () => BasePage): void {
    class WxPage extends constructor {
      storeBindings: any;
      constructor(..._args: any[]) {
        super();
      }
      onShareAppMessage() {
        return decoratorOptions?.shareOptions || {};
      }
      onLoad(options?: any) {
        if (!decoratorOptions?.shareOptions) {
          wx.hideShareMenu();
        }
        super.onLoad && super.onLoad(options);
      }

      // 重写生命周期函数，可以在这里前后拦截操作
      onReady() {
        super.onReady && super.onReady();
      }
      onShow() {
        super.onShow && super.onShow();
      }
      onUnload() {
        this.storeBindings && this.storeBindings.destroyStoreBindings();
        super.onUnload && super.onUnload();
      }

      /** 设置并覆盖页面分享配置 */
      async $setShareAppMessage(options: ShareOptions) {
        let config: ShareOptions = options;
        if (decoratorOptions?.shareOptions) {
          // 合并数据 options 优先级高于 decoratorOptions.shareOptions
          // 如果key相同 options 的值会覆盖 decoratorOptions.shareOptions
          config = Object.assign({}, decoratorOptions.shareOptions, options);
        }
        super.onShareAppMessage = function () {
          return config;
        };
      }
    }
    const current = new WxPage();
    const obj = toObject(current);
    Page(obj);
  };
}

export function WxComponent() {
  return function (constructor: new () => BaseComponent): void {
    class WxComponent extends constructor {
      storeBindings: any;
      options: any = {
        addGlobalClass: true
      };
      constructor(..._args: any[]) {
        super();
      }
      created() {
        super.created && super.created();
      }
      attached() {
        super.attached && super.attached();
      }
      detached() {
        this.storeBindings && this.storeBindings.destroyStoreBindings();
        super.detached && super.detached();
      }
    }
    const current = new WxComponent();
    // 这里是与 Page 不一样的地方
    const obj = toComponent(toObject(current));
    Component(obj);
  };
}
