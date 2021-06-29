import { BasePage } from '../../../../core/base/base';
import { WxPage } from '../../../../core/decorator/index';

@WxPage()
export default class Screen extends BasePage {
  data: any = {
    load: true
  };
  onLoad() {
    const set = setTimeout(() => {
      clearInterval(set);
      // this.$router.reLaunch('/views/Index/views/Index/index');
    }, 2000);
  }
}
