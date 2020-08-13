module.exports = {
// 1. vue-cli3和vue-cli4创建的项目不要找webpack的配置项目
// 2. 应为vue-cli3和vue-cli4创建的项目 webpack的配置项目全部被隐藏
// 3. 如果想改  创建vue.config.js文件
    lintOnSave: false,
    // 解决跨域问题
    devServer: {
      proxy: {
        "/api": {
          target: "http://182.92.128.115/",
        }
      }
    }
  };
