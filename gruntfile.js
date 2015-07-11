/**
 * Created by austin on 7/11/15.
 */

"use strict";

var path = require("path");

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      all: {
        CWD: __dirname,
        NODE_CONFIG_DIR: path.join(__dirname, "config"),
        NODE_SERVE_STATIC: "1"
      }
    },

    run: {
      site_austin: {
        cmd: 'node',
        args: [
          "server_site_austin.js"
        ]
      },
      ghost_finns: {
        cmd: 'node',
        args: [
          "server_ghost_finns.js"
        ]
      },
      ghost_austin: {
        cmd: 'node',
        args: [
          "server_ghost_austin.js"
        ]
      }
    },

    concurrent: {
      up: {
        tasks: ["start_site_austin", "start_ghost_finns", "start_ghost_austin"],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('start_site_austin', [
    "run:site_austin"
  ]);

  grunt.registerTask('start_ghost_finns', [
    "run:ghost_finns"
  ]);

  grunt.registerTask('start_ghost_austin', [
    "run:ghost_austin"
  ]);

  grunt.registerTask('up', [
    "env:all",
    "concurrent:up"
  ]);

};
