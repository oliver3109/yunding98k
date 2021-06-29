/*
 * @Description:
 * @Auth: Oliver <81092048@qq.com>
 * @Copyright: 2019 智慧校友前端团队
 * @Date: 2020-12-20 16:34:41
 * @FilePath: /auto-chess-pc/api-service/src/utils/date.ts
 */

const parseTime = (
  time?: object | string | number,
  cFormat?: string,
): string | null => {
  if (time == undefined || time == null) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date: Date;
  if (typeof time === 'object') {
    date = time as Date;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    // 解决苹果浏览器 日期 NaN 的问题
    if (typeof time === 'string' && (time as string).includes('-')) {
      time = (time as string).replace(/-/g, '/');
    }
    date = new Date(time);
  }
  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return timeStr;
};

export interface IDateUtil {
  parseTime: (
    time?: object | string | number,
    cFormat?: string,
  ) => string | null;
}

export default { parseTime };
