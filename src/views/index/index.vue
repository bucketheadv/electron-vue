<template>
  <div class="root">
    <div>
      <app-menu />
    </div>
    <div class="container">
      <app-header />
      <div class="login-msg" v-if="user.id">
        <img width="50" :src="logo" alt=""> <br>
        哈哈,恭喜入坑Vue2
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import logo from 'assets/images/vue.png'
export default {
  data () {
    return {
      logo
    }
  },

  computed: mapState({
    user: state => state.user
  }),

  components: {
  }
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
