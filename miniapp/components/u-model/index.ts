import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UModel extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    esc: {
      type: Boolean,
      value: false
    },
    font: {
      type: String,
      value: ''
    }
  };
  data: any = {};
  close() {
    this.setData({
      show: false
    });
  }
  open() {
    this.setData({
      show: true
    });
  }
  esc() {
    this.triggerEvent('esc');
  }
  ok() {
    this.triggerEvent('ok');
  }
}
