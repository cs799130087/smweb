<template>
  <div>
    <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="商品管理" name="first">
        <el-select v-model="ruleForm.region" placeholder="--请选择分类--">
          <el-option label="分类一" value="shanghai"></el-option>
          <el-option label="分类二" value="beijing"></el-option>
        </el-select>
      </el-tab-pane>
      <el-tab-pane label="添加商品" name="second">
     
      </el-tab-pane>
    </el-tabs> -->
       <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="所属分类" prop="region">
              <el-select v-model="ruleForm.region" placeholder="--请选择分类--">
                <el-option label="分类一" value="shanghai"></el-option>
                <el-option label="分类二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="商品售价" prop="price1">
              <el-input v-model="ruleForm.price1"></el-input>
            </el-form-item>
            <el-form-item label="市场售价" prop="price2">
              <el-input v-model="ruleForm.price2"></el-input>
            </el-form-item>
            <el-form-item label="入库数量" prop="quantity">
              <el-input v-model="ruleForm.quantity"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight">
              <el-input v-model="ruleForm.weight"></el-input>
            </el-form-item>
            <el-form-item label="商品单位" prop="unit">
              <el-input v-model="ruleForm.unit"></el-input>
            </el-form-item>

            <el-form-item label="会员优惠" prop="vip">
              <el-radio-group v-model="ruleForm.vip">
                <el-radio label="享受"></el-radio>
                <el-radio label="不享受"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否促销" prop="promotion">
              <el-radio-group v-model="ruleForm.promotion">
                <el-radio label="启用"></el-radio>
                <el-radio label="不启用"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="商品简介" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first",
      ruleForm: {
        name: "",
        region: "",
        price1: "",
        price2: "",
        quantity: "",
        weight: "",
        unit: "",
        vip: "",
        promotion: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ required: true, message: "请输入", trigger: "change" }],
        price1: [
          { required: true, message: "请输入售价", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        price2: [
          { required: true, message: "请输入市场售价", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        quantity: [
          { required: true, message: "请输入入库数量", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        unit: [
          { required: true, message: "请输入商品单位", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        vip: [{ required: true, message: "请选择会员优惠", trigger: "change" }],
        vip: [{ required: true, message: "请选择会员优惠", trigger: "change" }],
        promotion: [
          { required: true, message: "请选择是否促销", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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