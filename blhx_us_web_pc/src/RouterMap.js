const PageRouter = require('./components/PageRouter.vue')
const component = function component (resolve) {
  if (component.installed) return resolve(PageRouter)
  component.installed = true
  setTimeout(resolve.bind(null, PageRouter))
}

var pkg = require('../package.json')

var routerMap = {
  mode: pkg.routerMode,
  routes: [{
    path: '/:name/:name1/:name2/:name3',
    component: component
  },
  {
    path: '/:name/:name1/:name2',
    component: component
  },
  {
    path: '/:name/:name1',
    component: component
  },
  {
    path: '/:name',
    component: component
  },
  {
    path: '/',
    component
  }]
}
if (pkg.routerMode === 'history') {
  if (process.env.CODE_ENV === 'local') {
    routerMap.base = '/'
  } else {
    routerMap.base = '/'
  }
} else {
  routerMap.mode = 'hash'
  delete routerMap.base
}
export default routerMap
