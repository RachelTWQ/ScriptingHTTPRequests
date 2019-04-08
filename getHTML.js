var https = require('https');

function getHTML (options, callback) {

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

function printHTML (html) {
    console.log(html);
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);