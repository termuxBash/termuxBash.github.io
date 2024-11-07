const http = require('http');
const fs = require('fs');
/* var finalhandler = require('finalhandler');
var serveStatic = require('serve-static'); */
http.createServer(function (req, res) {
/*   var serve = serveStatic("./");
  var done = finalhandler(req, res);
  serve(req, res, done); */
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(2000, '192.168.29.14');

/*server.listen(3000, "192.168.29.14");

    "scripts": {
        "start": "node node_modules/something/server.js & node server.js && fg
    }
    */

const child_process = require('child_process');

// commands list
const commands = [
  {
    name: 'Node Server- Socket.io',
    command: 'node ./nodeServer/index.js'
  }
];

// run command
function runCommand(command, name, callback) {
  child_process.exec(command, function (error, stdout, stderr) {
    if (stderr) {
      callback(stderr, null);
    } else {
      callback(null, `Successfully executed ${name} ...`);
    }
  });
}

// main calling function
function main() {
  commands.forEach(element => {
    runCommand(element.command, element.name, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  });
}

// call main
main();
console.log("Socket - Node server running on port 2000")