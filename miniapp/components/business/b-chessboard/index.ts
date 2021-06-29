import { BaseComponent } from '../../../core/base/base';
import { WxComponent } from '../../../core/decorator/index';

@WxComponent()
export default class BChampionAvatar extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    list: { type: Array, value: [] }
  };

  onClickAvatar(event: any) {
    const { id } = event.currentTarget.dataset;
    this.$router.navigateTo(
      `/views/database/pages/champion-detail/index?id=${id}`
    );
  }
}
