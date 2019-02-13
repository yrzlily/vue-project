import axios from 'axios';
import router from '@/router';
import 'vue2-toast/lib/toast.css';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://127.0.0.1/api';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.interceptors.request.use(
  request  =>{
    
    request.headers = {
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Credentials'  :true,
    }

    if(localStorage.getItem('token')){
      request.headers.token = localStorage.getItem('token');
    }
    return request;
  },
  error =>{
    return error;
  }
);

axios.interceptors.response.use(
  response  =>{

    if(response.data.code == 0){

      localStorage.removeItem('token');
    }

    if(response.status != 200){
      
    }

    return response.data;
  },
  error =>{
    switch(error.response.status){
      case 401:
        router.push({
          name: 'Login',
          params: {
            login:1
          }
        });
        break;

    }
    return new Promise(() => {});
  }
);

function apiAxios(method, url, params, response) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}
  
export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}