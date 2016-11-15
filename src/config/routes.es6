import App from '../App'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/login',
        meta: { auth: false },
        component: resolve => require(['views/login/'], resolve)
      },
      {
        path: '/signout',
        component: resolve => require(['views/signout/'], resolve)
      },
      {
        path: '/home',
        component: resolve => require(['views/home/'], resolve)
      },
      {
        path: '/data',
        component: resolve => require(['views/data/'], resolve)
      },
      {
        path: '/',
        meta: { auth: false },
        component: resolve => require(['views/index/'], resolve)
      },
      {
        path: '*',
        redirect: '/login'
      }
    ]
  }
]
