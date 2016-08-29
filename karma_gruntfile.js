module.exports = {
  options: {
    basePath: '',
    files: [
      'spec/**/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    preprocessors: {
      'modules/**/*.js': ['webpack'],
      'spec/**/*.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: ['transform-react-jsx']
          }
        }]
      }
    }
  },
  unit: {}
}
