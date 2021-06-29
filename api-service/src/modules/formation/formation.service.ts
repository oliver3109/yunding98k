import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, In, Repository } from 'typeorm';
import { BaseService } from '../base.service';
import {
  Champion,
  ChampionOrigin,
  ChampionProfession,
} from '../champion/champion.entity';
import { ItemEntity, ItemFitting } from '../item/item.entity';
import { OriginEntity } from '../origin/origin.entity';
import { ProfessionEntity } from '../profession/profession.entity';
import {
  FormationDetailDto,
  QueryFormationDto,
  SaveFormationDto,
} from './formation.dto';
import { FormationEntity } from './formation.entity';

@Injectable()
export class FormationService extends BaseService {
  constructor(
    @InjectRepository(FormationEntity)
    private formationRepo: Repository<FormationEntity>,
    @InjectRepository(Champion)
    private championRepo: Repository<Champion>,
    @InjectRepository(ChampionProfession)
    private championProfessionRepo: Repository<ChampionProfession>,
    @InjectRepository(ChampionOrigin)
    private championOriginRepo: Repository<ChampionOrigin>,
    @InjectRepository(OriginEntity)
    private originRepo: Repository<OriginEntity>,
    @InjectRepository(ProfessionEntity)
    private professionRepo: Repository<ProfessionEntity>,
    @InjectRepository(ItemEntity)
    private itemEntityRepo: Repository<ItemEntity>,
    @InjectRepository(ItemFitting)
    private itemFittingRepo: Repository<ItemFitting>,
    private conn: Connection,
  ) {
    super();
  }

  /**
   * 获取列表
   * @returns 阵容列表
   */
  async findAll(): Promise<QueryFormationDto[]> {
    const { setId, setVersionId } = await this.$getLatestSetAndVersion(
      this.conn,
    );
    const formationList = await this.conn.query(`
      select id,
        name,
        name_cn as nameCn,
        set_id as setId,
        tier as tier,
        set_version_id as setVersionId,
        set_special_rules as setSpecialRules,
        basic_info as basicInfo,
        when_to_make as whenToMake,
        carousel_priority as carouselPriority,
        formation,
        core_champions as coreChampions,
        leveling_guide as levelingGuide,
        champion_options as championOptions,
        game_plan as gamePlan,
        comp_tips as compTips,
        like_count as likeCount,
        CASE tier
          WHEN 'S' THEN 0
          WHEN 'A' THEN 1
          WHEN 'B' THEN 2
        ELSE 4 END \`level\`
      from formation 
        where is_deleted = 0 and set_id = '${setId}' and set_version_id = '${setVersionId}'
        ORDER BY \`level\` asc
    `);
    const result: QueryFormationDto[] = [];
    for (const formation of formationList) {
      const data = await this.formationProcess(formation);
      result.push(data);
    }
    return result;
  }

  /**
   * 获取阵容详情
   * @param uuid 阵容uuid
   * @returns 阵容详情
   */
  async findOne(uuid: string): Promise<QueryFormationDto> {
    const formation = await this.formationRepo.findOne({ id: uuid });
    return await this.formationProcess(formation);
  }

  /**
   * 编队处理
   * @param {QueryFormationDto} formation
   */
  private async formationProcess(
    formation: QueryFormationDto,
  ): Promise<QueryFormationDto> {
    formation.carouselPriority = JSON.parse(
      this.util.string.transSpecialChar(formation.carouselPriority),
    );
    formation.championOptions = JSON.parse(
      this.util.string.transSpecialChar(formation.championOptions),
    );
    formation.compTips = JSON.parse(
      this.util.string.transSpecialChar(formation.compTips),
    );
    formation.gamePlan = JSON.parse(
      this.util.string.transSpecialChar(formation.gamePlan),
    );
    formation.coreChampions = JSON.parse(
      this.util.string.transSpecialChar(formation.coreChampions),
    );
    formation.setSpecialRules = JSON.parse(
      this.util.string.transSpecialChar(formation.setSpecialRules),
    );
    formation.levelingGuide = JSON.parse(
      this.util.string.transSpecialChar(formation.levelingGuide),
    );

    const formationArr: Champion[] = JSON.parse(
      this.util.string.transSpecialChar(formation.formation),
    );
    formation.formation = formationArr as any;
    const championIdList = [];
    for (const champion of formationArr) {
      if (champion) {
        championIdList.push(`'${champion.id}'`);
      }
    }
    // 协同数据
    let synergies = [];
    if (championIdList.length > 0) {
      synergies = await this.conn.query(`( SELECT
      count(*) AS count,
      'origin' as type,
      o.id,
      o.\`name\`,
      o.name_cn,
      o.extra_data
      FROM
        champion_origin co,
        origin o 
      WHERE
        co.origin_id = o.id 
        AND co.champion_id IN ( ${championIdList.join(',')} ) 
      GROUP BY
        o.id 
      ) UNION ALL
      (
      SELECT
        count(*) AS count,
        'profession' as type,
        p.id,
        p.\`name\`,
        p.name_cn,
        p.extra_data
      FROM
        champion_profession cp,
        profession p 
      WHERE
        cp.profession_id = p.id 
        AND cp.champion_id IN ( ${championIdList.join(',')} ) 
      GROUP BY
      p.id 
      )`);
    }

    const data: QueryFormationDto = {
      ...formation,
    };
    data.synergies = synergies;
    return data;
  }

  /**
   * 新增阵容
   * @param ChampionDto 阵容
   */
  async add(saveFormationDto: SaveFormationDto) {}

  /**
   * 更新阵容
   * @param ChampionDto 阵容
   */
  async update(saveFormationDto: SaveFormationDto) {}
}
