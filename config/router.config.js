export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: './index/index',
        title: '首页',
      },
      { path: '/login', component: './login/index', title: '登录' },
      { path: '/category', component: './category/index', title: '分类' },
      { path: '/me', component: './mine/index', title: '我的' },
      { path: '/shop', component: './shopcart/index', title: '购物车' },
      { path: '/test', component: './test/index', title: '测试页面' },
      {
        path: '/detail',
        component: '../layouts/SimpleLayout',
        routes: [{ path: '/detail/:id', component: './detail/index' }],
      },
      {
        path: '/exception',
        component: '../layouts/ExceptionLayout',
        routes: [
          { path: '/exception/403', title: '无权限', component: './exception/403' },
          { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
        ],
      },
      { component: '404', title: '页面没找到' },
    ],
  },
];
