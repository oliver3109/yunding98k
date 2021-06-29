/**
 * 过滤特殊字符串
 * @param {String} str 字符串
 */
const transSpecialChar = (str: string) => {
  if (str != undefined && str != '' && str != 'null') {
    str = str.replace(/\r/g, '\\r');
    str = str.replace(/\n/g, '\\n');
    str = str.replace(/\t/g, '\\t');
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/"\[{/g, '[{');
    str = str.replace(/}]"/g, '}]');
    str = str.replace(/"{"/g, '{"');
    str = str.replace(/"}"/g, '"}');
    str = str.replace(/\'/g, '&#39;');
    str = str.replace(/</g, '$lt;');
    str = str.replace(/>/g, '$gt;');
  }
  return str;
};

export interface IStringUtil {
  transSpecialChar: (str: string) => string;
}

export default { transSpecialChar };
