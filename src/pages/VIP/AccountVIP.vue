<template>
  <div>
    <div class="top">
      <p class="font14">关键字：</p>
      <el-input class="query" v-model="name"></el-input>
      <p class="font14">会员卡，会员名，电话，手机</p>
      <el-button size="mini" type="success">查询</el-button>
      <hr />
    </div>
    <div>
      <template>
        <el-table :data="shopplist" stripe style="width: 100%">
          <el-table-column prop="date" label="会员卡卡号" width="180"></el-table-column>
          <el-table-column prop="name" label="会员姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="会员等级"></el-table-column>
          <el-table-column prop="address" label="会员积分"></el-table-column>
          <el-table-column prop="address" label="折扣"></el-table-column>
          <el-table-column prop="address" label="手机号"></el-table-column>
          <el-table-column prop="address" label="座机号"></el-table-column>
          <el-table-column label="管理">
            <el-button type="text" size="small">编辑</el-button>
          </el-table-column>
        </el-table>
      </template>
       <el-pagination
        :current-page="this.curpage"
        :page-size="this.pagesize"
        background
        layout="prev, pager, next"
        :total="this.tableData.length"
        @current-change="changpages"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      // 假数据
      curpage: 1,
      pagesize: 2,
      shopplist: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
    };
  },
  created() {
    this.shopplist = this.tableData.slice(0, 2);
  },
  methods: {
    changpages(val) {
      let start, end;
      start = 0 + this.pagesize * (val - 1);
      end = this.pagesize * val;
      this.shopplist = this.tableData.slice(start, end);
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  .font14 {
    font-size: 14px;
  }
  .query {
    width: 40%;
    margin-right: 5px;
  }
}
</style>