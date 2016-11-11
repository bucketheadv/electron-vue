<template>
  <div class="msg">
    {{ message }}
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
.msg {
  font-size: 18px;
  font-family: sans-serif;
  background: #e9e9e9;
}
</style>
