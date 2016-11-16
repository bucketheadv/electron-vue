<template>
  <div>
    <div class="ui secondary vertical pointing menu leftMenu">
      <router-link to="/" class="item">首頁</router-link>
      <router-link to="/settings" class="item">設置</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    var urlPath = $(this.$route)[0].fullPath
    // console.log(urlPath);
    var item = $(this.$el).find('.leftMenu').find(`[href='${urlPath}']`)
    item.addClass('active')
    // items.click(function(item) {
    //   items.removeClass("active")
    //   $(item.target).addClass("active")
    // })
  }
}
</script>

<style lang="css">
</style>
