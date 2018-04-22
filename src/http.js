/**
*http配置
*/

import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'

axios.defaults.timeout=5000;
axios.defaults.baseURL='';

// http request 拦截器
axios.interceptors.request.use(
	config=>{
		if(store.state.token){
			config.headers.Authorization= `token ${store.state.token}`;
		}
		return config;
	},
	error=>{
		return Promise.reject(error);
	}
	);

// http response 拦截器
axios.interceptors.response.use(
	response=>{
		return response;
	},
	error=>{
		if(error.response){
			switch(error.response.status){
				case 401:
				// 401 清除token信息并跳转到登录页面
				store.commit(types.LOGOUT);
				router.replace({
					path:'login',
					query:{redirect:router.currentRoute.fullPath}
				})
			}
		}
		return Promise.reject(error.response.data)
	}

	);

export default axios;
