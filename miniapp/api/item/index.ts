import http from '../../utils/http';

export interface IItemApi {
  /** 获取装备列表 */
  getItemList: (data?: any) => Promise<Array<any>>;
  /** 获取装备装备 */
  getItemDetail: (data?: { id: string }) => Promise<any>;
}

export default {
  /** 获取装备列表 */
  getItemList: async (data?: any) => {
    return http.get<Array<any>>({ url: '/item/list', data });
  },
  /** 查询装备详情 */
  getItemDetail: async (data?: { id: string }) => {
    return http.get({ url: '/item/detail', data });
  }
};
