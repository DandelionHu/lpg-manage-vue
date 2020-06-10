<template>
  <div class="container">
    <div class="login-bg">
      <img src="../assets/bg.png" alt="">
    </div>
    <div class="login-bg"></div>
    <div class="login-form">
      <div class="left">
        <h2>LPG综合运营管理系统</h2>
        <img src="../assets/leftLogin.png" alt="">
      </div>
      <div class="right">
        <div class="logo" id="loginLogo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="loginBox">
          <el-form ref="form" :model="form">
            <el-form-item label="账号">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginApi from '@/api/LoginApi'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  created () {
    this.getNewVersion()
  },
  methods: {
    // 获取版本
    async getNewVersion () {
      const res = await LoginApi.getNewVersion()
      console.log(res)
    },
    // 登录
    async onLogin () {
      const res = await LoginApi.loginAccount(this.form)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
  .login-bg {
    width: 100%;
    height: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .login-form {
    background: #fff;
    box-shadow: 1px 1px 10px #9e9e9e;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    z-index: 10;
    height: 452px;
    margin-left: -450px;
    margin-top: -226px;
    display:flex;
    .left {
      width: 500px;
      height: 100%;
      background: #00b38b;
      padding:30px;
      box-sizing: border-box;
      h2 {
        color: #fff;
        font-size: 26px;
        font-weight: normal;
      }
      img {
        width: 420px;
        height: 328px;
        display: block;
        margin: 20px auto 0px;
      }
    }
    .right {
      width: 400px;
      height: 100%;
      .logo {
        margin-top: 40px;
        margin-bottom: 20px;
        img {
          display: block;
          margin: 0 auto;
          width: 120px;
        }
      }
      .loginBox {
        padding: 20px 40px;
      }
    }
  }
</style>
