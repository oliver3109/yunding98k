/**
 * 日期格式化
 * @param time
 * @param cFormat
 */
const parseTime = (
  time?: object | string | number,
  cFormat?: string
): string => {
  if (time == undefined || time == null) {
    return '';
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
    a: date.getDay()
  };
  const timeStr = format.replace(/{([ymdhisa])+}/g, (_result, key) => {
    const value = formatObj[key];
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return timeStr;
};

/**
 * 处理时间 转换成 => 刚刚，一分钟前，前几天
 * @param date
 */
const getDateDiff = (date: string) => {
  const t = new Date(date).getTime();
  const nowDateTime = new Date();
  const leadTime = nowDateTime.getTime() - t;
  const lastMsgDate = new Date(date);

  // x(列表显示时间) = y(当前时间) - z(收到消息时间)。x的显示，均采用12小时制。
  // 1.收到消息的时间与当前时间在同一天，且间隔小于等于一分钟  「y(Y.M.D)=z(Y.M.D)，0min<x<=1min，x取分钟值」。显示格式：刚刚。
  // 2.收到消息的时间与当前时间在同一天，但间隔在1分钟到60分钟之间  「y(Y.M.D)=z(Y.M.D)，1min<x<60min，x取分钟值」。显示格式：x分钟前。
  // 3.收到消息的时间与当前时间在同一天，但间隔大于等于60分钟  「y(Y.M.D)=z(Y.M.D)。显示格式：上午 10:20。
  // 4.收到消息的时间是当前时间的前一天  「y(Y.M)=z(Y.M)，y(D)-z(D)=1」。显示格式：昨天。
  // 5.收到消息的时间是当前时间的前二到六天  「y(Y.M)=z(Y.M)，7>y(D)-z(D)>1」。显示格式：星期三。
  // 6.收到消息的时间早于当前时间的前七天  「y(Y.M.D)>z(Y.M.D)，y(D)-z(D)>=7」。显示格式：10/23。
  // 7.收到消息的时间与当前时间不在同一自然年  「y(Y)>z(Y)」。显示格式：2019/01/17 (YYYY/MM/DD)。

  const yesterday = new Date();
  yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000);
  const aWeekAgo = new Date();
  aWeekAgo.setTime(aWeekAgo.getTime() - 24 * 60 * 60 * 1000);

  let resultDateTimeStr = '';
  if (nowDateTime.getFullYear() != lastMsgDate.getFullYear()) {
    resultDateTimeStr = `${lastMsgDate.getFullYear().toString()}/${(
      lastMsgDate.getMonth() + 1
    ).toString()}/${lastMsgDate.getDate().toString()}`;
  } else if (aWeekAgo.getTime() - t > 0) {
    resultDateTimeStr = `${(
      lastMsgDate.getMonth() + 1
    ).toString()}/${lastMsgDate.getDate().toString()}`;
  } else if (yesterday.getTime() - t > 0) {
    const weekMap = [
      '星期天',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    resultDateTimeStr = weekMap[lastMsgDate.getDay()];
  } else if (
    yesterday.getFullYear() == lastMsgDate.getFullYear() &&
    yesterday.getMonth() == lastMsgDate.getMonth() &&
    yesterday.getDate() == lastMsgDate.getDate()
  ) {
    resultDateTimeStr = '昨天';
  } else if (
    nowDateTime.getFullYear() == lastMsgDate.getFullYear() &&
    nowDateTime.getMonth() == lastMsgDate.getMonth() &&
    nowDateTime.getDate() == lastMsgDate.getDate()
  ) {
    if (leadTime < 1000 * 60) {
      resultDateTimeStr = '刚刚';
    } else if (leadTime >= 60 * 1000 && leadTime < 60 * 1000 * 60) {
      const m = Math.round(leadTime / (60 * 1000));
      resultDateTimeStr = `${m}分钟前`;
    } else {
      if (lastMsgDate.getHours() < 12) {
        resultDateTimeStr =
          '上午 ' +
          lastMsgDate.getHours().toString() +
          ':' +
          lastMsgDate.getMinutes().toString();
      } else {
        resultDateTimeStr =
          '下午 ' +
          (lastMsgDate.getHours() - 12).toString() +
          ':' +
          lastMsgDate.getMinutes().toString();
      }
    }
  }
  return resultDateTimeStr;
};

export interface IDateUtil {
  parseTime: (time?: object | string | number, cFormat?: string) => string;
  getDateDiff: (date: string) => string;
}

export default {
  parseTime,
  getDateDiff
};
