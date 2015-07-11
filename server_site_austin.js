
var nunjucks = require('nunjucks')
  , path = require('path');

//switch view to nunjucks
var view = function(app) {

  var env = nunjucks;

  function NunjucksView(name, opts) {
    this.name          = name;
    this.path          = name;
    this.defaultEngine = opts.defaultEngine;
    this.ext           = path.extname(name);
    if (!this.ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
    if (!this.ext) this.name += (this.ext = ('.' !== this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
  }

  NunjucksView.prototype.render = function(opts, cb) {
    env.render(this.name, opts, cb);
  };

  app.set('view', NunjucksView);
};

require('nodebootstrap-server').setup(function(runningApp) {
console.log("NODE_SERVE_STATIC",process.env.NODE_SERVE_STATIC)
  //---- Mounting well-encapsulated application modules
  //---- See: http://vimeo.com/56166857

  //use nunjucks for our view rendering, gotta have that inheritance yo!
  nunjucks.configure(path.join(__dirname,'views'));
  view(runningApp);

  //start using prerender to deliver page content to crawlers
  //runningApp.use(require('prerender-node').set('prerenderToken', 'emLglvuHvJ1SCYuUstyU'));

  runningApp.use('/', require('./lib/about')); // attach to sub-route
  runningApp.use('/about', require('./lib/about')); // attach to sub-route
});
