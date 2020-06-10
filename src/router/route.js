const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login')
  },
  {
    redirect: '/404',
    path: '*'
  }
]

export default routes
