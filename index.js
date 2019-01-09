var http=require('http');
var httpProxy=require('http-proxy');
var proxy=new httpProxy.createProxyServer({ws:true,target:{host:'localhost',port:8080}});
var fs=require('fs');
var path=require('path');
var showdown=require('showdown');
var converter = new showdown.Converter();

var mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif'
};

http.createServer(function (req, res) {
  var convertReadme=false;
  if (req.headers.host=='global.minesnf.com' || req.headers.host=='ru1.minesnf.com') {
    proxy.web(req, res);
  } else {
    var filePath=path.join(__dirname,req.url=="/"?'index.html':req.url);
    var extname = path.extname(filePath).toLowerCase();
    var contentType = mimeTypes[extname] || 'text/plain';
    if (path.basename(filePath).toLowerCase()=='index.html'){
      convertReadme=true;
      filePath=path.join(__dirname,"readme.md");
    }
    fs.readFile(filePath, function(error, content) {
      if (error) {
        if(error.code == 'ENOENT') {
          fs.readFile(path.join(__dirname,'404.html'), function(error, content) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          });
        } else {
          res.writeHead(500);
          res.end(error.code);
          res.end();
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(convertReadme?converter.makeHtml(content.toString()):content, 'utf-8');
      }
    });
  }
}).on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
}).listen(80);
