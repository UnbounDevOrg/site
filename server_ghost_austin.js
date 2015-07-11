/**
 * Created by austin on 7/11/15.
 */

"use strict";

var path = require('path')
  , ghost = require('ghost');

var ghostConfigPath = path.join(__dirname, 'config/ghost_config.js');
ghost({config: ghostConfigPath}).then(function (ghostServer) {
  ghostServer.start();
});
