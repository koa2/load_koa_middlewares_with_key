const Koa = require('koa');
const app = new Koa();
const path = require('path')

var load_koa_middlewares = require('load_koa_middlewares')

app.use((ctx, next) => {
  return next().then(() => {
    console.log('hello etag fresh= ' + ctx.fresh)
    if (ctx.fresh) {
      ctx.status = 304;
      ctx.body = null;
    }
  });
})

var config = require('get_closest_package_json').config

console.log(config)
// var config = path.join(__dirname, '../conf.yml')

app.use(require('./')())

app.use((ctx, next)=>{
  console.log('hello etag fresh= ' + ctx.fresh)
  ctx.body = '<h1>hello etag</h1>'
  // ctx.etag = 'etaghaha';
  console.log('hello etag fresh= ' + ctx.fresh)
})

app.listen(3005);
