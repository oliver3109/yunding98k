import http from '../../utils/http';

/**
 * 职业新增/更新数据结构
 */
interface ISaveProfessionData {
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

export interface IProfessionApi {
  /** 获取职业说明列表 */
  getProfessionList: (data?: any) => Promise<any>;
  /** 查询职业说明详情 */
  getProfessionDetail: (data?: { id: string }) => Promise<ISaveProfessionData>;
}

export default {
  /** 获取职业说明列表 */
  getProfessionList: async (data?: any) => {
    return http.get({ url: '/profession/list', data });
  },
  /** 查询职业说明详情 */
  getProfessionDetail: async (data?: { id: string }) => {
    return http.get<ISaveProfessionData>({ url: '/profession/detail', data });
  }
};
