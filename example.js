var koa = require ('koa');
var boom = require ('.');
var app = koa ();

app.use (function * (next) {
  boom.badRequest(this, 'custom message');
});

app.listen (3000);