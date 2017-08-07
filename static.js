
const staticCache = require('koa-static-cache')
const Koa = require('koa');
const app = new Koa();
app.use(staticCache(process.cwd()))

console.log(process.cwd())
app.listen(3000);
