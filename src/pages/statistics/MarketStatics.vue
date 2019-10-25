<template>
  <div>
    <div class="top">
      <p>时间：</p>
      <el-date-picker
        v-model="value9"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        default-value="2010-10-01"
      ></el-date-picker>
      <el-select class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button size="mini" type="success">提交</el-button>
    </div>
    <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value9: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      value: ""
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "销售统计（不含退款）" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  .select {
    margin-left: 5px;
    margin-right: 5px;
  }
}
#myChart {
  width: 100%;
  height: 500px;
}
</style>