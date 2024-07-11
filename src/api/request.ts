// import { message } from 'antd';
import axios, { AxiosInstance, AxiosResponse } from "axios";
// import * as localforage from 'localforage';
// import { logOut } from '@/service/auth';

import { getToken, logoutCleanup as logOut, logoutCleanup } from "@/utils";
import { ErrCode, Res } from "@/interface";
import { message } from "antd";
import { c2s, s2c } from "@/utils";
import { reject } from "lodash";
// import Alert from 'react-bootstrap/Alert'

export const codeMessage = {
  // 200: '服务器成功返回请求的数据。',
  // 201: '新建或修改数据成功。',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  // 204: '删除数据成功。',
  // 400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  400: "账号或密码错误，请确认后重新输入",
  // 403: '用户得到授权，但是访问是被禁止的。',
  // 404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  // 406: '请求的格式不可得。',
  // 410: '请求的资源被永久删除，且不会再得到的。',
  // 422: '当创建一个对象时，发生一个验证错误。',
  // 500: '服务器发生错误，请检查服务器。',
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
  400000: "登录已过期，请重新登录!",
  400001: "您的角色发生变更，请重新登录！",
  400002: "您的审核发生变更，请重新登录！",
  300102: "该账号已被禁用，如需继续使用，请与我们联系",
};

// 需要弹框处理的错误码（不走message统一提示）
export const stopRunCode = 500300;
export const errorModalCode = [
  300301,
  300401,
  300501,
  300502,
  300405,
  300110,
  stopRunCode,
];
export const tokenError = [400000, 400001, 400002, 300102, 300801];
// 验证次数限制错误码
const timeLimitCode = [300205];
// todo 需要确认下网络相关的非业务错误是否处理了
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    // validateStatus: () => true, // 不管返回的 http 状态码是多少，都不抛出错误，在响应拦截器中进行处理
  });

  // 请求拦截器
  instance.interceptors.request.use(async (config) => {
    const token = getToken();

    config.headers["Authorization"] = `Bearer ${token}`;

    // config.headers = {
    //   ...config.headers,
    //   Authorization: `Bearer ${token}`,
    // };
    // 如果后端接口，接口的 key 使用的是【蛇形】规范的话，就转换一下
    config.data = c2s(config.data);
    config.params = c2s(config.params);

    return config;
  });

  // 响应拦截器
  instance.interceptors.response.use(
    (res: AxiosResponse<Res, any>) => {
      const { responseType } = res?.config || {};

      console.log("res.status", res.status);

      if (res.status != 200) {
        Promise.reject(res.data);
      }

      const data = s2c(res.data);
      // 适配返回数据结构中无meta层的情况
      if (res.status === 200 && !data.meta) {
        return data;
      }
      // 存在meta， 判断业务code
      if (
        res.status === 200 &&
        data.meta &&
        data.meta.errCode !== ErrCode.Success
      ) {
        const err_code = data.meta.errCode;

        if (tokenError.includes(err_code)) {
          if (err_code == 40000) {
            logoutCleanup();
          } else if (timeLimitCode.includes(err_code)) {
            message.error(data.meta.errMsg);
          }

          // errCode 不为 success 的情况，说明后端返回了一个业务错误
          // message.error(data.errorInfo || '未知错误，请联系管理员');
          // 将业务错误往外抛，打断正常代码执行，或者被 try catch 捕获
          throw data;
        }
      }

      // 正常返回
      if (responseType === "blob") return res;

      // 此时 errCode 为 success，不管状态码或其他数据怎么样，都默认为请求成功
      return { ...res, data };
    },
    (exception) => {
      //offLine
      if (exception instanceof Error) {
        console.log(exception.message, "exception instanceof Error");
      }

      if (exception.message) {
        message.destroy();
        message.error(exception.message);
      }
      return Promise.reject(exception);
    }
  );

  return instance;
};

export class Api {
  protected readonly axios = createAxiosInstance();
}
