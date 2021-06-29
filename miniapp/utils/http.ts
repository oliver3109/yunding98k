import * as md5 from 'md5';
import { Http } from '../core/interfaces/index';

const BASE_URL = false
  ? 'http://localhost:38080/api'
  : 'https://www.manito.fun/prod-api';

const HEADER_TEMPLATE = {
  'x-requested-with': 'XMLHttpRequest',
  'content-type': 'application/json;charset=UTF-8'
};

const _baseRequest = <T>(requestData: Http.RequestData): Promise<T> => {
  return new Promise<T>(function (resolve, reject) {
    const timestamp = new Date().getTime();
    const _tk_ = '_oliver_gx_';
    const sign = md5(_tk_ + timestamp);
    wx.request({
      url: BASE_URL + requestData.url,
      method: requestData.method,
      data: { ...requestData.data, timestamp },
      header: Object.assign(HEADER_TEMPLATE, requestData.header, {
        sign
      }),
      success(res) {
        const data = res.data as Http.ResponseData;
        if (res.statusCode != 200) {
          wx.showToast({
            title: `网络错误, 错误码: ${res.statusCode}`,
            icon: 'none',
            duration: 2000
          });
          return;
        } else {
          if (data.code == 0) {
            resolve(data.data as T);
            return;
          }
          if (data.code == -1) {
            wx.showToast({
              title: data.message,
              icon: 'none',
              duration: 2000
            });
            reject(data);
          }
        }
      },
      fail(err) {
        wx.showToast({
          title: err.errMsg,
          icon: 'none',
          duration: 2000
        });
        reject(err);
      }
    });
  });
};

const get = async <T>(param: {
  url: string;
  data?: Record<string, any>;
}): Promise<T> => {
  return await _baseRequest<T>({
    method: 'GET',
    url: param.url,
    data: param.data,
    header: { 'content-type': 'application/json;charset=UTF-8' }
  });
};

const post = async <T>(param: {
  url: string;
  data?: Record<string, any>;
}): Promise<T> => {
  return await _baseRequest<T>({
    method: 'POST',
    url: param.url,
    data: param.data,
    header: { 'content-type': 'application/json;charset=UTF-8' }
  });
};

export default {
  get,
  post
};
