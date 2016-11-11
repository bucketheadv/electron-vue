<template>
  <!-- <div class="msg">
    {{ message }}
  </div> -->
  <div class="login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from 'components/LoginForm'
export default {
  data () {
    return {
      message: 'Hello world!'
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style language="scss">
body {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../public/images/login_bg.jpg');
}

.msg {
  font-size: 18px;
  font-family: sans-serif;
  background: #e9e9e9;
}
</style>
