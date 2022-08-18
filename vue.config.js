const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// module.exports = {
//   devServer: {
//     // 代理配置
//     proxy: {
//         // 如果请求地址以/api打头,就出触发代理机制
//         '/People': {
//           target: 'http://localhost:7073' // 要代理的真实接口地址
//            // http://localhost:9588/api/login -> http://localhost:3000/api/login
//         }
//       }
//     }
//   }

// module.exports = {
//   devServer: {
//     host: '127.0.0.1',
//     port: 8084,
//     open: true,
//     proxy: {
//         '/api': {
//             target: 'http://112.74.46.211:8070', //API服务器的地址
//             changeOrigin: true, // 虚拟的站点需要更管origin
//             pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
//                 '^/api': ''
//             }
//         }
//     },
//   }
// }