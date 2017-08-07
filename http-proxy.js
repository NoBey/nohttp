
const net = require('net');

function httpProxy(proxy, agentProxy, agentHost){
  const server = net.createServer((client) => {
      var socket = net.connect(agentProxy, agentHost);
      client.pipe(socket).pipe(client);
  });
  server.listen(proxy);
}


httpProxy(2222, 80, 'nobey.cn')
