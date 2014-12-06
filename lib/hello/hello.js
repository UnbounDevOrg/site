/**
 * This is a self-contained module that defines its routes, callbacks, models and views
 * all internally. Such approach to code organization follows the recommendations of TJ:
 *
 * http://vimeo.com/56166857
 *
 */

// Don't just use, but also export in case another module needs to use these as well.
var callbacks    = require('./controllers/hello');
var models       = require('./models');

module.exports = function(req,res) {

    callbacks.sayHello(req,res);
};
