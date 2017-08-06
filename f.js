const fs = require('fs')
var fileReadStream = fs.createReadStream('./a.js', {
    flags:"r",
    encoding:null,
    mode:0666
}  )

fileReadStream.on('data',function(data){
  console.log(data)
    // fileWriteStream.write(data);
});

fileReadStream.on('end',function(){
    console.log("readStream end");
    // fileWriteStream.end();
});
