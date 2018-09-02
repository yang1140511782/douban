/**
 * 豆瓣模块接口列表
 * 也可以配置多个模块，只需要在index中引入使用即可
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

/**
 * 默认url,已经设置proxy
 */
axios.defaults.baseURL = '/db'; 

/**
 * 模块api，也可以创建其他js文件，可以分为多个模块
 */
const article = {
    //豆瓣首页
    dbHome (params) {
        return axios.get(`/rexxar/api/v2/recommend_feed?`, qs.stringify(params));
    },
    //影院热映
    HotMovie(params){
        return axios.get(`/rexxar/api/v2/subject_collection/movie_showing/items`, {params: params});
    }, 
    // 新闻详情,演示    
    articleDetail (id, params) {        
        return axios.get(`${base.sq}/topic/${id}`, {            
            params: params        
        });    
    },
    // post提交    
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    }
    // 其他接口…………
}

export default article;