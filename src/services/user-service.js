import { request } from '@/utils/httpclient-service'

import {
    API_USER
} from '@/config'

/**
 * @method addLogin 用户登录
 * @param {*} data 登录信息
 */
function addUserLogin(data) {
    return {
        token: "token"
    }
    return request.post(API_USER + '/login', data)
}

/**
 * @method getUserInfo 获取用户信息
 * @param {*} param0 token
 */
function getUserInfo({ token }) {
    return Promise.resolve({ roles: ["admin"], name: "番茄", avatar: "", introduction: "只会番茄炒蛋" })
    return request.get(API_USER + '/info', { params: { token } })
}

export default {
    addUserLogin,
    getUserInfo
}