const staticCache = require('koa-static-cache')
const Koa = require('koa');


function static(Port, Pwd){
  const port = Port || '8080'
  const pwd = pwd || process.cwd()
  const app = new Koa();
  app.use(staticCache(pwd))
  console.log(`port:${port}---pwd:${pwd}`)
  return app.listen(port)
}

module.exports = static
