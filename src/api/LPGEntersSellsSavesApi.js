// 进销存API接口
import _axios from '@/config/http'
import { config } from '@/config/config'

export default class LPGEntersSellsSavesApi {
  static findCyCylinderQrcode (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/sysVersion/getNewVersion',
      data
    })
  }
}
