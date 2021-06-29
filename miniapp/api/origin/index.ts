import http from '../../utils/http';

/**
 * 种族新增/更新数据结构
 */
interface ISaveOriginData {
  id?: string;
  createAt?: string;
  updateAt?: string;
  isDeleted?: 0 | 1;
  name?: string;
  nameCn?: string;
  img?: string;
  desc?: string;
  extraData?: string;
}

export interface IOriginApi {
  /** 获取种族说明列表 */
  getOriginList: (data?: any) => Promise<any>;
  /** 查询种族说明详情 */
  getOriginDetail: (data?: { id: string }) => Promise<ISaveOriginData>;
}

export default {
  /** 获取种族说明列表 */
  getOriginList: async (data?: any) => {
    return http.get({ url: '/origin/list', data });
  },
  /** 查询种族说明详情 */
  getOriginDetail: async (data?: { id: string }) => {
    return http.get<ISaveOriginData>({ url: '/origin/detail', data });
  }
};
