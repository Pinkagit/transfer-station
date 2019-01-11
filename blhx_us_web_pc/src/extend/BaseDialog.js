export default {
  data: function () {
    return {
      title: this.$options.pageName,
      show: false
    }
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
    /**
     * 打开一个弹出框
     * @param data
     *  {
     *    name:'', //弹出框名称,dialog目录下弹出框名称
     *    data:{}, //传给弹出框的基础数据 data能包含数据
     *    methods:{} //传给弹出框的基础方法。方便回调等操作
     *  }
     */
    openDialog: function (data) {
      this.ema.fire('Dialogs.push', data)
    },
    close: function () {
      this.ema.fire('Dialogs.close', this.$options.name)
    }
  }
}
