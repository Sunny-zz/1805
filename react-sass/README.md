### 修改 create-react-app 环境配置 (dev 环境和 product 环境)

#### 方案一 直接在 create-react-app 配置文件中更改

- 在 node_modules/react-scripts/config/webpack.config.dev.js 开发环境 中更改配置

#### 方案二 使用 react-app-rewired 添加配置修改

- 安装 react-app-rewired
- 在根目录新建一个 配置文件 config-overrides.js 在此配置文件中添加配置

### 在 create-react-app 中使用 sass

#### 直接修改配置方案

- 安装 npm i -D node-sass sass-loader
- 找到配置 node_modules/react-scripts/config/webpack.config.dev.js,此文件是开发环境配置，如果生产环境配置也需要修改，那么也要找到 webpack.config.prod.js
- 在配置文件中查找到 file-loader 在 file-loader 的配置项 exclude 数组中添加一项 `/\.scss$/`
- 然后在 file-loader 这一项前面添加一项新的 sass-loader
  ```js
  {
    test:/\.scss$/,
    loader: ['style-loader','css-loader','sass-loader'],
  }
  ```
- 重启服务就可以引入 .scss 文件了

#### 使用 react-app-rewired 修改配置方案

- 安装 react-app-rewired 和 node-sass sass-loader
- 在根目录新建一个 配置文件 config-overrides.js
- 安装 react-app-rewire-sass-modules 来添加 sass 配置
- 在 config-overrides.js 文件内填入

  ```js
  const rewireSass = require('react-app-rewire-sass-modules')

  module.exports = function override(config, env) {
    config = rewireSass(config, env)

    return config
  }
  ```

- 修改 package.json 的 scripts 的 start 和 build 字段，修改成

  ```
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
  ```

- 重启服务即可使用 sass
