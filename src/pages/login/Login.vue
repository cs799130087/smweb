<template>
  <div>
    <div class="login">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model.number="ruleForm2.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model.number="ruleForm2.pass"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Axios from "../../apis/api.js";
export default {
  data() {
    var checkuser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var checkuserPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm2: {
        pass: "",
        user: ""
      },
      rules2: {
        pass: [{ validator: checkuserPass, trigger: "blur" }],
        user: [{ validator: checkuser, trigger: "blur" }]
      }
    };
  },
  created() {
    console.log();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let pramas = {
            account: this.ruleForm2.user,
            password: this.ruleForm2.pass
          };
          Axios.login(pramas)
            .then(res => {
              const { code, msg } = res.data;
              if (code == 0) {
                alert(msg);
                this.$router.push({ name: "/index/addshopping" });
              } else {
                alert(msg);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("err submit!!");
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
.login {
  width: 500px;
  height: 166px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -84px;
  margin-left: -250px;
}
</style>