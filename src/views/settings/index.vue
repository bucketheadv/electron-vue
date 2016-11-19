<template>
  <div class="root">
    <app-menu />
    <div class="container">
      <app-header />
      <form class="ui form" v-on:submit.prevent="submit">
        <div class="field">
          <label>根目录</label>
          <div class="inline">
            <div class="fileBtn">
              <span class="ui fluid button btn-file">
                <span id="buttonLabel">选择路径</span>
                <input type="file" v-on:change="preview" webkitdirectory />
              </span>
            </div>
            <span class="folder">{{ settings.baseFolder }}</span>
          </div>
        </div>
        <div class="field">
          <label>类型</label>
          <input type="radio" name="type" value="hexo" v-model="settings.type">Hexo
          <input type="radio" name="type" value="jekyll" v-model="settings.type">Jekyll
        </div>
        <div class="ui buttons">
          <button type="button" class="ui button" @click="resetSettings">重置</button>
          <div class="or"></div>
          <button type="submit" class="ui positive button">保存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['SETTING', 'SAVE_SETTINGS', 'RELOAD_SETTINGS']),
    preview (e) {
      const file = e.target.files[0]
      if (!file) return
      // console.log(file.path);
      // this.settings.baseFolder = file.path
      this.SETTING({ baseFolder: file.path })
    },

    resetSettings () {
      this.RELOAD_SETTINGS()
    },

    submit (e) {
      this.SAVE_SETTINGS(this.settings)
    }
  },

  computed: mapState({
    settings: state => {
      return state.settings
    }
  }),

  mounted () {
    // console.log($(this.$route));
  }
}
</script>

<style lang="less" scoped>
.btn-file {
  position: relative;
  overflow: hidden;
}
.btn-file input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
  display: block;
}
.inline {
  display: flex;
  flex: 1;
  align-items: center;
}
.fileBtn {
  width: 147px;
}
.folder {
  margin-left: 10px;
  font-size: 20px;
}
</style>
