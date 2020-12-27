module.exports = {
  devServer: {
    // 端口配置
    port: 1888,
    // 反向代理配置
    proxy: {
      '/api': {
        // target: 'http://localhost',
        target: 'http://172.16.30.55',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
