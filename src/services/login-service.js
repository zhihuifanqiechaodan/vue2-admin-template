import { request } from '@/utils/httpclient-service'

import {
    API_LOGIN
} from '@/config'

/**
 * @method addLogin 用户登录
 */
function addLogin(data) {
    return request.post(API_LOGIN, data)
}

export default {
    addLogin
}