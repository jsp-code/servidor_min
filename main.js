console.log('ok')

const fs =require('fs');
const http =require('http');
const PORT = process.env.PORT || 8458

console.log('ok')

http.createServer(function (req, res) {
  var riquest = riquestType(req);
  if(riquest == 'index'){
    indexHtml(res);
  }else if(riquest == 'fileJS') {
    riquiriJS(req,res)
  }else if(riquest == 'fileCSS') {
    riquiriCSS(req,res)
  }
}).listen(PORT);



const riquestType = function(req){
  var url = req.url;
  if(req.url.indexOf('/')>=0 && req.url.length == 1) return 'index';
  if(req.url.indexOf('.js') == req.url.length -3) return 'fileJS';
  if(req.url.indexOf('.css') == req.url.length -4) return 'fileCSS';
}
const indexHtml = function(res){
  fs.readFile('app/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}
const riquiriJS = function(req,res){
  fs.readFile('app'+req.url, function(err, data) {
    res.writeHead(200, {'Content-Type':'text/javascript'});
    res.write(data);
    return res.end();
  });
}
const riquiriCSS = function(req,res){
  fs.readFile('app'+req.url, function(err, data) {
    res.writeHead(200, {'Content-Type':'text/css'});
    res.write(data);
    return res.end();
  });
}
