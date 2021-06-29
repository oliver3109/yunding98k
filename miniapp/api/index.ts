import champion, { IChampionApi } from './champion/index';
import item, { IItemApi } from './item/index';
import set, { ISetApi } from './set/index';
import profession, { IProfessionApi } from './profession/index';
import origin, { IOriginApi } from './origin/index';
import formation, { IFormationApi } from './formation/index';

export interface IApi {
  champion: IChampionApi;
  item: IItemApi;
  set: ISetApi;
  profession: IProfessionApi;
  origin: IOriginApi;
  formation: IFormationApi;
}

export default { champion, item, set, profession, origin, formation };
