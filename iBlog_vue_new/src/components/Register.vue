<template>
  <div class="register-wrapper">
    <el-form ref="form" :rules="rules" :model="form" class="login-form">

      <el-form-item prop="username" class="input">
        <el-input v-model="form.username" placeholder="账号" prefix-icon="el-icon-user" @keydown.enter.native="onSubmit('form')"></el-input>
      </el-form-item>

      <el-form-item prop="password" class="input">
        <el-input type="password" v-model="form.password" placeholder="密码" prefix-icon="el-icon-lock" @keydown.enter.native="onSubmit('form')"></el-input>
      </el-form-item>

      <el-form-item prop="pwdagain" class="input">
        <el-input type="password" v-model="form.pwdagain" placeholder="重复密码" prefix-icon="el-icon-lock" @keydown.enter.native="onSubmit('form')"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" style="width: 300px;">注册</el-button>
      </el-form-item>

      <el-form-item>
        <div style="float: right;">
          <router-link to="/login" style="color: white;font-size: 13px;">返回登录</router-link>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'register',
  created () {
    this.updateHeadline('用户注册')
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        pwdagain: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 1, max: 12, message: '用户名为1-12位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 5, max: 16, message: '密码为5-16位', trigger: 'blur' }
        ],
        pwdagain: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['registerCode', 'registerMessage'])
  },
  methods: {
    ...mapActions(['getRegister', 'updateHeadline']),
    onSubmit (form) {
      // eslint-disable-next-line
      // if (localStorage.isLogin == "1") {
      //   // eslint-disable-next-line
      //   this.$message ({
      //     type: 'error',
      //     message: '已有一个用户在此电脑登录，请退出后再尝试！'
      //   })
      // } else {
      // eslint-disable-next-line
      if (this.form.password != this.form.pwdagain) {
        this.$message({
          type: 'error',
          message: '密码不一致'
        })
      } else {
        this.$refs[form].validate(valid => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            })
            var timer = setTimeout(() => {
              loading.close()
              this.$message({
                type: 'error',
                message: '注册超时，请确认网络连接或稍后访问！'
              })
            }, 10000)
            console.log(this.form.username)
            this.getRegister({
              username: this.form.username,
              password: this.form.password
            })
            clearTimeout(timer)
            console.log('register')
            console.log(this.registerCode)
            // loading.close()
            // eslint-disable-next-line
            if (this.registerCode == 1) {
              this.$message({
                type: 'error',
                message: '账户已存在'
              })
              loading.close()
            } else if (this.registerCode == 0) {
              var storage = window.localStorage
              storage.isLogin = 1
              // window.sessionStorage.userId = res.data.id
              // window.sessionStorage.admin = res.data.data.isAdmin
              // window.sessionStorage.username = res.data.data.bUInfoName
              this.$message({
                type: 'success',
                message: '注册成功'
              })
              loading.close()
              this.$router.push({
                path: '/login'
              })
            }
            // getLogin('/login',{
            //   username:this.form.username,
            //   password:this.form.password
            // }).then(res => {
            //   clearTimeout(timer);
            //   if(res.data.code == 40000){
            //     this.$message({
            //       type: 'error',
            //       message: '密码不正确',
            //     })
            //     loading.close()
            //   }
            //   else if (this.form.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
            //     this.$message.error('验证码输入有误！')
            //     loading.close()
            //     this.refreshCode()
            //   }
            //   else if(res.data.code == 20000){
            //     var storage = window.localStorage
            //     storage.isLogin = 1
            //     window.sessionStorage.userId=res.data.id
            //     window.sessionStorage.admin = res.data.data.isAdmin
            //     window.sessionStorage.username = res.data.data.bUInfoName
            //     this.$message({
            //       type: 'success',
            //       message: '登录成功'
            //     })
            //     loading.close()
            //     this.$router.push({
            //     path:'home',
            //     })
            //   }
            // })
            //   .catch(err => {})
          } else {
            return false
          }
        })
      }
    }
  }
}
</script>

<style scoped>
 @import '../style/common.css';

.login {
  position: absolute;
  width: 100%;
  height: 100%;
}
.login-form {
  width: 350px;
  margin: 150px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgba(0, 0, 0, 0.658); /* 透明背景色 */
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
