// vue.config.js
// eslint-disable-next-line no-unused-vars
const path = require('path')

module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: 'dist',
  // 构建时放置生成的静态资源
  assetsDir: 'static',
  // 构建时html的输出路径
  indexPath: 'index.html',
  // 文件名哈希值
  filenameHashing: true,
  devServer: {
    port: 8081,
    proxy: { // 做请求代理用
      '/api': {
        target: 'http://192.168.0.205:8680',
        changeOrigin: true
      },
      '/mapVideo': {
        target: 'http://121.37.228.244:7080',
        changeOrigin: true
      },
      '/mapVideoFile': {
        target: 'http://121.37.228.244:3580',
        changeOrigin: true
      },
      '/808gps': {
        target: 'http://gps.hfxenergy.com:8088',
        changeOrigin: true
      },
      '/6611gps': {
        target: 'http://gps.hfxenergy.com:6611',
        changeOrigin: true
      }
    }
  }
}
