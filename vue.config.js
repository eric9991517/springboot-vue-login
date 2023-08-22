const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    client: {
      webSocketURL: 'ws://10.1.151.84:8081/ws', // 修改为实际的服务器地址
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true
})
