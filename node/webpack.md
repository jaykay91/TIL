# Webpack

webpack은 자바스크립트 모듈 번들러이다.

## Vue 설정

```js
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  resolve: {
    extensions: [".vue", ".js"]
  },
  entry: {
    app: "./src/main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "dist"
  },
  plugins: [new VueLoaderPlugin()]
};
```

## 기타 설정

```js
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    // 외부 라이브러리들을 vendor로 묶는다.
    vendor: ["lodash-es", "moment"]
  },
  output: {
    // 파일 이름을 chunkhash로 사용한다.
    filename: "[chunkhash].js"
  },
  plugins: [
    // hash 사용할 때 hash이름을 담은 json파일을 생성한다.
    new ManifestPlugin({
      fileName: "manifest.json"
    }),
    // hash파일이 쌓이지 않게 dist폴더를 비워준다.
    new CleanWebpackPlugin()
  ],
  // 파일 분리 설정
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};

// webpack hook을 이용해서 원하는 시점에 필요한 일을 할 수 있다.
const pluginName = "PluginExample";
class PluginExample {
  apply(compiler) {
    compiler.hooks.afterEmit.tap(pluginName, compilation => {
      // dist파일들을 뱉어낸 다음에 호출된다.
      // ...
    });
  }
}
```
