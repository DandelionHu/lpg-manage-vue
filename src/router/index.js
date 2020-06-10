import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'
import { config } from '@/config/config'

Vue.use(VueRouter)

// 判断是否需要登录访问, 配置位于 config 文件夹
const isLoginRequired = routeName => {
  // 首次执行时缓存配置
  let { notLoginRoute } = config
  // 不需要登录的标记
  const notLoginMark = {}

  // 构建标记对象
  if (Array.isArray(notLoginRoute)) {
    for (let i = 0; i < notLoginRoute.length; i += 1) {
      notLoginMark[notLoginRoute[i].toString()] = true
    }
  }

  notLoginRoute = null // 释放内存

  return isLoginRequiredName(routeName, notLoginMark)
}
// 判断路由名称
const isLoginRequiredName = (name, notLoginMark) => {
  if (!name) {
    return true
  }
  // 处理 Symbol 类型
  const target = typeof name === 'symbol' ? name.description : name
  return !notLoginMark[target]
}

const router = new VueRouter({
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 登录验证
  if (isLoginRequired(to.name)) {
    next({ path: '/login' })
    return false
  } else {
    next()
  }
})

export default router
