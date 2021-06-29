import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UBar extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    border: {
      type: Boolean,
      value: false
    },
    num: {
      type: Number,
      value: 0,
      observer: this.add
    }
  };
  add(val: any) {
    this.setData(
      {
        num: val
      },
      () => this.npAdd()
    );
  }
  async npAdd() {
    this.setData({
      np: this.data.num
    });
  }
  data: any = {
    num: 0,
    np: 0
  };
}
