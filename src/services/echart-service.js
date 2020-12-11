import { request } from '@/utils/httpclient-service'

import {
    API_ECHART
} from '@/config'

/**
 * @method getEchartList echart图表数据
 */
function getEchartList() {
    return request.get(API_ECHART + '/list')
}

export default {
    getEchartList
}