import axios from 'axios'
import { config } from 'shelljs';
// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000
})
// axios实例默认配置
api.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.transformRequest = data => {
  return JSON.stringify(data)
}
// 返回状态拦截，进行状态的集中判断
api.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res)
    // 请求成功
    if (res.code === 0) {
      return Promise.resolve(res.data)
    }
    else {
      // 内部错误码处理
      if (res.code == 1) {
        console.error(res.message || '错误状态码：1')
      }
      else {
        console.error(res)
        console.error(res.message || '其它错误')
      }
      return Promise.reject(res);
    }
  },
  error => {
    if(/timeout\sof\s\d+ms\sexceeded/.test(error.message)){
      console.error('网络超时！')
    }
    if(error.response){
      // http状态码判断
      switch(error.response.status){
        case 404:
          console.error('404,请求资源不存在！');
          break;
        case 500:
          console.error('500,服务器内部错误');
          break;
        case 503:
          console.error('503,服务器正在维护！');
          break;
      }
    }
    return Promise.reject(error.response)
  }
)

// get请求
const get = (url,params,config={})=>api.get(url,{...config,params})
// delete请求,防止关键词冲突，用deletes
const deletes = (url,params,config={})=>api.delete(url,{...config,params})
// post请求
const post = (url,params,config={})=>api.post(url,params,config)
// put请求
const put = (url,params,config={})=>api.put(url,params,config)

export default {
  get,
  deletes,
  post,
  put
}