<template>
  <div>
    <div class="top">
      <p>时间：</p>
      <el-date-picker class="picker"
        v-model="value9"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        default-value="2010-10-01"
      ></el-date-picker>
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
        title: { text: "进货统计" },
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
  .picker{
    margin-right: 5px;
  }
}
#myChart {
  width: 100%;
  height: 500px;
}
</style>