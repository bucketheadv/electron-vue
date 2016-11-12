<template>
  <div class="login-box">
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
  </div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'

export default {
  data() {
    return {
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>
<style scoped language="sass">
@import '~vux/dist/vux.css';
.login-box {
  flex: 1;
  flex-direction: column;;
  border-radius: 4px;
  height: 480px;
  width: 320px;
  background: white;
}
</style>
