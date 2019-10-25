<template>
  <div>
    <div class="top">
      <el-select v-model="ruleForm.region" placeholder="--选择分类--▼">
        <el-option label="分类一" value="shanghai"></el-option>
        <el-option label="分类二" value="beijing"></el-option>
      </el-select>
      <p class="font14">关键字：</p>
      <el-input class="query" v-model="ruleForm.name"></el-input>
      <p class="font14_s">（商品名称，条形码）</p>
      <el-button size="mini" type="success">查询</el-button>
    </div>
    <hr class="hr" />
    <div>
      <el-table :data="shopplist" stripe style="width: 100%">
        <el-table-column prop="date" label="商品条形码" width="180"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="address" label="进价"></el-table-column>
        <el-table-column prop="address" label="入库"></el-table-column>
        <el-table-column prop="address" label="库存"></el-table-column>
        <el-table-column prop="address" label="已售"></el-table-column>
        <el-table-column prop="address" label="管理"></el-table-column>
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
  .font14 {
    font-size: 14px;
    color: #666;
    margin-left: 20px;
  }
  .font14_s {
    font-size: 14px;
    color: #666;
  }
  .query {
    width: 35%;
  }
}
.hr {
  color: #ccc;
}
</style>