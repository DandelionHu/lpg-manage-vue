// 登录API接口
import _axios from '@/config/http'
import { config } from '@/config/config'

export default class LoginApi {
  // 获取版本
  static getNewVersion (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/sysVersion/getNewVersion',
      data
    })
  }

  // 登录
  static loginAccount (data) {
    return _axios({
      method: 'post',
      url: config.baseUrl[0] + '/loginAccount',
      data
    })
  }
}
