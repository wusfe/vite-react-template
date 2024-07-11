export * from './c2s';
export * from './format';
import * as AES from 'crypto-js';
export * from './md5';
export * from './apk';
import _ from 'lodash';
export * from './internal';
import Base64 from 'crypto-js/enc-base64';

const key = AES.enc.Utf8.parse('QWasd@!ER7812!#$'); //十六位十六进制数作为密钥
const iv = AES.enc.Utf8.parse('QWasd@!ER7812!#$'); //十六位十六进制数作为密钥偏移量
// 加密
export const encrypt = (word: string) => {
  const src = AES.enc.Utf8.parse(word);
  const encrypted = AES.AES.encrypt(src, key, { iv, mode: AES.mode.CBC, padding: AES.pad.Pkcs7 });
  return Base64.stringify(encrypted.ciphertext);
};
export const getAppName = (appInfo: any) => {
  if (!appInfo) return;
  if (_.isArray(appInfo?.application?.label) && appInfo?.application?.label?.length > 0)
    return appInfo?.application?.label[0];
  if (_.isString(appInfo?.application?.label) && appInfo?.application?.label?.length > 0)
    return appInfo?.application?.label;
  return '';
};
export const urlValidator = (rule: any, value: string, callback: any) => {
  const reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
  if (!reg.test(value)) {
    callback('请输入正确的URL');
  } else {
    callback();
  }
}
export const parseUrl = (url: string) => {
  if (url.indexOf('?') !== -1) {
    const query = url.split('?')[1];
    const queryList = query.split('&');
    const obj: any = {};
    queryList.forEach((item) => {
      const [key, value] = item.split('=');
      obj[key] = decodeURIComponent(value);
    });
    return obj;
  }
  return {};
};
