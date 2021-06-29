import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UBody extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    tTop: {
      type: Number,
      value: 0
    },
    bg: {
      type: String,
      value: '#fff'
    },
    auto: {
      type: String,
      value: 'false'
    },
    btn: {
      type: Number,
      value: 0
    },
    load: {
      type: Boolean,
      value: false,
      observer: this.loadOver
    },
    end: {
      type: Boolean,
      value: false,
      observer: this.isEnd
    },
    more: {
      type: Boolean,
      value: false,
      observer: this.isMore
    },
    reHeight: {
      type: Number,
      value: 0
    },
    scroll: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    },
    theme: {
      type: Boolean,
      value: false,
      observer: this.isTheme
    }
  };
  isEnd(val: boolean) {
    this.setData({
      end: val
    });
  }
  isMore(val: boolean) {
    this.setData({
      more: val
    });
  }
  isTheme(val: boolean) {
    this.setData({
      theme: val
    });
  }
  onEnd() {
    this.triggerEvent('loadmore', {});
  }
  async init(then: Function) {
    const net: any = await this.$util.common.networkStatus();
    const netStatus = net.networkType == 'none' ? false : true;
    this.setData(
      {
        ios: this.app.globalData.phoneInfo.isIos,
        netStatus: netStatus,
        netShow: netStatus ? false : true
      },
      () => {
        then(netStatus);
      }
    );
  }
  async refresh() {
    this.setData(
      {
        netShow: false
      },
      () => {
        const set = setTimeout(() => {
          this.init(() => {
            this.data.load == false ? this.triggerEvent('refresh') : '';
            clearInterval(set);
          });
        }, 500);
      }
    );
  }
  loadOver(val: boolean) {
    wx.nextTick(() => {
      this.setData(
        {
          load: val
        },
        () => {
          this.setData({
            y: val ? -45 : 0,
            isLoad: val ? 1 : 3
          });
        }
      );
    });
  }
  data: any = {
    title: 'body',
    isIos: false,
    end: this.properties.end,
    more: this.properties.more,
    theme: this.properties.theme,
    threshold: 0,
    screenHeight: 0,
    netShow: false,
    isIpx: false,
    headHeight: 0,
    netStatus: true,
    toTop: 0,
    // 1下拉刷新 2松开刷新 3加载中 4加载完成
    isLoad: 3,
    y: 0,
    load: this.properties.load
  };
  ready() {
    this.setData({
      screenHeight: this.app.globalData.phoneInfo.screenHeight,
      isIpx: this.app.globalData.phoneInfo.isIpx,
      headHeight: this.app.globalData.phoneInfo.headHeight
    });
  }
  touchMove(e: any) {
    if (this.data.isLoad >= 3) return;
    if (e.detail.y > this.data.threshold) {
      this.setData({
        isLoad: 2
      });
    } else {
      this.setData({
        isLoad: 1
      });
    }
  }
  touchEnd() {
    if (this.data.isLoad >= 3) return;
    if (this.data.isLoad == 2) {
      this.setData({
        isLoad: 3,
        y: 0
      });
      wx.vibrateShort();
      this.triggerEvent('onRefresh');
    } else if (this.data.isLoad == 1) {
      this.setData({
        y: -45
      });
    }
  }
  onScroll(e: any) {
    this.triggerEvent('scroll', e.detail);
  }
  goTop(tTop: number) {
    wx.nextTick(() => {
      this.setData({
        toTop: tTop
      });
    });
  }
  onRefresh() {
    this.triggerEvent('onRefresh');
  }
}
