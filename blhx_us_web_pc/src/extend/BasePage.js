import Common from '../assets/js/common.js'
// import Server from '../extend/Server'
// import WechatJSSDK from '../extend/WechatJSSDK'
import Config from '../config'

var config = {
  // below are mandatory options to finish the wechat signature verification
  'appId': Config.appid,
  // the 3 options below should be received like api '/get-signature' above
  'nonceStr': 'your_nonceStr',
  'signature': 'url_signature',
  'timestamp': 'your_timestamp',
  // below are optional
  // invoked if wechat signature sign succeeds
  // enable debug mode, same as debug
  'debug': process.env.NODE_ENV !== 'production',
  'jsApiList': [
    'chooseWXPay'
  ], // optional, pass all the jsapi you want, the default will be ['onMenuShareTimeline', 'onMenuShareAppMessage']
  'customUrl': '' // set custom weixin js script url, usually you don't need to add this js manually
}

var setPageTitle = function (title) {
  document.title = title
}

export default {
  props: ['params'],
  data: function () {
    return {
      wxConfig: {},
      resourceLoadEnd: false
    }
  },
  beforeCreate: function () {},

  created: function () {
    this.ema = window.EMA.getProxy()
    this.Common = Common
  },
  beforeMount: function () {},
  mounted: function () {
    if (!window.app.isLoadend) {
      window.app.isLoadend = true
    }
  },
  activated: function () {
    setPageTitle(this.$options.pageName)
    console.log('config', config)
    // if (Common.isWeiXin()) {
    //   Server({
    //     url: 'wechat/getsignature',
    //     params: {
    //       url: window.location.origin + window.location.pathname + window.location.search
    //     },
    //     method: 'get'
    //   }).then((response) => {
    //     var data = response.data.data
    //     this.wxConfig = data
    //     config.nonceStr = data.nonceStr
    //     config.signature = data.signature
    //     config.timestamp = data.timestamp
    //     config.success = function (e) {
    //       if (typeof me.onWechatReady === 'function') {
    //         me.onWechatReady()
    //       }
    //     }
    //     config.error = function (e) {
    //     }
    //     var wechatObj = new WechatJSSDK(config)
    //     this.wechat = wechatObj
    //   }).catch((e) => {

    //   })
    // }
  },
  deactivated: function () {
  },
  beforeDestroy: function () {},
  destroyed: function () {
    if (this.ema) {
      this.ema.dispose()
    }
  },

  methods: {
    /**
     * 组件内部范围绑定事件
     * @param key
     * @param fn
     */
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
    downjump: function () {
      var iosUrl = `https://lnk0.com/UFhcks?chn=toutiao&idfa=__IDFA__&osversion=__OS__&ip=__IP__&clicktime=__TS__&useragent=__UA__`
      var androidUrl = `https://lnk0.com/0sExhk?chn=toutiao&androidid=__ANDROIDID1__&imei_md5=__IMEI__&osversion=__OS__&ip=__IP__&clicktime=__TS__&useragent=__UA__`
      this.downloadApp(androidUrl, iosUrl)
    },
    downloadApp: function (androidUrl, iosUrl) {
      // 百度统计
      var pf = navigator.platform.toLowerCase()
      var appUrl = ''
      if (/iphone|ipad|ipod|ios/.test(pf)) {
        appUrl = iosUrl
      } else {
        appUrl = androidUrl
      }
      if (appUrl === '') {} else {
        var pat = /https:\/\/scd\.q-dazzle\.com\/*/
        if (/iphone|ipad|ipod|ios/.test(pf)) {
          window.location.href = appUrl
        } else if (pat.test(appUrl)) {
          window.location.href = appUrl + '+' + parseInt(Math.random() * 100000)
        } else {
          window.location.href = appUrl
        }
      }
    }
  }
}
