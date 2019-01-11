export const setConfig = ({
  commit
}, cfg) => {
  commit('SET_CONFIG', cfg)
}

export const setUser = ({
  commit
}, user) => {
  commit('SET_USER', user)
}

export const setCurrentPage = ({
  commit,
  state
}, page) => {
  let info = Object.assign({}, state.pageInfo, {
    lastPage: state.pageInfo.currentPage,
    currentPage: page
  })
  commit('SET_PAGE_INFO', info)
}

export const setPageInfo = ({
  commit,
  state
}, pageInfo) => {
  let info = Object.assign({}, state.pageInfo, pageInfo)
  commit('SET_PAGE_INFO', info)
}
