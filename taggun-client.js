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
    url: 'https://www.taggun.io/api/receipt/v1/file/verbose', formData,
    
    headers: { apikey: this.key }
  }, function(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful! Server responded with:', body);
  }); 


};

module.exports = TaggunClient;
