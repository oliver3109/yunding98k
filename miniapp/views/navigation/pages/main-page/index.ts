import { BasePage } from '../../../../core/base/base';
import { WxPage } from '../../../../core/decorator/index';

@WxPage({
  shareOptions: {
    title: '云顶98K · 云顶之弈游戏助手',
    path: '/views/navigation/pages/main-page/index'
  }
})
export default class Home extends BasePage {
  data = {
    currentActiveIndex: 'battle-array',

    tabbarData: [
      {
        name: 'battle-array',
        title: '阵容',
        icon: 'yd98k-tabbar-battle-array'
      },
      { name: 'tools', title: '工具', icon: 'yd98k-tabbar-tools' },
      { name: 'database', title: '数据库', icon: 'yd98k-tabbar-database' }
    ]
  };

  onLoad() {
    this.selectComponent('#battyArray').init();
  }

  onClickTap(event: any) {
    const index = event.detail;
    if (index === 'battle-array') {
      this.selectComponent('#battyArray').init();
    }
    this.setData({
      currentActiveIndex: index
    });
  }
}
