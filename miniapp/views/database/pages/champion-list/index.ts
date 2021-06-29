import { BasePage } from '../../../../core/base/base';
import { WxPage } from '../../../../core/decorator/index';

@WxPage()
export default class ChampionDetail extends BasePage {
  data = {
    load: true,

    originList: [] as Array<any>,
    professionList: [] as Array<any>,
    costList: [
      { name: '全部' },
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { name: '4' },
      { name: '5' }
    ],
    championList: [] as Array<any>,

    searchCache: {
      originId: 0,
      professionId: 0,
      cost: 0
    },
    searchParam: {}
  };

  async onLoad() {
    const originList = await this.$api.origin.getOriginList();
    const professionList = await this.$api.profession.getProfessionList();
    const championList = await this.$api.champion.getChampionList();
    this.setData({
      championList,
      originList: [{ name: '全部' }, ...originList],
      professionList: [{ name: '全部' }, ...professionList]
    });
  }

  onRefresh() {
    this.setData(
      {
        load: false,
        searchParam: {}
      },
      async () => {
        const championList = await this.$api.champion.getChampionList(
          this.data.searchParam
        );
        wx.nextTick(() => {
          this.setData({
            championList,
            load: true
          });
        });
      }
    );
  }

  onSearch(event: any) {
    const { detail } = event;
    this.setData(
      {
        load: false,
        searchParam: { name: detail }
      },
      async () => {
        const championList = await this.$api.champion.getChampionList(
          this.data.searchParam
        );
        wx.nextTick(() => {
          this.setData({
            championList,
            load: true
          });
        });
      }
    );
  }

  handleChange(event: any) {
    const { dataset } = event.currentTarget;
    const { value } = event.detail;

    let _value = '';
    const searchParam: any = {};
    if (value > 0) {
      if (dataset.key === 'originId') {
        _value = this.data.originList[parseInt(value)].id;
      }
      if (dataset.key === 'professionId') {
        _value = this.data.professionList[parseInt(value)].id;
      }
      if (dataset.key === 'cost') {
        _value = this.data.costList[parseInt(value)].name;
      }
      searchParam[dataset.key] = _value;
    }

    this.setData(
      {
        load: false,
        searchParam
      },
      async () => {
        const championList = await this.$api.champion.getChampionList(
          this.data.searchParam
        );
        wx.nextTick(() => {
          this.setData({
            championList,
            load: true
          });
        });
      }
    );
  }

  onClickChampion(event: any) {
    this.$router.navigateTo(
      `/views/database/pages/champion-detail/index?id=${event.currentTarget.dataset.id}`
    );
  }
}
