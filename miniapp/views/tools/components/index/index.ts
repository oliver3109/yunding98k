import { BaseComponent } from '../../../../core/base/base';
import { WxComponent } from '../../../../core/decorator/index';

@WxComponent()
export default class Tools extends BaseComponent {
  data = {
    load: true,
    isIpx: this.app.globalData.phoneInfo.isIpx,
    reHeight: this.$util.common.rpxToPx(0)
  };

  async init() {
    this.setData({
      load: false
    });
  }
}
