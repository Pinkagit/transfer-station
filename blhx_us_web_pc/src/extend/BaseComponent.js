export default {
  props: ['cid', 'params'],
  data: function () {
    return {}
  },

  created: function () {
    this.ema = window.EMA.getProxy()
  },
  mounted: function () {},
  destroyed: function () {
    if (this.ema) {
      this.ema.dispose()
    }
  },
  methods: {
    bindEvent: function (key, fn) {
      if (!this.$options.name) {
        console.warn('绑定事件的组件不存在组件名称', key)
      }
      this.ema.bind(`${this.$options.name}.${key}`, fn)
    },
    preloadImg: function (preload) {
      var images = []
      function loadImg (i) {
        images[i] = new Image()
        images[i].src = preload[i]
        images[i].style.display = 'none'
        images[i].width = '0px'
        images[i].height = '0px'
        images[i].onload = function () {
          document.body.removeChild(images[i])
        }
        window.document.body.appendChild(images[i])
      }
      for (let i = 0; i < preload.length; i++) {
        loadImg(i)
      }
    }
  }
}
