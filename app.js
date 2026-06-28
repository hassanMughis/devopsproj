const http = require('http')
http.createserver((res,req)=>{
    res.writeHead(200);
    res.end("hello from jankist pipline!");
}).listen(3000, () => {"server is running on port 3000"}):

