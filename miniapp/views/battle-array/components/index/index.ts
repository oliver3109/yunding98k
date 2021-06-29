import { BaseComponent } from '../../../../core/base/base';
import { WxComponent } from '../../../../core/decorator/index';

@WxComponent()
export default class BattleArray extends BaseComponent {
  data = {
    load: false,
    isIpx: this.app.globalData.phoneInfo.isIpx,
    reHeight: this.$util.common.rpxToPx(0),
    list: []
  };

  async init() {
    this.loadFormationList();
  }

  async onRefresh() {
    this.setData(
      {
        load: false
      },
      () => {
        this.loadFormationList();
      }
    );
  }

  /**
   * 加载阵容列表
   */
  async loadFormationList() {
    const formationList = await this.$api.formation.getFormationList();
    // 处理核心英雄
    formationList.forEach((item, index) => {
      item.formation.forEach((champion, cIndex) => {
        if (champion && item.coreChampions && item.coreChampions.length > 0) {
          const coreChampion = item.coreChampions.find(
            (_) => _.id == champion.id
          );
          if (coreChampion) {
            formationList[index].formation[
              cIndex
            ].recommendItemImgUrls = coreChampion.recommendItems
              .filter((_: any) => _)
              .map((_: any) => _.img);
          }
        }
      });
    });
    this.setData(
      {
        formationList
      },
      () => {
        this.setData({
          load: true
        });
      }
    );
  }

  onClickMore() {
    wx.showToast({
      title: `敬请期待`,
      icon: 'none',
      duration: 2000
    });
  }

  onClickDetail(event: any) {
    const { id } = event.currentTarget.dataset;
    this.$router.navigateTo(
      `/views/battle-array/pages/battle-array-detail/index?id=${id}`
    );
  }
}
