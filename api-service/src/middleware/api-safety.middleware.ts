import { Request, Response } from 'express';
import * as md5 from 'md5';

const _tk_ = '_oliver_gx_';

/**
 * 接口安全
 * @param req
 * @param res
 * @param next
 */
export const apiSafetyMiddleware = function (
  req: Request,
  res: Response,
  next: Function,
) {
  console.log('拦截到请求，校验请求是否合法 loading ...');
  const sign = req.header('sign');
  const timestamp = req.query.timestamp || req.params.timestamp;
  console.log(`签名: ${sign} | 时间戳: ${timestamp}`);
  if (timestamp && timestamp.toString().length > 15) {
    console.log(`时间戳非法 error！`);
    return res.status(200).json({ code: -1, message: '服务器异常' });
  }
  if (sign && md5(_tk_ + timestamp) === sign) {
    console.log(`签名合法 success！`);
    next();
    return;
  }
  console.log(`签名非法 error！`);
  return res.status(200).json({ code: -1, message: '服务器异常' });
};
