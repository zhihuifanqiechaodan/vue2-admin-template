import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getCookieItem } from './storage-service'

const service = axios.create({
    timeout: 1000 * 60 // request timeout
})

service.interceptors.request.use(
    config => {
        // do something before request is sent

        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = getCookieItem('Admin-Toke')
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        console.log(response);
        const res = response.data
        // 如果返回的result不是ok
        if (!res.success) {
            Message({
                message: res.errors[0].error_msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return false
        } else {
            return res.result
        }
    },
    error => {
        console.log(error.response);
        const err = error.response.data
        Message({
            message: `网络错误：${err.errors[0].error_msg}`,
            type: 'error',
            duration: 5 * 1000
        })
        return false
    }
)

export default service