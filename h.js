
 var http = require('http');

 http.createServer(function(request, response) {
   console.log('get 8080')

     http.request({hostname: 'localhost', port: 8080}, function(res){
       console.log('send 9000')

    //  var proxyRequest = res.request(request.method, request.url, request.headers);
     res.on('response', function (proxyResponse) {
      //  proxyResponse.pipe(response);
       request.pipe(proxyResponse);

     });

   })
 }).listen(8080);

 http.createServer(function (req, res) {
   console.log('get 9000')
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write('request successfully proxied to port 9000!' + '\n' + JSON.stringify(req.headers, true, 2));
   res.end();
 }).listen(9000);
