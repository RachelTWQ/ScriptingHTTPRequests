var https = require('https');

function getAndPrintHTMLChunks(){
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    https.get(requestOptions, function(response){
    // if(error){
    //     console.log(error);
    //     return;
    // }

    response.setEncoding('utf8');
    response.on('error', function(error){
        console.log(error);
        throw error;
    });
    
    response.on('data', function(chunk){
        console.log(chunk + '\n');
    });
    
    response.on('end', function(){
        console.log('Response stream completed.');
    });
    
});
}

getAndPrintHTMLChunks();