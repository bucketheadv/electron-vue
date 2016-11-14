<template>
  <div>
    <common-header title="首页">
      <router-link slot="right" v-if="user.id" to="/home">
        {{user.name}}
      </router-link>
      <router-link slot="right" v-if="!user.id" to="/login">
        登录
      </router-link>
    </common-header>
    <div class="login-msg" v-if="!user.id">
      <img width="50" :src="logo" alt=""> <br>
      哈哈,恭喜入坑Vue2
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import logo from './logo.png'
export default {
  data() {
    return {
      logo
    }
  },

  computed: mapState({
    user: state => state.user
  })
}
</script>

<style lang="less" scoped>
.login-msg {
  padding: 50px;
  text-align: center;
}
.msg {
  padding: 50px;
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>
