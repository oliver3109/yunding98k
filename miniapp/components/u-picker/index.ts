import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UPicker extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    type: {
      type: String,
      value: 'text'
    },
    d: {
      type: Array,
      value: []
    },
    textAlign: {
      type: String,
      value: 'left'
    },
    height: {
      type: String,
      value: '100%'
    },
    v: {
      type: String,
      value: '',
      observer: this.bindValue
    },
    placeholder: {
      type: String,
      value: ''
    },
    width: {
      type: String,
      value: '100rpx'
    }
  };
  data: any = {
    v: this.properties.v,
    d: this.properties.d
  };
  bindValue(e: any) {
    this.setData({
      v: e
    });
  }
  bindPickerChange(e: any) {
    this.setData(
      {
        v: e.detail.value
      },
      () => {
        this.triggerEvent('change', { value: e.detail.value });
      }
    );
  }
}
