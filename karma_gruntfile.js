module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    preprocessors: {
      'spec/**/*.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  },
  unit: {
    files: [{
      src: [
        'public/js/app.bundler.js',
        'spec/**/*.js'
      ]}
    ]
  }
}
