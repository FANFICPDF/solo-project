const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  // entry: [
  //   // entry point of our app
  //   './src/index.js',
  // ],
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/',
  //   filename: 'bundle.js',
  // },

  // devtool: 'eval-source-map',
  mode: 'development',

  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   // enable HMR on the devServer
  //   hot: true,
  //   // fallback to root for other urls
  //   historyApiFallback: true,

  //   static: {
  //     // match the output path
  //     directory: path.resolve(__dirname, 'dist'),
  //     // match the output 'publicPath'
  //     publicPath: '/',
  //   },

  //   headers: { 'Access-Control-Allow-Origin': '*' },
  //   /**
  //    * proxy is required in order to make api calls to
  //    * express server while using hot-reload webpack server
  //    * routes api fetch requests from localhost:8080/api/* (webpack dev server)
  //    * to localhost:3000/api/* (where our Express server is running)
  //    */
  //   proxy: {
  //     '/api/**': {
  //       target: 'http://localhost:3000/',
  //       secure: false,
  //     },
  //     '/assets/**': {
  //       target: 'http://localhost:3000/',
  //       secure: false,
  //     },
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
  // resolve: {
  //   // Enable importing JS / JSX files without specifying their extension
  //   extensions: ['.js', '.jsx'],
  // },
};
