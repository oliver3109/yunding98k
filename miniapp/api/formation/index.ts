import http from '../../utils/http';

export interface IFormation {
  updateAt: string;
  setId: string;
  setVersionId: string;
  name: string;
  nameCn: string;
  tier: string;
  basicInfo: string;
  whenToMake: string;
  coreChampions: any[];
  championOptions: any[];
  carouselPriority: any[];
  formation: any[];
  levelingGuide: any[];
  gamePlan: any[];
  compTips: any[];
  likeCount: number;
  setSpecialRules: Record<string, any>;
  synergies: any[];
}

export interface IFormationApi {
  /** 查询阵容列表 */
  getFormationList: (data?: any) => Promise<Array<IFormation>>;
  /** 查询阵容详情 */
  getFormationDetail: (data?: any) => Promise<IFormation>;
}

export default {
  /** 查询阵容列表 */
  getFormationList: async (data?: any) => {
    return http.get<Array<IFormation>>({ url: '/formation/list', data });
  },
  /** 查询阵容详情 */
  getFormationDetail: async (data?: any) => {
    return http.get<IFormation>({ url: '/formation/detail', data });
  }
};
