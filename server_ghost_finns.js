"use strict";

var path = require('path')
  , ghost = require('ghost');

var ghostFinnsConfigPath = path.join(__dirname, 'config/ghost_config_finns.js');
ghost({config: ghostFinnsConfigPath}).then(function (ghostServer) {
  ghostServer.start();
});
