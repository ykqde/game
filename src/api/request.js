
import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router/index'
// const METHOD = {
//     // URL: "	http://127.0.0.1:4523/mock/374473"
//     URL:"https://www.weisou.online"
// }

// 构建axios实例
const instance = axios.create({
    baseURL: "http://192.168.50.18:6899",
    // baseURL: "http://ezdsgt.natappfree.cc/chinastyle",
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    timeout: 100000  // 设置请求超时连接时间
})


// 请求拦截
instance.interceptors.request.use(
    (config) => {
        // 指定请求令牌
        if (localStorage.getItem('chtoken')) {
            config.headers["Token"] = localStorage.getItem('chtoken');
        }
        // // 自定义令牌的字段名为X-Token，根据咱们后台再做修改
        return config;
    },
    (error) => {
        // 请求错误的统一处理
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// // 响应拦截器
instance.interceptors.response.use(
    /**
     * 通过判断状态码统一处理响应，根据情况修改
     * 同时也可以通过HTTP状态码判断请求结果
     */
    (response) => {
        const res = response.data;
        //  console.log(res.code==200)
        //异地登录
        if (res.code == -1) {
            console.log("走到这里来了？");
            router.push("/home");
        }
        // 如果状态码不是200则认为有错误
        if (res.code != 200) {
            if (res.message == '文件已存在') {
                Message.error({
                    message: res.msg || "文件已存在",
                    duration: 5 * 1000,
                });
            } else {
                Message.error({
                    message: res.msg || "Error",
                    duration: 5 * 1000,
                });
            }

            // return Promise.reject(new Error(res.message || "Error"));
        } else {
            return res;
        }
    },
    (error) => {
        Message({
            message: error.message,
            type: "error",
            duration: 20 * 1000,
        });
        return Promise.reject(error);
    }
);


// * 网络请求
// * @param method 方法
// * @param url 接口地址
// * @param params 参数
// * @param showError 是否展示错误信息
// * @returns {Promise<any>}
async function getHttp(url, params, showError) {
    if (showError || showError == undefined) { // 是否展示错误信息
        showError = true;
    } else {
        showError = false;
    }
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'get',
            params: params
        }).then((res) => {
            if (res.code == 200) { // 200 是请求成功
                resolve(res);
            } else { // 其他情况返回错误信息，根据需要处理
                reject(res);
                if (showError) {

                    Message.error(res.msg);
                }
            }
        }).catch(() => {
            if (showError) {
                // Message.error('请求失败，请稍后再试');
            }
        })
    })
}

async function postHttp(url, params, showError) {
    if (showError || showError == undefined) { // 是否展示错误信息
        showError = true;
    } else {
        showError = false;
    }
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'post',
            params: params
        }).then((res) => {
            if (res.code == 200) { // 200 是请求成功
                // console.log('picpipcpic')
                resolve(res);
            } else { // 其他情况返回错误信息，根据需要处理
                reject(res);
                if (showError) {
                    Message.error(res.data.msg);
                }
            }
        }).catch(() => {
            if (showError) {
                // Message.error('请求失败，请稍后再试');
            }
        })
    })
}




function install(Vue) {
    // Vue.prototype.imgUrl = 'https://www.weisou.online/zas/upload/'
    Vue.prototype.$getHttp = getHttp;
    Vue.prototype.$postHttp = postHttp;
    // Vue.prototype.$imgUrl = "http://hqww.cn.utools.club/upload/";
    // Vue.prototype.$upLoad = "https://wwcb.cn.utools.club/chinastyle"
    // Vue.prototype.$imgUrl = "http://10.141.116.187:8080/upload/";
    // Vue.prototype.$upLoad = "http://10.141.116.187:8080/chinastyle"

}
export default install