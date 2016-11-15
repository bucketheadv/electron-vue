<template>
  <div class="root">
    <app-menu />
    <div class="container">
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
            <span class="folder">{{ form.baseFolder }}</span>
          </div>
        </div>
        <div class="field">
          <label>类型</label>
          <input type="radio" value="hexo">Hexo
          <input type="radio" value="Jekyll">Jekyll
        </div>
        <div class="ui buttons">
          <button type="reset" class="ui button">重置</button>
          <div class="or"></div>
          <button type="submit" class="ui positive button">保存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        baseFolder: ''
      }
    }
  },
  components: {
  },
  methods: {
    preview (e) {
      const file = e.target.files[0]
      if (!file) return
      // console.log(file.path);
      this.form.baseFolder = file.path
    },

    submit (e) {
    }
  },

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
