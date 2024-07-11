export interface MetaData {
  err_msg: string;
  err_code: number;
}
export interface Res<T = Record<string, unknown>> {
  meta: MetaData;
  data: T;
}

// 带分页的数据
export interface DWithP<T> {
  pn: number;
  ps: number;
  total: number;
  data: T[];
}

// 业务错误码
export enum ErrCode {
  Success = 0,

  // token 相关错误码
  TokenEmpty = 2000_0001,
  TokenExpired = 2000_0002,
  TokenInvalid = 2000_0003,
}
export interface appListReqProps {
  province: string;
  city: string;
  company: string;
  apk_name: string;
  category: string;
  risk_type_list: string;
  download_cnt_interval: string;
  mau_interval: string;
  pn: string;
  ps: string;
  risk_type: string;
  level?: number;
}
export interface getCaptchaResProps {
  captcha: string;
  captchaId: string;
}
export interface queryProvinceListResProps {
 id: number;
 name: string
}
export interface appListResProps {
 data: [];
 total: number;
}
export interface queryCityReqProps {
  province_id: string
}
export interface queryCompanyAndAppListReqProps {
  app_name: string
}
export interface queryCompanyReqProps {
  company: string
}
export interface queryStatisticsReqProps {
  province: string;
  pn: string;
  ps: string;
  risk_type: string;
  city: string;
  level?: number;
}
export interface queryStatisticsResProps {
  companyTotal: number;
  riskCompanyTotal: number;
  riskTotal: number;
  total: number;
}
export interface queryRiskListReqProps {
  apk_name: string;
  risk_type: string;
}
export interface queryRiskListResProps {
  id: number;
  releaseTime: string;
  type: string;
  versionName: string;
}
export interface queryRiskDetailReqProps {
  id: number;
}
export interface getCaptchaResProps {
  captcha: string;
  captcha_id: string;
  captchaId: string;
}

export interface changeStarStatusProps {
  apkName: string;
}
