<template>
  <div id="tab">
    <el-tabs class="tab" v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane class="tab" label="商品管理" :tab-click="tab" name="first">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane class="tab" label="添加商品" name="second">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tab(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less" scoped>
#tab {
  height: 100%;
  .tab {
    height: 100%;
  }
}
</style> 