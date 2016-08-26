module.exports = function (grunt) {
  require('time-grunt')(grunt)
  var webpackGruntfile = require('./webpack_gruntfile')
  var karmaGruntfile = require('./karma_gruntfile.js')
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      webpack: {
        files: ['modules/**/*.js'],
        tasks: ['webpack']
      }
    },
    webpack: webpackGruntfile,
    karma: karmaGruntfile
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-karma')

  grunt.registerTask('default', ['webpack'])
}
