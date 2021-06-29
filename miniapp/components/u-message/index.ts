import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UMessage extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    v: {
      type: Object,
      value: {}
    }
  };
  data: any = {
    v: this.properties.v
  };
}
