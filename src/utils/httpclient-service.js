import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getCookieItem } from './storage-service'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000 * 60 // request timeout
})

request.interceptors.request.use(
    config => {
        // do something before request is sent

        if (store.getters.token) {
            // let each request carry token
            // ['Fanqie-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['Fanqie-Token'] = getCookieItem('Fanqie-Token')
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
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
        const res = response.data
        const { code, data } = res
        // if the custom code is not 20000, it is judged as an error.
        if (code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (code === 50008 || code === 50012 || code === 50014) {
                // to re-login
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(false) // error all return false
        } else {
            return data
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(false) // error all return false
    }
)

export {
    request
}