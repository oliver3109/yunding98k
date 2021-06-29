import http from '../../utils/http';

/**
 * 赛季配置新增/更新数据结构
 */
interface ISaveSetData {
  id?: string;
  createAt?: string;
  updateAt?: string;
  isDeleted?: 0 | 1;
  name?: string;
  vision?: string;
}

export interface ISetApi {
  /** 获取赛季配置说明列表 */
  getSetList: (data?: any) => Promise<any>;
  /** 查询赛季配置说明详情 */
  getSetDetail: (data?: { id: string }) => Promise<ISaveSetData>;
}

export default {
  /** 获取赛季配置说明列表 */
  getSetList: async (data?: any) => {
    return http.get({ url: '/set/list', data });
  },
  /** 查询赛季配置说明详情 */
  getSetDetail: async (data?: { id: string }) => {
    return http.get<ISaveSetData>({ url: '/set/detail', data });
  }
};
