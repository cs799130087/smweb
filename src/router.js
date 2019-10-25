import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/login/Login.vue'
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/', name: 'login', component: Login,

    },
    {
      path: '/index', name: 'Admin', component: () => import('./components/Admin.vue'),
      children: [
        // 商品管理
        {
          path: '/index/addshopping',
          name: '/index/addshopping',
          component: () => import('./pages/commodity/Addshopping.vue'),
        },
        {
          path: '/index/commoditylist',
          name: '/index/commoditylist',
          component: () => import('./pages/commodity/CommodityList.vue'),
        },
        // 进货管理
        {
          path: '/index/addstock',
          name: '/index/addstock',
          component: () => import('./pages/stock/Addstock.vue'),
        },
        {
          path: '/index/stocklist',
          name: '/index/stocklist',
          component: () => import('./pages/stock/StockList.vue'),
        },
        // 出货管理
        {
          path: '/index/delivery',
          name: '/index/delivery',
          component: () => import('./pages/shipment/Delivery.vue'),
        },
        {
          path: '/index/marketlist',
          name: '/index/marketlist',
          component: () => import('./pages/shipment/MarketList.vue'),
        },
        {
          path: '/index/refund',
          name: '/index/refund',
          component: () => import('./pages/shipment/Refund.vue'),
        },
        // 统计管理
        {
          path: '/index/marketstatics',
          name: '/index/marketstatics',
          component: () => import('./pages/statistics/MarketStatics.vue'),
        },
        {
          path: '/index/stockstatistics',
          name: '/index/stockstatistics',
          component: () => import('./pages/statistics/StockStatistics.vue'),
        },
        // 账号管理
        {
          path: '/index/addaccount',
          name: '/index/addaccount',
          component: () => import('./pages/account/AddAccount.vue'),
        },
        {
          path: '/index/amendpassword',
          name: '/index/amendpassword',
          component: () => import('./pages/account/AmendPassword.vue'),
        },
        {
          path: '/index/manage',
          name: '/index/manage',
          component: () => import('./pages/account/Manage.vue'),
        },
        // 会员管理
        {
          path: '/index/accountvip',
          name: '/index/accountvip',
          component: () => import('./pages/VIP/AccountVIP.vue'),
        },
        {
          path: '/index/addvip',
          name: '/index/addvip',
          component: () => import('./pages/VIP/AddVIP.vue'),
        },
      ]
    }
  ]
});