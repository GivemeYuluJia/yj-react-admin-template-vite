// * 请求响应参数(不包含data)
export interface Result {
  code: string;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
}
