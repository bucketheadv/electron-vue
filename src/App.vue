<template>
  <!-- <div class="msg">
    {{ message }}
  </div> -->
  <div class="login">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world!'
    }
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('../public/images/login_bg.jpg');
}
.msg {
  font-size: 18px;
  font-family: sans-serif;
  background: #e9e9e9;
}
</style>
