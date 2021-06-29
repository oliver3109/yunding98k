import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UImage extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    mode: {
      type: String,
      value: 'aspectFill'
    },
    radius: {
      type: Boolean,
      value: false
    },
    src: {
      type: String,
      value: ''
    },
    picArr: {
      type: Array,
      value: [],
      observer: this.picChange
    },
    click: {
      type: Boolean,
      value: true
    }
  };
  picChange(val: any) {
    this.setData({
      picArr: val
    });
  }
  preview() {
    if ((this as any).properties.click) {
      wx.previewImage({
        current: (this as any).properties.src,
        urls:
          (this as any).data.picArr.length != 0
            ? (this as any).data.picArr
            : [(this as any).properties.src]
      });
    }
  }
}
