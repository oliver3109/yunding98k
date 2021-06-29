import { BasePage } from '../../../../core/base/base';
import { WxPage } from '../../../../core/decorator/index';

@WxPage({ shareOptions: {} })
export default class ChampionDetail extends BasePage {
  data = {
    load: true,
    isIpx: this.app.globalData.phoneInfo.isIpx,
    champion: {} as Record<string, any>
  };

  async onLoad(options: any) {
    const { id } = options;
    const data = await this.$api.champion.getChampionDetail({ id });

    // 设置分享
    this.$setShareAppMessage({
      title: `${data.nameCn} ${data.titleCn}`
    });

    // 处理 skillExtraData
    data.consume = data.skillExtraData.Consume;
    delete data.skillExtraData.Consume;
    data.skillExtraList = Object.keys(data.skillExtraData).map((k) => {
      return {
        key: k,
        value: data.skillExtraData[k]
      };
    });

    // 处理特质
    data.quality = [...data.originList, ...data.professionList];

    this.setData({
      champion: data
    });
  }

  onRefresh() {
    this.setData(
      {
        load: false
      },
      () => {
        wx.nextTick(() => {
          this.setData({
            load: true
          });
        });
      }
    );
  }
}
