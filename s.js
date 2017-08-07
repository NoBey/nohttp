
const net = require('net');
var es = require('event-stream')

var i = 0;

var  Gclient;
var Hclient = {}
const Gserver = net.createServer((client) => {
  if(!Gclient) {
    console.log('连接')
    Gclient = client
  }else{
    client.pipe(es.split())
    .pipe(es.map(function (data, cb){
      console.log(data)
      // console.log(Hclient[data])
      this.end()
      Hclient[data].pipe(client).pipe(Hclient[data])
    }))
    // console.log(i)
    // Hclient[i].pipe(client).pipe(Hclient[i])
  }
});
Gserver.listen(2222);

const Hserver = net.createServer((client) => {
  console.log('http')
  Gclient.write(i+'\n')
  Hclient[i] = client
  i++
  // client.pipe(Gclient).pipe(client)

});

Hserver.listen(2333);



// var es = require('event-stream')
// process.stdout.pipe(socket)
  // socket.pipe(es.map(function(data, cb){
  //   console.log(data)
  //   cb(data)
  // }))
  // .pipe(process.stdout)
  // client.pipe(socket).pipe(client);



// if(!module.parent) {
//   var inspect = require('util').inspect
//
//   process.stdin                        //connect streams together with `pipe`
//     .pipe(es.split())                  //split stream to break on newlines
//     .pipe(es.map(function (data, cb) { //turn this async function into a stream
//       cb(null
//         , inspect(JSON.parse(data)))   //render it nicely
//     }))
//     .pipe(process.stdout)              // pipe it to stdout !
// }


// var client = new net.Socket();
// var ss
// const server = net.createServer((c) => {
//
// })
// server.on('connection', async(socketsocket)=>{
//   ss = socketsocket
//
// })
//
// server.listen(8124, async() => {
//   var client = new net.Socket();
//   var c = client.connect(8124, '127.0.0.1', function() {
//     //  client
//   });
//   c.on('readable', () => {
//   let chunk;
//   while (null !== (chunk = c.read())) {
//     console.log(`Received ${chunk}\n bytes of data.`);
//   }
// });
//
// await sleep(1000)
// ss.write('dsdsdsdsd2\n')
// await sleep(1000)
// ss.write('dsdsdsdsd3')
// });

// const server2 = net.createServer((c) => {
//   c2= c
//
// });
//
// server2.on('connection', (socket)=>{
//   // console.log(c1)
//   obj.socket = socket
//   if(initValue.length>0){
//     while(initValue.length>0){
//       c = initValue.shift()
//       c.pipe(socket)
//     }
//   }
//   // c1.pipe(socket)
//
// })
//
//
// server2.listen(8333, () => {
// });
