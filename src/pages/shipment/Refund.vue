<template>
  <div class="top">
    <p class="font14">订单号：</p>
    <el-input class="query" v-model="name"></el-input>
    <el-button size="mini" type="success">查询</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>
<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  .font14 {
    color: #666;
  }
  .query {
    width: 40%;
    margin-right: 10px;
  }
}
</style>