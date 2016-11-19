import Vue from 'vue'
import { Message } from 'element-ui'

function getSettings() {
  let settings0 = {}
  let s = sessionStorage.getItem('settings')
  let settings1 = JSON.parse(s)
  let settings2 = getLocalSettings()
  return Object.assign(settings0, settings1, settings2)
}

function getLocalSettings() {
  let s2 = localStorage.getItem('settings')
  if(s2 == 'undefined') s2 = null
  return JSON.parse(s2)
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
      Message({
        message: '设置已保存'
      })
    },

    RELOAD_SETTINGS(state) {
      console.log(getLocalSettings());
      Object.assign(state, getLocalSettings())
    }
  },

  actions: {
    SETTING({commit}, settings) {
      commit('SETTING', settings)
    },

    SAVE_SETTINGS({commit}, settings) {
      commit('SAVE_SETTINGS', settings)
    },

    RELOAD_SETTINGS({commit}) {
      commit('RELOAD_SETTINGS')
    }
  }
}
