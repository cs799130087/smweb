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
      </el-form-item>
      <el-form-item label="进价" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">入库</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        barcode: "",
        count: "",
        price: ""
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>