const server = require('./app');

server.listen(8484, 'localhost', null, function(){
        console.log('server is listening on localhost:8484')
});