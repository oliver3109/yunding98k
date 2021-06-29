import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UInput extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    password: {
      type: Boolean,
      value: false
    },
    disable: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'text'
    },
    fontSize: {
      type: Number,
      value: 28
    },
    disabled: {
      type: Boolean,
      value: false
    },
    width: {
      type: String,
      value: '100rpx'
    },
    value: {
      type: String,
      value: '',
      observer: this.changeValue
    },
    placeholder: {
      type: String,
      value: ''
    },
    textAlign: {
      type: String,
      value: 'left'
    }
  };
  data: any = {
    value: this.properties.value
  };
  changeValue(e: any) {
    this.setData({
      value: e
    });
  }
  bindValue(e: any) {
    this.triggerEvent('change', { value: e.detail.value });
  }
}
