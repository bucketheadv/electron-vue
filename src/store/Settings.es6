import Vue from 'vue'

function getSettings() {
  let settings0 = {}
  let settings1 = JSON.parse(sessionStorage.getItem('settings'))
  let settings2 = JSON.parse(localStorage.getItem('settings'))
  return Object.assign(settings0, settings1, settings2)
}

export default {
  state: getSettings(),
  mutations: {
    SETTING(state, settings) {
      let sets = Object.assign(state, settings)
      sessionStorage.setItem('settings', JSON.stringify(sets))
      // Object.assign(state, settings)
    },

    SAVE_SETTINGS(state, settings) {
      localStorage.setItem('settings', JSON.stringify(settings))
    }
  },

  actions: {
    SETTING({commit}, settings) {
      commit('SETTING', settings)
    },

    SAVE_SETTINGS({commit}, settings) {
      commit('SAVE_SETTINGS', settings)
    }
  }
}
