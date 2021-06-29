import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UList extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    body: {
      type: Boolean,
      value: false
    },
    column: {
      type: Boolean,
      value: false
    },
    big: {
      type: Boolean,
      value: false
    },
    click: {
      type: Boolean,
      value: false
    },
    vn: {
      type: Array,
      value: [],
      observer: this.vnChange
    },
    sm: {
      type: Boolean,
      value: false
    },
    v: {
      type: Object,
      value: {
        src: '',
        title: '',
        p: ''
      },
      observer: this.vChange
    }
  };
  data: { v: any; vn: Array<any> } = {
    v: this.properties.v,
    vn: []
  };
  body() {
    if (this.properties.body) {
      wx.previewImage({
        current: (this as any).properties.v.src,
        urls: [(this as any).properties.v.src]
      });
    }
  }
  vChange(val: any) {
    this.initList(val);
  }
  initList(val: any) {
    this.data.v.title =
      this.data.vn.length != 0 ? this.data.v[this.data.vn[0]] : val.title;
    this.data.v.src =
      this.data.vn.length != 0 ? this.data.v[this.data.vn[1]] : val.src;
    this.data.v.p =
      this.data.vn.length != 0 ? this.data.v[this.data.vn[2]] : val.p;
    this.setData({
      v: this.data.v
    });
  }
  vnChange(val: Array<any>) {
    this.data.vn = val;
  }
}
