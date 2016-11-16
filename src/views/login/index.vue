<template>
  <div>
    <div class="loginForm">
      <img :src="logo" class="logoImg" />
      <form class="ui form login" v-on:submit.prevent="submit">
        <div class="line field">
          <div v-show="btn && !form.id">id不能为空</div>
          <input type="number" placeholder="输入你的id" v-model="form.id">
        </div>
        <div class="line field">
          <div v-show="btn && !form.name">用户名不能为空</div>
          <input type="text" placeholder="输入你的用户名" v-model="form.name">
        </div>
        <button class="ui button">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import logo from 'assets/images/logo.png'
export default {
  data () {
    return {
      btn: false,
      logo: logo,
      form: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions(['SIGNIN']),
    submit () {
      this.btn = true
      if (!this.form.id || !this.form.name) return
      this.SIGNIN(this.form)
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
.loginForm {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
}
.line {
  margin: 30px auto;
}
.logoImg {
  width: 180px;
  height: 180px;
  margin-right: 10px;
}
</style>
