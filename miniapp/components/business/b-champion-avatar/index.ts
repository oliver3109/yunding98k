import { BaseComponent } from '../../../core/base/base';
import { WxComponent } from '../../../core/decorator/index';

@WxComponent()
export default class BChampionAvatar extends BaseComponent {
  properties: WechatMiniprogram.Component.PropertyOption = {
    // 英雄UUID
    uuid: String,
    // 头像地址
    url: String,
    // 名称
    name: String,
    // 装备图片地址
    itemUrls: {
      type: Array,
      value: []
    },
    // 是否可以点击
    clickable: {
      type: Boolean,
      value: true
    },
    // 宽度 rpx
    width: { type: Number, value: 70 },
    // 高度 rpx
    height: { type: Number, value: 70 }
  };

  onClick() {
    const { clickable, uuid } = this.properties;
    if (clickable && uuid) {
      this.$router.navigateTo(
        `/views/database/pages/champion-detail/index?id=${uuid}`
      );
    }
  }
}
