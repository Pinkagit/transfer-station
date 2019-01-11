export default {
  LoadJS: function (src) {
    return new Promise(function (resolve, reject) {
      const doc = window.document
      const head = doc.head
      let script = doc.createElement('script')
      script.async = true
      script.src = src
      script.onload = script.onerror = function (e) {
        if (e.type === 'load') {
          resolve()
        } else {
          reject(new Error('Could not load at ' + src))
        }
        head.removeChild(this)
        this.onload = this.onerror = null
      }
      head.appendChild(script)
    })
  },
  isWeiXin: function () {
    var ua = window.navigator.userAgent.toLowerCase()
    console.log(ua) // mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  },
  getPlac: function (params) { // 判断是否手机端访问
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // 判断iPhone|iPad|iPod|iOS
      return 'ios'
    } else if (/(Android)/i.test(navigator.userAgent)) { // 判断Android
      return 'android'
    } else { // pc
      return 'pc'
    }
  },
  parseURL: function (url) {
    var a = window.document.createElement('a')
    a.href = url
    return {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function () {
        var ret = {}
        var seg = a.search.replace(/^\?/, '').split('&')
        var len = seg.length
        var i = 0
        var s
        for (; i < len; i++) {
          if (!seg[i]) {
            continue
          }
          s = seg[i].split('=')
          ret[s[0]] = s[1]
        }
        return ret
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash.replace('#', ''),
      path: a.pathname.replace(/^([^\/])/, '/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
      segments: a.pathname.replace(/^\//, '').split('/')
    }
  }
}
