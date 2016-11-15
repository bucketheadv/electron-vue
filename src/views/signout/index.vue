<template>
  <div>
    <app-menu />
    <div class="btn">
      <router-link to="/home">首页</router-link>
      <button v-on:click="submit">确认退出</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['SIGNOUT']),
    submit () {
      this.SIGNOUT()
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 50px;
  text-align: center;
  button {
    padding: 5px 10px;
  }
}
</style>
