<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from 'components/LoginForm'
export default {
  data () {
    return {
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

</style>
