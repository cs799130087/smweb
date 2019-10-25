<template>
  <el-container class="container">
    <el-aside class="aside" width="250px">
      <!-- 管理列表 -->
      <el-menu
        default-active="/index/addshopping"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened="true"
        router
      >
        <h1 class="center fontfff">华联超市管理系统</h1>
        <div class="user">
          <p class="login">登录/注册</p>
          <p>管理首页|退出系统</p>
        </div>

        <el-submenu v-for="(item,index) in  tablist" :key="index" :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(v,i) in item.children" :key="i" :index="v.index">{{v.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="box">
      <el-header class="header">
        <h1>
          <span>欢迎您</span>
          <span>admin</span>
        </h1>
        <p>添加管理员账号</p>
      </el-header>
      <!-- 内容 -->
      <el-main class="content">
        <Tab />
      </el-main>
      <el-footer class="footer">
        <p class="box">
          <span>&copy;</span>
          <span>Copyright</span>
          <span>2018</span>
          <span>华联超市管理系统</span>
        </p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Tab from "./Tab";
export default {
  components: {
    Tab
  },
  data() {
    return {
      tablist: [
        {
          index: "commodity",
          title: "商品管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/addshopping", name: "添加商品" },
            { index: "/index/commoditylist", name: "商品列表" }
          ]
        },
        {
          index: "stock",
          title: "进货管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/addstock", name: "添加库存" },
            { index: "/index/StockList", name: "库存列表" }
          ]
        },
        {
          index: "shipment",
          title: "出货管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/marketlist", name: "销售列表" },
            { index: "/index/delivery", name: "商品出库" },
            { index: "/index/refund", name: "商品退货" }
          ]
        },
        {
          index: "statistics",
          title: "统计管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/marketstatics", name: "销售统计" },
            { index: "/index/stockstatistics", name: "进货统计" }
          ]
        },
        {
          index: "account",
          title: "账号管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/addaccount", name: "添加账号" },
            { index: "/index/manage", name: "账号管理" },
            { index: "/index/amendpassword", name: "修改密码" }
          ]
        },
        {
          index: "vip",
          title: "会员管理",
          icon: "el-icon-location",
          children: [
            { index: "/index/addvip", name: "添加账号" },
            { index: "/index/accountvip", name: "账号列表" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
@background-color: #f5f5f5;
.container {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    height: 100%;
  }
}
.aside {
  background: #545c64;

  .user {
    text-align: right;
    margin-right: 10px;
    color: #fff;
    .login {
      color: #ccc;
    }
  }
}
.center {
  text-align: center;
}
.fontfff {
  color: #fff;
  font-size: 22px;
}
.header {
  background: @background-color;
  height: 50px !important;
}
.content {
  background: @background-color;
  height: 100% !important;
}
.footer {
  background: @background-color;
  border-top: 1px solid #000;
  height: 50px !important;
}
.el-menu {
  border: none;
}
</style>