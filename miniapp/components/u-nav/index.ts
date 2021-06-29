import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UNav extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    change: {
      type: Number,
      value: 0,
      observer: this.changeT
    },
    changeTitle: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '标题',
      observer: this.reinnerTitle
    },
    theme: {
      type: Boolean,
      value: false,
      observer: this.isTheme
    }
  };
  data: any = {
    title: '标题',
    headHeight: 0,
    statusBarHeight: 0,
    isIpx: false,
    back: false
  };

  isTheme(val: boolean) {
    wx.setNavigationBarColor({
      frontColor: val ? '#ffffff' : '#000000',
      backgroundColor: val ? '#ffffff' : '#000000',
      animation: {
        duration: 30,
        timingFunc: 'linear'
      }
    });
  }
  reinnerTitle() {
    wx.nextTick(() => {
      this.isShow();
    });
  }
  isShow() {
    if (getCurrentPages().length > 1) {
      this.setData({
        back: true
      });
    }
  }
  goHome() {
    this.$util.common.throttle(this, () => {
      this.$router.reLaunch('/views/navigation/pages/main-page/index');
    });
  }
  goBack() {
    this.$util.common.throttle(this, () => {
      wx.navigateBack({
        delta: 1,
        fail: () => {
          this.$router.reLaunch('/views/navigation/pages/main-page/index');
        }
      });
    });
  }
  ready() {
    this.setData({
      statusBarHeight: this.app.globalData.phoneInfo.statusBarHeight,
      headHeight: this.app.globalData.phoneInfo.headHeight,
      isIpx: this.app.globalData.phoneInfo.isIpx,
      isIos: this.app.globalData.phoneInfo.isIos,
      menuButtonObject: wx.getMenuButtonBoundingClientRect()
    });
  }
}
