const http = require('http');

function rqListener(req,res){
    console.log(req);
    return res;
}
const server = http.createServer(rqListener);
server.listen(3000);