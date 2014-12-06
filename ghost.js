
var path = require('path')
    , ghost = require('ghost');

var ghostConfigPath = path.join(__dirname, 'config/ghost_config.js');

//boot up the ghost!
ghost({config: ghostConfigPath}).then(function (ghostServer) {
    ghostServer.start();
});
