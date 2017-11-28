var request = require('request');
var fs = require('fs');


const formData = {
  ipAddress: '219.88.232.1',
  file: {
    value: fs.createReadStream(__dirname + "/one.jpg"),
    options: {
      filename: "file",
      contentType: "image/jpeg"
    }
  }
};

exports.processReciept = function() {
  console.log("processReciept");
      // url: 'https://api.taggun.io/api/receipt/v1/verbose/file', formData,

  request.post({
    url: 'https://www.taggun.io/api/receipt/v1/file/verbose', formData,
    
    headers: { apikey: 'c2614c90d47811e7a18e7df8Ofel9a6e' }
  }, function(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful! Server responded with:', body);
  });  

  
}