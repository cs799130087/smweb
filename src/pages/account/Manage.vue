<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="账号名称" width="180"></el-table-column>
      <el-table-column prop="name" label="用户组" width="180"></el-table-column>
      <el-table-column prop="address" label="管理"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
      ]
    };
  }
};
</script>

<style>
</style>