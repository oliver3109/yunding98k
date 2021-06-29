import { HttpResponse } from '../interfaces/httpResponse';

export class BaseController {
  /**
   * 返回http数据
   * @param httpResponse
   */
  private returnHttpResponse(httpResponse: HttpResponse) {
    return httpResponse;
  }

  protected returnSuccess(message = 'ok', data?: any) {
    return this.returnHttpResponse({ code: 0, message, data });
  }

  protected returnFail(message = '服务器异常', data?: any) {
    return this.returnHttpResponse({ code: -1, message, data });
  }
}
