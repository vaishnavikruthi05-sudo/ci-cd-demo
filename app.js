const http = require('http');

const server = http.createServer((req,res)=>{
res.write("CI/CD Pipeline Working!");
res.end();
});

server.listen(3000);
