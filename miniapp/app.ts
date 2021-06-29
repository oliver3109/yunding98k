/**
 * 是否是苹果手机
 * @param model
 */
const isIPhone = (model: string) => model.includes('iPhone');

/**
 * 是否是苹果全面屏手机
 * @param model
 */
const isHigherThanIPhoneXVersion = (model: string) => {
  return (
    ['iPhone X', 'iPhone12', 'iPhone13'].filter((item: any) =>
      model.includes(item)
    ).length != 0
  );
};

const getPhoneInfo = () => {
  const res = wx.getSystemInfoSync();
  return {
    // 手机状态栏高度
    statusBarHeight: res.statusBarHeight,
    // 是否是ios系统
    isIos: isIPhone(res.model),
    // 是否是iphone x以上(true/false)
    isIpx: isHigherThanIPhoneXVersion(res.model),
    // 头部高度
    headHeight: isHigherThanIPhoneXVersion(res.model)
      ? 88
      : isIPhone(res.model)
      ? 64
      : res.statusBarHeight + 46,
    // 主体部分高度
    screenHeight: isHigherThanIPhoneXVersion(res.model)
      ? res.windowHeight - 88 + 2
      : isIPhone(res.model)
      ? res.windowHeight - 64 + 2
      : res.windowHeight - (res.statusBarHeight + 46) + 2
  };
};

App({
  globalData: {
    phoneInfo: {
      isIpx: false,
      headHeight: 0,
      screenHeight: 0,
      statusBarHeight: 0,
      isIos: false
    },
    systemInfo: {
      screenHeight: 0,
      statusBarHeight: 0,
      model: ''
    }
  },

  // 获取手机信息
  getPhoneInfo() {
    return getPhoneInfo();
  },

  // 增强 Page 能力
  enhancePage() {
    const that = this;
    const originPage = Page;
    let phoneInfo: any = {};
    Page = (options: any) => {
      if (options) {
        options.data = options.data || {};
        phoneInfo = that.getPhoneInfo && that.getPhoneInfo();
        options.data = Object.assign(options.data, phoneInfo, {
          // 静态资源地址
          $staticCdnUrl:
            'yunding-98k-6gcsbone8cf17102.7975-yunding-98k-6gcsbone8cf17102-1304284243',
          $staticHttpsUrl:
            '7975-yunding-98k-6gcsbone8cf17102-1304284243.tcb.qcloud.la'
        }) as any;
      }

      originPage(
        Object.assign(options, { windowHeight: phoneInfo.windowHeight })
      );
    };
  },

  // 增强业务 Component 能力
  enhanceComponent() {
    const that = this;
    const originComponent = Component;
    let phoneInfo: any = {};
    Component = (options: any) => {
      options.data = options.data || ({} as any);
      (options as any).addGlobalClass = true;
      phoneInfo = that.getPhoneInfo && that.getPhoneInfo();
      options.data = Object.assign(options.data, phoneInfo, {
        // 静态资源地址
        $staticCdnUrl:
          'yunding-98k-6gcsbone8cf17102.7975-yunding-98k-6gcsbone8cf17102-1304284243',
        $staticHttpsUrl:
          '7975-yunding-98k-6gcsbone8cf17102-1304284243.tcb.qcloud.la'
      }) as any;

      options.windowHeight = phoneInfo.windowHeight;
      return originComponent(options);
    };
  },

  /**
   * 小程序首次启动时
   */
  async onLaunch() {
    const res = wx.getSystemInfoSync();
    this.globalData.systemInfo = res;
    this.globalData.phoneInfo = getPhoneInfo();

    this.enhancePage();
    this.enhanceComponent();

    // 检查更新
    this.checkUpgrade();

    // 初始化微信云
    this.initCloud();

    // 初始化基础数据
    await this.initBaseData();
  },

  // 初始化微信云
  initCloud() {
    wx.cloud.init({
      env: 'yunding-98k-6gcsbone8cf17102',
      traceUser: true
    });
  },

  // 初始化基础数据
  async initBaseData() {
    console.log('初始化基础数据...');
    // TODO 0. 获取当前赛季 赛季版本

    // 1. 获取装备
    // const list = await api.item.getItemList({
    //   setId: '63fc5265-4c6b-465b-8928-c7a0d54a9010'
    // });

    // wx.setStorageSync('ITEM_LIST', list);
  },

  // 检查更新
  checkUpgrade() {
    wx.getUpdateManager().onCheckForUpdate(function (res) {
      console.info('检测是否有新版本');
      if (res.hasUpdate) {
        // 存在新版，更新
        wx.getUpdateManager().onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '最新版本已准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                // 清空本地缓存 避免需要重新删除小程序
                wx.clearStorageSync();
                wx.getUpdateManager().applyUpdate();
              }
            }
          });
        });
        // 更新失败
        wx.getUpdateManager().onUpdateFailed(function () {
          wx.showToast({
            title: '最新版本下载失败',
            icon: 'none',
            duration: 1500
          });
        });
      }
    });
  }
});
