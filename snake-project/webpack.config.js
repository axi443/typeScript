const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  // 指定入口文件
  entry: "./index.ts",
  // 指定打包文件目录
  output: {
    // 指定打包文件目录
    path: path.resolve(__dirname, "dist"),
    // 编译后文件的文件
    filename: "bundle.js",
    // 告诉webpack不适用箭头函数
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      chrome: "88",
                      ie: "11",
                    },
                    // 指定版本
                    corejs: "3",
                    // 按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  //   配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是自定义的title",
      template: "./index.html",
    }),
  ],
  // 设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
