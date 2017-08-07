var net = require('net');
var es = require('event-stream')
var sleep = require('es7-sleep')


// var Gsocket = net.connect(2222, 'nobey.cn');
// var socket = net.connect(8080, '127.0.0.1');
var Gsocket  = net.connect(2222, '127.0.0.1')
//
// var socket = net.connect(80, 'lb.nobey.cn');


Gsocket.pipe(es.split())
.pipe(es.map(function (data, cb){
  var R= net.connect(2222, '127.0.0.1')
  var L= net.connect(80, 'lb.nobey.cn');
  R.write(data+'\n')
  R.pipe(L).pipe(R)
  console.log(data)
}))



    // .pipe(process.stdout)



// Gsocket.pipe(socket).pipe(Gsocket)


// 为客户端添加“data”事件处理函数
// data是服务器发回的数据

// client.on('close', function() {
//     console.log('Connection closed');
// });
