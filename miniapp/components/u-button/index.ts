import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';

@WxComponent()
export default class UButton extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    fontSize: {
      type: Number,
      value: 28
    },
    className: {
      type: String,
      value: ''
    },
    width: {
      type: String,
      value: ''
    },
    theme: {
      type: Boolean,
      value: false
    },
    border: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    plain: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Boolean,
      value: false
    },
    load: {
      type: Boolean,
      value: false,
      observer: this.loadChange
    },
    title: {
      type: String,
      value: '按钮'
    },
    auth: {
      type: Boolean,
      value: false
    },
    login: {
      type: Boolean,
      value: false
    }
  };
  data: any = {
    loadStatus: false,
    loading: false
  };
  loadOver() {
    this.setData({
      loading: false
    });
  }
  loadChange(val: boolean) {
    this.setData({
      loading: val
    });
  }
  // 授权登录
  async getUserInfo(e: any) {
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      return;
    }
  }
  async onTap() {
    if (this.properties.load) {
      return;
    }
    const net: any = await this.$util.common.networkStatus();
    const netStatus = net.networkType == 'none' ? false : true;
    if (netStatus) {
      this.$util.common.throttle(this, () => {
        wx.vibrateShort();
        this.triggerEvent('onTap');
      });
    } else {
      this.triggerEvent('onTap');
    }
  }
}
