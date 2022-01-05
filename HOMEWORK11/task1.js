const http = require('http');
const os = require('os');
const path = require('path');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(__filename);
    res.write(`
        <h1>System information</h1>
        <p>Current user name: ${os.userInfo().username}</p>
        <p>OS type: ${os.type()}</p>
        <p>System work time: ${os.uptime / 60}</p>
        <p>Current work directory: ${path.parse(__filename).dir}</p>
        <p>Server file name: ${path.basename(__filename)}</p>
    `);
    res.end();
}).listen(5000);