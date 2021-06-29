import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UToastPic extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    sm: {
      type: Boolean,
      value: false
    },
    name: {
      type: String,
      value: ''
    }
  };
}
