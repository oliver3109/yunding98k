import date, { IDateUtil } from './date';
import string, { IStringUtil } from './string';

export interface IUtil {
  date: IDateUtil;
  string: IStringUtil;
}

export default { date, string };
