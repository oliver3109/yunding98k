import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class USwiper extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    margin: {
      type: String,
      value: '0'
    },
    v: {
      type: Array,
      value: []
    },
    vn: {
      type: Array,
      value: []
    },
    radius: {
      type: Boolean,
      value: false
    },
    shadow: {
      type: Boolean,
      value: false
    }
  };
  data: any = {
    interval: 5000,
    duration: 500,
    active: 0
  };
  changeBanner(e: any) {
    this.setData({
      active: e.detail.current
    });
  }
  goBanner(e: any) {
    this.triggerEvent('banner', e.currentTarget.dataset.item);
  }
}
