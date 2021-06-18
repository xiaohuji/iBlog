<template>
  <div class="login">
<!--    <router-link to="/userbasicInfo">进</router-link>-->
    <el-form ref="form" :rules="rules" :model="form" class="login-form">
      <h2 class="login-title">博客登录</h2>

      <el-form-item prop="username" class="input">
        <el-input v-model="form.username" placeholder="学号" prefix-icon="el-icon-user" @keydown.enter.native="onSubmit('form')"></el-input>
      </el-form-item>

      <el-form-item prop="password" class="input">
        <el-input type="password" v-model="form.password" placeholder="密码" prefix-icon="el-icon-lock" @keydown.enter.native="onSubmit('form')"></el-input>
      </el-form-item>

      <el-form-item prop="code" class="input">
        <el-input type="text" v-model="form.code" placeholder="验证码" prefix-icon="el-icon-edit" @keydown.enter.native="onSubmit('form')">
          <template slot="append">
            <div class="login-code" @click="refreshCode">
              <login-code :identifyCode="identifyCode"></login-code>
            </div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" style="width: 300px;">登录</el-button>
      </el-form-item>

      <el-form-item>
        <div style="float: right;">
          <router-link to="/userregister" style="color: white;font-size: 13px;">注册账户</router-link>
          <span style="color: white;">|</span>
          <router-link to="/forgetPw" style="color: white;font-size: 13px;">忘记密码？</router-link>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import loginCode from './LoginCode'

export default {
  name: 'login',
  components: {
    loginCode
  },
  created () {
  },
  mounted () {
    // 初始化验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  data () {
    return {
      identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
      identifyCode: '',
      form: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 1, max: 12, message: '用户名为1-12位', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 6, max: 16, message: '密码为6-16位', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 重置验证码
    refreshCode () {
      this.form.code = ''
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 创建验证码
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
    },
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
    // ,
    // onSubmit(form){
    //   if(localStorage.isLogin == "1"){
    //     this.$message({
    //       type: 'error',
    //       message: '已有一个用户在此电脑登录，请退出后再尝试！'
    //     })
    //   }
    //   else{
    //     this.$refs[form].validate(valid => {
    //       if (valid) {
    //         const loading = this.$loading({
    //           lock: true,
    //           text: 'Loading',
    //           spinner: 'el-icon-loading',
    //           background: 'rgba(0, 0, 0, 0.7)'
    //         })
    //         var timer = setTimeout(() => {
    //           loading.close();
    //           this.$message({
    //             type: 'error',
    //             message: '登录超时，请确认账号是否存在或稍后访问！'
    //           })
    //         }, 10000)
    //         post1('/login',{
    //           username:this.form.username,
    //           password:this.form.password
    //         }).then(res => {
    //           clearTimeout(timer);
    //           if(res.data.code == 40000){
    //             this.$message({
    //               type: 'error',
    //               message: '密码不正确',
    //             })
    //             loading.close()
    //           }
    //           else if (this.form.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
    //             this.$message.error('验证码输入有误！')
    //             loading.close()
    //             this.refreshCode()
    //           }
    //           else if(res.data.code == 20000){
    //             var storage = window.localStorage
    //             storage.isLogin = 1
    //             window.sessionStorage.userId=res.data.id
    //             window.sessionStorage.admin = res.data.data.isAdmin
    //             window.sessionStorage.username = res.data.data.bUInfoName
    //             this.$message({
    //               type: 'success',
    //               message: '登录成功'
    //             })
    //             loading.close()
    //             this.$router.push({
    //             path:'home',
    //             })
    //           }
    //         })
    //           .catch(err => {})
    //       }
    //       else {
    //         return false;
    //       }
    //     })
    //   }

    // }
  }
}
</script>

<style scoped>
 @import '../style/common.css';

.login {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url("../assets/banner1.jpg") #252424 no-repeat 0 0 scroll;
  background-size: cover; */
}
.login-form {
  width: 350px;
  margin: 150px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgba(0,0,0,0.2); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}
.login-title {
  color: white;
  text-align: center;
  letter-spacing: 5px;
}
.input{
  width: 300px;
  margin: 30px auto;
}
</style>
