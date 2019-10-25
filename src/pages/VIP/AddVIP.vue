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
    </el-tabs>-->
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="真实名字" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="会员卡卡号" prop="vipcard">
          <el-input v-model="ruleForm.vipcard"></el-input>
        </el-form-item>
        <el-form-item label="用户组" prop="region">
          <el-select v-model="ruleForm.region" placeholder="--请选择分类--">
            <el-option label="分类一" value="shanghai"></el-option>
            <el-option label="分类二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input v-model="ruleForm.idcard"></el-input>
        </el-form-item>
        <el-form-item label="用户状态" prop="promotion">
          <el-radio-group v-model="ruleForm.promotion">
            <el-radio label="启用"></el-radio>
            <el-radio label="不启用"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="座机号码" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="Email">
          <el-input v-model="ruleForm.Email"></el-input>
        </el-form-item>
        <el-form-item label="地区选择" prop="selectedOptions">
          <el-cascader
            :options="options"
            v-model="resetForm.selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="site">
          <el-input v-model="ruleForm.quantity"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码" prop="postcode">
          <el-input v-model="ruleForm.weight"></el-input>
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
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        }
      ],
      activeName2: "first",
      ruleForm: {
        name: "",
        region: "",
        vipcard: "",
        idcard: "",
        phone: "",
        tel: "",
        Email: "",
        selectedOptions: [],
        site: "",
        postcode: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入真实名字", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择用户组", trigger: "change" }
        ],
        vipcard: [
          { required: true, message: "请输入会员卡号", trigger: "blur" },
          { min: 1, max: 10, message: "最少一位数", trigger: "blur" }
        ],
        idcard: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          { min: 18, max: 18, message: "请输入正确身份证号", trigger: "blur" }
        ],
        phone: [
          { required: false, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确手机号", trigger: "blur" }
        ],
        tel: [
          { required: false, message: "请输入座机号", trigger: "blur" },
          { min: 1, max: 10, message: "请输入正确号码", trigger: "blur" }
        ],
        Email: [
          { required: false, message: "请输入邮箱地址", trigger: "blur" },
          { min: 1, max: 20, message: "请输入正确邮箱地址", trigger: "blur" }
        ],
        selectedOptions: [
          { required: false, message: "请选择地区", trigger: "change" }
        ],
        site: [
          { required: false, message: "请输入地址", trigger: "blur" },
          { min: 1, max: 20, message: "请输入正确地址", trigger: "blur" }
        ],
        postcode: [
          { required: false, message: "请输入邮政编码", trigger: "blur" },
          { min: 1, max: 20, message: "请输入正确邮政编码", trigger: "blur" }
        ]
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
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
</style>