
const net = require('net');

var c1,c2
var i=0;

var obj = {};
var initValue= []
Object.defineProperty(obj,"arr",{
    get:function (){

        return initValue.shift()
    },
    set:function (value){
      if(obj.socket){
        value.pipe(obj.socket)
      }else{
        initValue.push(value)

      }
    }
});


const server = net.createServer((c) => {
  console.log(++i)
  console.log(initValue.length)
  obj.arr = c
});


server.listen(8124, () => {
});



const server2 = net.createServer((c) => {
  c2= c

});

server2.on('connection', (socket)=>{
  // console.log(c1)
  obj.socket = socket
  if(initValue.length>0){
    while(initValue.length>0){
      c = initValue.shift()
      c.pipe(socket)
    }
  }
  // c1.pipe(socket)

})


server2.listen(8333, () => {
});
