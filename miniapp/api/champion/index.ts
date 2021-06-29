import http from '../../utils/http';

/**
 * 英雄新增/更新数据结构
 */
interface ISaveChampionData {
  id?: string;
  createAt?: string;
  updateAt?: string;
  isDeleted?: 0 | 1;
  setId?: string;
  name?: string;
  nameCn?: string;
  titleCn?: string;
  avatar?: string;
  bgImg?: string;
  cost?: number;
  health?: string;
  attackDamage?: string;
  dps?: string;
  attackRange?: string;
  attackSpeed?: string;
  armor?: string;
  magicalResistance?: string;
  skillImg?: string;
  skillName?: string;
  skillType?: '被动' | '主动';
  skillDesc?: string;
  skillExtraData: Record<string, any>;
  skillExtraList: Array<any>;
  professionIds?: string[];
  originIds?: string[];

  quality: Array<any>;
  consume: string;
  originList: Array<any>;
  professionList: Array<any>;
}

export interface IChampionApi {
  /** 获取英雄列表 */
  getChampionList: (data?: any) => Promise<any>;
  /** 查询英雄详情 */
  getChampionDetail: (data?: { id: string }) => Promise<ISaveChampionData>;
}

export default {
  /** 获取英雄列表 */
  getChampionList: async (data?: any) => {
    return http.get({ url: '/champion/list', data });
  },
  /** 查询英雄详情 */
  getChampionDetail: async (data?: { id: string }) => {
    return http.get<ISaveChampionData>({ url: '/champion/detail', data });
  }
};
