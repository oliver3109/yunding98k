import { BasePage } from '../../../../core/base/base';
import { WxPage } from '../../../../core/decorator/index';

@WxPage({ shareOptions: {} })
export default class BattleArrayDetail extends BasePage {
  data = {
    load: false,
    isIpx: this.app.globalData.phoneInfo.isIpx,
    headHeight: this.app.globalData.phoneInfo.headHeight,
    reHeight: this.$util.common.rpxToPx(0),
    id: 0,

    leveingGuides: [
      {
        title: '阶段 2',
        tip: '在石头人之前',
        round: [
          'user-round',
          'user-round',
          'user-round',
          'neutral',
          'user-round',
          'user-round',
          'krugs'
        ]
      },
      {
        title: '阶段 3',
        tip: '在狼群之前',
        round: [
          'user-round',
          'user-round',
          'user-round',
          'neutral',
          'user-round',
          'user-round',
          'wolves'
        ]
      },
      {
        title: '阶段 4',
        tip: '在猛禽之前',
        round: [
          'user-round',
          'user-round',
          'user-round',
          'neutral',
          'user-round',
          'user-round',
          'raptors'
        ]
      }
    ]
  };

  onRefresh() {
    this.setData(
      {
        load: false
      },
      () => {
        this.setData({
          load: true
        });
      }
    );
  }

  async onLoad(options: Record<string, any>) {
    const { id } = options;
    this.setData(
      {
        id,
        load: false
      },
      () => {
        this.loadDetail();
      }
    );
  }

  onClickAvatar(event: any) {
    const { id } = event.currentTarget.dataset;
    this.$router.navigateTo(
      `/views/database/pages/champion-detail/index?id=${id}`
    );
  }

  async loadDetail() {
    const { id } = this.data;
    const formationDetail = await this.$api.formation.getFormationDetail({
      id
    });
    /* ----------- 设置页面分享 -------------- */
    this.$setShareAppMessage({
      title: `${formationDetail.nameCn}`
    });

    /* ----------- 处理最后更新时间 -------------- */
    formationDetail.updateAt = this.$util.date.getDateDiff(
      formationDetail.updateAt
    );

    /* ----------- 处理团队核心的推荐装备的配件 -------------- */
    const itemList = await this.$api.item.getItemList({
      setId: '63fc5265-4c6b-465b-8928-c7a0d54a9010'
    });
    for (const champion of formationDetail.coreChampions) {
      if (champion.recommendItems && champion.recommendItems.length > 0) {
        for (let index = 0; index < champion.recommendItems.length; index++) {
          const item = champion.recommendItems[index];
          if (item) {
            const _item = itemList.find((_) => _.id === item.id);
            const itemFittingIds: string[] = _item.itemFittingIds;
            const itemFittingList = [];
            for (const id of itemFittingIds) {
              const itemData = itemList.find((_) => _.id === id);
              if (itemData) {
                itemFittingList.push(itemData);
              }
            }
            champion.recommendItems[index].itemFittingList = itemFittingList;
          }
        }
      }
    }

    /* ------------------- 处理组成 ---------------------- */
    // !!! 处理天选 人数需要 + 1
    const { chosenId } = formationDetail.setSpecialRules;
    formationDetail.synergies = formationDetail.synergies
      .filter((item) => {
        const extraData = JSON.parse(item.extra_data);
        const counts = Object.keys(extraData).map((_) => parseInt(_));
        return item.count >= counts[0] || counts.length == 1;
      })
      .map((item) => {
        if (item.id == chosenId) {
          item.count = parseInt(item.count) + 1;
          item.count += '';
          item.isChose = true;
        }
        item.name = item.name.replace(/ /gi, '-').toLowerCase();
        const extraData = JSON.parse(item.extra_data);
        const counts = Object.keys(extraData).map((_) => _);
        counts.reverse();
        counts.forEach((count, index) => {
          const _tmp: any = {
            0: { tier: 'c', sort: 3 },
            1: { tier: 'b', sort: 2 },
            2: { tier: 'a', sort: 1 },
            3: { tier: 's', sort: 0 }
          };
          if (counts.length == 4) {
            if (item.count <= count && index == 0) {
              item.tier = _tmp[index].tier;
              item.sort = _tmp[index].sort;
            }
            if (item.count >= count && index > 0) {
              item.tier = _tmp[index].tier;
              item.sort = _tmp[index].sort;
            }
          } else if (counts.length <= 3) {
            if (item.count <= count && index == 0) {
              item.tier = _tmp[index].tier;
              item.sort = _tmp[index].sort;
            }
            if (item.count >= count && index > 0) {
              item.tier = _tmp[index].tier;
              item.sort = _tmp[index].sort;
            }
          }
        });
        return item;
      })
      .sort((a, b) => {
        return a.sort - b.sort;
      });

    this.setData({
      load: true,
      detail: formationDetail
    });
  }
}
