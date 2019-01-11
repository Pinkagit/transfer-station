<template>
  <keep-alive exclude="gong,shou">
    <component :is="currPage"></component>
  </keep-alive>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
</style>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import BaseComponent from 'src/extend/BaseComponent'
  import noPage from '../pages/404'

  const pagePrex = 'page-'

  export default {
    mixins: [BaseComponent],
    name: 'PageRouter',
    data: function () {
      return {
        currPage: ''
      }
    },
    components: {'page-404': noPage},
    mounted: function () {
      this.loadPage(this.$route.params, () => {})
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        if (to.path != from.path) {
          // 如果页面改变。load新页面加入
          this.loadPage(to.params, () => {
          })
        }
      }
    },
    methods: {
      noPage: function () {
        this.currPage = pagePrex + '404'
      },
      loadPage: function (data, fn) {
        var path = this.getPath()
        System.import('../pages/' + path + '').then(module => {
          Vue.component(`${pagePrex}${path}`, module)
          this.currPage = pagePrex + path
          fn()
        }).catch(() => {
          console.error('不存在该页面', path)
          this.noPage()
        })
      },
      getPath () {
        var params = this.$route.params
        var arr = []
        for (var k of Object.keys(params).sort()) {
          arr.push(params[k])
        }
        if (arr.length == 0) arr.push('home')
        return arr.join('/')
      }
    }
  }
</script>

