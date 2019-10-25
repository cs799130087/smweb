<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品条形码" prop="barcode">
        <el-input v-model="ruleForm.barcode"></el-input>
      </el-form-item>
      <el-form-item label="数量" prop="count">
        <el-input v-model="ruleForm.count"></el-input>
        <span class="span1">计算商品单位为千克</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">加入订单</el-button>
        <el-button @click="resetForm('ruleForm')">从新出库</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="address" label="数量"></el-table-column>
      <el-table-column prop="price" label="单价(元)"></el-table-column>
      <el-table-column prop="total" label="总价(元)"></el-table-column>
      <el-table-column prop="Preferentialprice" label="优惠总价(元)"></el-table-column>
    </el-table>
    <p>总价：<span>0</span>元，优惠：<span>0</span>元。<span class="colorred">小计：<span>0</span>元</span></p>
    <hr>
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="会员卡号：" prop="vip">
        <el-input v-model="ruleForm2.vip"></el-input>
        <span class="span1">填写会员卡号</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm2')">确认提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      ruleForm: {
        barcode: "",
        count: ""
      },
      ruleForm2: {
        vip: ""
      },
      rules2: {
        vip: [
          { required: true, message: "请输入会员号", trigger: "blur" },
          { min: 1, max: 10, message: "最小一位数", trigger: "blur" }
        ]
      },
      rules: {
        barcode: [
          { required: true, message: "请输入商品条形码", trigger: "blur" },
          { min: 1, max: 10, message: "最小一位数", trigger: "blur" }
        ],
        count: [
          { required: true, message: "请输入数量", trigger: "blur" },
          { min: 1, max: 10, message: "最小一位数", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入进价", trigger: "blur" },
          { min: 1, max: 10, message: "最小一位数", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.span1 {
  color: #666;
}
.colorred{
  color: red
}
</style>