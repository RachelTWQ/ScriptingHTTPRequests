

module.exports = function getHTML (options, callback){
    var https = require('https');
    var buffer = '';
    https.get(options, function(response){

      response.setEncoding('utf8');
      response.on('error', function(error){
          callback(error);
          throw error;
      });
      response.on('data', function(chunk){
          buffer += chunk;
          callback(buffer);
      });
      response.on('end', function(){
          callback('Mission Completed');
      });
    });
}