import { removeToken } from '@/common/util/token'
export default {
  loginOut ({ commit }) {
    removeToken()
  }
}
