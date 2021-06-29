import { BaseComponent } from '../../core/base/base';
import { WxComponent } from '../../core/decorator/index';

@WxComponent()
export default class UplusTabbar extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    tabbarData: {
      type: Array,
      observer: 'onTabbarDataChange' as any
    },
    activeIndex: {
      type: String,
      observer: 'onTabIndexChange' as any
    }
  };

  data = {
    isIpx: false,
    tabbarArray: [],
    currentTabIndex: ''
  };

  ready() {
    this.setData({
      isIpx: this.app.globalData.phoneInfo.isIpx
    });
  }

  /**
   * 监听到页面数据
   * @param newVal
   */
  onTabIndexChange(newVal: any) {
    this.setData({
      currentTabIndex: newVal
    });
  }

  /**
   * 监听标签栏数据
   * @param newVal
   */
  onTabbarDataChange(newVal: any) {
    this.setData({
      tabbarArray: newVal
    });
  }

  /**
   * 点击标签栏
   * @param event
   */
  onClickTap(event: any) {
    const index = event.currentTarget.dataset.index;
    this.triggerEvent('change', index);
  }
}
