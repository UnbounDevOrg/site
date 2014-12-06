var exports = module.exports;

//var greeter   = require('../models/greeter');

exports.serve = function(req, res) {

  var name = req.param('name', '');

  var context = {

  };

  var template = 'about/page.html';
  res.render(template, context);

};