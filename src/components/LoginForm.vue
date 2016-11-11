<template>
  <div class="login-box">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix"></i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix"></i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.login-box {
  flex: 1;
  flex-direction: column;;
  border-radius: 4px;
  height: 480px;
  width: 320px;
  background: white;
}
</style>
