var restify = require('restify');
var TaggunClient = require("./taggun-client");

const TAGGUN_API_KEY = "c2614c90d47811e7a18e7df8Ofel9a6e";
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
 
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

// Adding route
server.post('/receipt/file', (req, res, next) =>{
  /**
  * Processing request containing multipart/form-data
  */
  var uploaded_file = req.files.mySubmittedFile;  // File in form

  //Reading and sending file
  fs.readFile(uploaded_file.path, {encoding: 'utf-8'}, (err, data)=>{
      // Returning a JSON containing the file's name and its content
      res.send({
          filename: uploaded_file.name,
          content: data
      });
      next()
  });
});


 /*
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
*/
var taggunClient = new TaggunClient(TAGGUN_API_KEY);
taggunClient.makeRequest("./one.jpg");