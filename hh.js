const http = require('http')

const keepAliveAgent = new http.Agent({ keepAlive: true });
// http.get({
//   hostname: 'nobey.cn',
//   port: 80,
//   path: '/',
//   agent: false  // 创建一个新的代理，只用于本次请求
// }, (res) => {
//   console.log('22')
//   // 处理事情
// });
// console.log('--')
const cl = keepAliveAgent.createConnection({   host: 'nobey.cn',port: 80 }, function(e,c){
  console.log('sdsdsds')
console.log(e,c)
})


cl.on('data', (data) => {
    console.log(data.toString());
})
