/*
 * @Description:
 * @Auth: Oliver <81092048@qq.com>
 * @Copyright: 2019 智慧校友前端团队
 * @Date: 2020-12-20 16:29:52
 * @FilePath: /auto-chess-pc/api-service/src/modules/base.service.ts
 */

import { v4 as uuidv4 } from 'uuid';
import util from '../utils/index';

export class BaseService {
  protected util = util;

  protected getUUID() {
    return uuidv4();
  }

  protected $getNowDateTime() {
    return this.util.date.parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}');
  }

  /**
   * 获取最新的赛季版本ID
   * @param conn
   */
  protected async $getLatestSetAndVersion(conn: any) {
    const set = await conn.query(
      `select id from \`set\` order by create_at desc LIMIT 1`,
    );
    const setId = set[0].id;
    const setVersion = await conn.query(`select id from set_version where set_id = (
          '${setId}'
          ) order by create_at desc LIMIT 1`);
    const setVersionId = setVersion[0].id;
    return {
      setId,
      setVersionId,
    };
  }
}
