<template>
  <div class="semantic-component">
    <div class="ui selection dropdown semanticDropDown">
      <input type="hidden" name="gender" v-model="selected">
      <i class="dropdown icon"></i>
      <div class="default text">Gender</div>
      <div class="menu">
        <div class="item" :data-value="item.Value"
          v-for="item in items"
          @click="changeSelection(item)">
          {{ item.Gender }}
        </div>
      </div>
    </div>
    <pre>{{ JSON.stringify(selectedItem) }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { Gender: 'Male', Value: 1 },
        { Gender: 'Female', Value: 0 }
      ],
      selected: '',
      selectedItem: {}
    }
  },
  methods: {
    changeSelection (item) {
      this.selectedItem = item
      this.selected = item.Value
    }
  },
  mounted () {
    this.selectedItem = {}
    $(this.$el).find('.semanticDropDown').dropdown()
  }
}
</script>

<style lang="css">
</style>
