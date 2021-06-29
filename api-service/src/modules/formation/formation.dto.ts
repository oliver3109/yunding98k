import { FormationEntity } from './formation.entity';

export class SaveFormationDto {}
export class FormationDetailDto {}

export class QueryFormationDto extends FormationEntity {
  synergies?: Array<any>;
}
