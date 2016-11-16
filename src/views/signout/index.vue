<template>
  <div class="root">
    <div class="">
      <app-menu />
    </div>
    <div class="container">
      <div class="btn">
        <div class="ui buttons">
          <a v-on:click="back" class="ui button">返回</a>
          <div class="or"></div>
          <a v-on:click="submit" class="ui red button">确认退出</a>
        </div>
      </div>
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
    },

    back () {
      window.history.back()
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
