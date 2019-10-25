<template>
  <div>
    <div class="top">
      <p class="font14_s">开始时间：</p>
      <el-input class="date" v-model="ruleForm.date1"></el-input>
      <p class="font14">结束时间：</p>
      <el-input class="date" v-model="ruleForm.date1"></el-input>
      <p class="font14_s">（格式：2012-01-01）</p>
    </div>
    <div class="top">
      <p class="font14_s">关键字：</p>
      <el-input class="query" v-model="ruleForm.name"></el-input>
      <p class="font14_s">（商品名称，订单号，客户名字，会员卡号）</p>
      <el-button size="mini" type="success">查询</el-button>
    </div>
    <hr class="hr" />
    <div>
      <el-table :data="shopplist" stripe style="width: 100%">
        <el-table-column prop="date" label="订单号" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="address" label="数量"></el-table-column>
        <el-table-column prop="address" label="实际售价"></el-table-column>
        <el-table-column prop="address" label="优惠(促销/会员)"></el-table-column>
        <el-table-column prop="address" label="退款"></el-table-column>
        <el-table-column prop="address" label="销售时间"></el-table-column>
      </el-table>
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
      ruleForm: {
        region: "",
        name: ""
      }
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
<style lang="less"  scoped>
.top {
  display: flex;
  align-items: center;
  .query {
    width: 35%;
  }
  .font14 {
    font-size: 14px;
    color: #666;
    margin-left: 20px;
  }
  .font14_s {
    font-size: 14px;
    color: #666;
  }
  .date {
    width: 20%;
  }
}
.hr {
  color: #ccc;
}
</style>