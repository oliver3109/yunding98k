import { BaseComponent } from '../../../../core/base/base';
import { WxComponent } from '../../../../core/decorator/index';

@WxComponent()
export default class Database extends BaseComponent {
  data = {
    isIpx: false,
    currentTabIndex: ''
  };

  onClickChampionList() {
    this.$router.navigateTo('/views/database/pages/champion-list/index');
  }
}
