import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class ULoading extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    title: {
      type: String,
      value: '正在加载'
    },
    font: {
      type: Boolean,
      value: true
    },
    theme: {
      type: Boolean,
      value: false,
      observer: this.isTheme
    }
  };
  isTheme(val: boolean) {
    this.setData({
      theme: val
    });
  }
  data: any = {
    theme: this.properties.theme,
    title: this.properties.title
  };
}
