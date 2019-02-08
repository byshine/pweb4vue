const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const template = require("html-webpack-template");

module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      inject: false,
      template: template,
      title: "Boilerplate",
      appMountId: "app",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      ],
      links: [
        "https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i",
        "https://fonts.googleapis.com/css?family=Nunito:300,400,600,700"
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: ["babel-loader"]
      },

      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          "vue-style-loader",
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          { loader: "sass-loader", options: { indentedSyntax: true } }
        ]
      },

      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  }
};
