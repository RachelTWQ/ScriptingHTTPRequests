var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var buffer = '';
  https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('error', function(error){
        console.log(error);
        throw error;
    });
    response.on('data', function(chunk){
        buffer += chunk;
        console.log(buffer);
    });
    response.on('end', function(){
        console.log('Mission Completed');
    });
  });
}

getAndPrintHTML();