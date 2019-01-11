var path = require('path')
var cooking = require('cooking')
var packageInfo = require('./package.json')
var os = require('os')
var shell = require('shelljs')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')

function getIPAdress () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

function getPort () {
  var port = 8000
  while (port < 9000) {
    if (isAvailablePort(port)) return port
    port++
  }
  return 9000

  function isAvailablePort (p) {
    var shellStr = null
    if (os.type().match(/windows/i)) {
      shellStr = `netstat -ano | findStr ${p}`
    } else {
      shellStr = `lsof -i :${p}`
    }
    var portStatus = shell.exec(shellStr, {
      silent: true
    }).stdout
    return !portStatus
  }
}

cooking.set({
  entry: {
    app: ['./src/main.js']
  },
  dist: './dist',
  template: {
    './index.tpl': {
      filename: 'index.html', // 不指定默认使用键名
      template: './index.tpl',
      title: packageInfo.description,
      favicon: './favicon.ico',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
      env: (() => {
        if (process.env.CODE_ENV === 'dev' || process.env.CODE_ENV === 'local') {
          return 'dev'
        } else if (process.env.CODE_ENV === 'beta') {
          return 'qa'
        } else {
          return ''
        }
      })()
    }
  },
  env: {
    'process.env.CODE_ENV': "'" + process.env.CODE_ENV + "'"
  },
  devServer: {
    port: getPort(),
    // 热替换
    hot: true,
    log: false,
    publicPath: '/',
    hostname: getIPAdress()
  },

  // production
  clean: true,
  hash: true,
  static: true,
  sourceMap: !(process.env.CODE_ENV === 'production'),
  minimize: true,
  chunk: false, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions', '> 1%']
    })
  ],
  publicPath: './',
  assetsPath: 'static',
  urlLoaderLimit: 1,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src'),
    'rider': path.resolve(__dirname, './node_modules/rider/lib/rider/index.styl')
  },
  externals: {
    // createjs: 'createjs'
  },
  extends: ['vue2']
})
if (process.env.CODE_ENV === 'production') {
  cooking.add('devtool', 'hidden-source-map')
}
if (process.env.NODE_ENV === 'production') {
  cooking.add('externals.vue', 'Vue')
}
cooking.add('loader.mp3', {
  test: /\.mp3(\?\S*)?$/,
  loader: 'url-loader',
  query: {
    name: 'static/[name].[hash:7].[ext]',
    limit: 1,
    mimetype: 'audio/mp3'
  }
})
cooking.add('loader.ogg', {
  test: /\.ogg(\?\S*)?$/,
  loader: 'url-loader',
  query: {
    name: 'static/[name].[hash:7].[ext]',
    limit: 1,
    mimetype: 'audio/ogg'
  }
})
cooking.add('loader.wav', {
  test: /\.wav(\?\S*)?$/,
  loader: 'url-loader',
  query: {
    name: 'static/[name].[hash:7].[ext]',
    limit: 1,
    mimetype: 'audio/wav'
  }
})
cooking.add('loader.mp4', {
  test: /\.mp4(\?\S*)?$/,
  loader: 'url-loader',
  query: {
    name: 'static/[name].[hash:7].[ext]',
    limit: 1,
    mimetype: 'video/mp4'
  }
})
if (process.env.NODE_ENV === 'production') {
  // cooking.add('plugin.PrerenderSpa', new PrerenderSpaPlugin(
  //   path.join(__dirname, './dist'),
  //   // List of routes to prerender
  //   ['/'], {
  //     postProcessHtml: function (context) {
  //       return context.html.replace(
  //         /font-size:[0-9]+px!important;/ig,
  //         ''
  //       )
  //     }
  //   }
  // ))
}
module.exports = cooking.resolve()
