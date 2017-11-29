var request = require('request');
var fs = require('fs');


TaggunClient = function(key){
	this.key = key;
};

TaggunClient.prototype.makeRequest = function(imagePath) {
	const formData = {
	  file: {
	    value: fs.createReadStream(imagePath),
	    options: {
	      	filename: "file",
	      	contentType: "image/jpeg"
	    	}
  		}
	};

  request.post({
    url: "https://api.taggun.io/api/receipt/v1/verbose/file",
   formData,
    headers: { 
      apikey: this.key 
    }
  }, function(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful! Server responded with:', body);
  }); 
};

module.exports = TaggunClient;
