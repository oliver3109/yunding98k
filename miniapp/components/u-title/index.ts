import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';
@WxComponent()
export default class UTitle extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    icon: {
      type: String,
      value: ''
    },
    scrollList: {
      type: Array,
      value: []
    },
    scroll: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    more: {
      type: Boolean,
      value: true
    },
    border: {
      type: Boolean,
      value: true
    },
    padding: {
      type: Boolean,
      value: false
    },
    theme: {
      type: Boolean,
      value: false
    },
    load: {
      type: Boolean,
      value: true,
      observer: this.next
    },
    sticky: {
      type: Number,
      value: 0
    }
  };
  next(val: boolean) {
    this.setData({
      load: val
    });
  }
  ready() {
    this.init();
  }
  change(bool: boolean) {
    if (bool != this.data.isSticky) {
      this.setData({
        isSticky: bool
      });
    }
  }
  data: any = {
    ios: false,
    active: 0,
    scrollLeft: 0,
    isSticky: false,
    load: this.properties.load
  };
  onTap(e: any) {
    if (this.data.load) {
      this.$util.common.throttle(this, () => {
        this.setData(
          {
            scrollLeft:
              e.currentTarget.offsetLeft - this.$util.common.rpxToPx(375),
            active: e.currentTarget.dataset.index
          },
          () => {
            this.triggerEvent('itemclick', { value: this.data.active });
          }
        );
      });
    }
  }
  async init() {
    this.setData({
      ios: this.app.globalData.phoneInfo.isIos
    });
  }
}
