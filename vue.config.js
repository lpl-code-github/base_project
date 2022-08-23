// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,//防止打包生成map文件
  publicPath: './', // 基本路径
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //打包app需要修改
  lintOnSave: false, // 取消校验代码
  outputDir: 'dist', // 输出文件目录

  devServer: {
    // disableHostCheck: true,
    host: 'localhost',
    port: 8080,

    proxy: {
      '/apis': {
        target: '',// 要跨域的域名
        secure:false,
        changeOrigin: true, // 是否开启跨域
        pathRewrite:{
          "^/apis":""
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',

        // Semantic-UI
        semantic: 'semantic-ui-css',
        Semantic: 'semantic-ui-css',
        'semantic-ui': 'semantic-ui-css'

      }),
    ],
  },
};
