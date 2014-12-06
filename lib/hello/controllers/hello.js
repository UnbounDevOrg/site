var exports = module.exports;

var greeter   = require('../models/greeter');

exports.sayHello = function(req, res) {

  var name = req.param('name', '');

  var context = {
    site_title: "Node.js Bootstrap Demo Page"
  , welcome_message: greeter.welcomeMessage(name)
  };

  var template = 'hello/views/hello.html';
  res.render(template, context);

};