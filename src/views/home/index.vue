<template>
  <div class="root">
    <app-menu />
    <div class="container">
      <div style="padding: 50px">{{user.name}}欢迎回家</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: state => state.user
  })
}
</script>

<style lang="css">
</style>
