export const SET_CONFIG = function (state, cfg) {
  state.Config = cfg
}

export const SET_USER = function (state, user) {
  state.app.userInfo = user
}

export const SET_PAGE_INFO = function (state, info) {
  state.pageInfo = info
}
