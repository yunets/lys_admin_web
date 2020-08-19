/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import globalConstant from '@/globalConstant';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const requestWithExtend = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  mode: 'cors',
});

/**
 * 封装一次request，使response可以统一校验后使用
 * 前后端联调的时候，需要将prefix及service地址跳转cas相关代码放开
 */
const request = async (url: string, option: any = {}) => {
  const result = await requestWithExtend(url, {
    getResponse: true,
    ...option,
    prefix: globalConstant.researchRestServiceUrl,
  });
  // result.response.headers.set
  // 携带service地址跳转到cas的登陆页面
  debugger;
  if (result) {
    const response = result.response;
    if (response.headers.get('casRedirect') === 'login') {
      window.location.href =
        globalConstant.casLoginUrl +
        encodeURIComponent(
          globalConstant.researchRestServiceUrl + globalConstant.researchCasCallbackUrl,
        );
    } else if (response.headers.get('casRedirect') === 'logout') {
      localStorage.clear();
      window.location.href = globalConstant.researchRestServiceUrl + '/logout';
    }
    // 在此统一处理response前面的逻辑
    return result.data;
  } else {
    return null;
    window.location.href = globalConstant.researchRestServiceUrl + '/logout';
  }

};


export default request;
