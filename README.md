## 打包优化处理
### babel-plugin-transform-remove-console
生产环境清除console.log, 但保留error和warn

### compression-webpack-plugin
生产环境开启gzip压缩，提升访问速度，服务器环境需要做相应配置，本地提前gzip压缩减少服务器压力。

### externals
生产环境cdn引入vue element-ui echarts 提升打包后页面加载速度

Copyright (c) 2020-present GaoYu