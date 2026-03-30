const http = require('http');
const server = http.createServer(function(req, res) {

    if (req.url === '/hello') {
        res.end('charith puttabakula');
    }
    res.end('Hello Worldsss');
});

server.listen(3001)