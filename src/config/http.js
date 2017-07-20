import axios from 'axios'

axios.defaults.timeout = 50000;
axios.defaults.headers['Cache-Control'] = 'no-cache'
// http request 拦截器
axios.interceptors.request.use((config) => {
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
      this.$router.push('/salseCompetitivePro');
    }
    return response;
  },
  error => {
    if (error) {

    }
    return Promise.reject(error) // 返回接口返回的错误信息
  });
// axios.defaults.baseURL = 'http://localhost:8190';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = function (data) {
// // Do whatever you want to transform the data
//   let ret = ''
//   for (let it in data) {
//     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//   }
//   return ret
// }
console.log('axios配置文件执行了');
export default axios
