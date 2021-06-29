type success = 0;
type fail = -1;
type tokenIllegal = -997;
type tokenExpire = -998;
type unconcerned = -999;

export interface HttpResponse {
  code: success | fail | tokenIllegal | tokenExpire | unconcerned;
  message?: string;
  data?: any;
}
