import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class USearch extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    theme: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    screen: {
      type: Boolean,
      value: false
    }
  };
  change(e: any) {
    this.triggerEvent('change', e.detail.value);
  }
  sx() {
    this.triggerEvent('sx');
  }
}
