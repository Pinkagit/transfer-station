import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../config'
import Metadata from 'src/store/metadata'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

var pkg = require('../../package.json')

const debug = process.env.NODE_ENV !== 'production'

if (debug) Vue.use(Vuex)

const state = {
  app: {
    pkg,
    userInfo: {
      parentInfo: {}
    }
  },
  pageInfo: {
    lastPage: '',
    currentPage: ''
  },
  Config,
  Metadata
}

export default new Vuex.Store({
  strict: debug,
  state,
  actions,
  getters,
  mutations
})
