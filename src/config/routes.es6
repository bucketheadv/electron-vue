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
        path: '/settings',
        component: resolve => require(['views/settings/'], resolve)
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
