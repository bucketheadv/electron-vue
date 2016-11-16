<template>
  <div class="ui menu">
    <div class="ui right dropdown item">
      {{user.name}}
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item">
          <router-link to="/signout">注销</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: mapState({
    user: state => state.user
  }),
  mounted () {
    $(this.$el).find('.dropdown').dropdown()
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
