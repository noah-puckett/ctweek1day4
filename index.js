const { createServer } = require('net');
const { createResponse } = require('./lib/utils/makeHTTPPacket');
const { parseData } = require('./lib/utils/parseData');

const contentType = {
    json: 'application/json',
    html: 'text/html'
};

const index = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>YOU HAVE SUCCEEDED</h1>
</body>
</html>`;

const server = createServer(sock => {
    console.log('Server has uhhhh been started? I think?');

    sock.on('data', data => {
        
        const parsedData = parseData(data); 

        if(parsedData.path === '/') {
            const response = createResponse('200 OK', index, contentType.html);
            sock.write(response);
            sock.end();
        }
        else {
            console.log('SOMETHING IS ROTTEN IN DENMARK');
        }
    });
});

server.listen(8000, () => {
});
