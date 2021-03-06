const { createServer } = require('net');
const { createResponse } = require('./utils/createResponse');
const { parseData } = require('./utils/parseData');
const { sitesArray } = require('../public/public');

const contentType = {
    json: 'application/json',
    html: 'text/html'
};

const server = createServer(sock => {
    console.log('Server has been started');

    sock.on('data', data => {

        const parsedData = parseData(data); 

        if(parsedData.path === '/' && parsedData.method === 'GET') {
            const response = createResponse('200 OK', sitesArray.index, contentType.html);
            sock.write(response);
            sock.end();
        }
        else if(parsedData.path === '/red') {
            const response = createResponse('200 OK', sitesArray.red, contentType.html);
            sock.write(response);
            sock.end();
        }
        else if(parsedData.path === '/blue') {
            const response = createResponse('200 OK', sitesArray.blue, contentType.html);
            sock.write(response);
            sock.end();
        }
        else if(parsedData.path === '/green') {
            const response = createResponse('200 OK', sitesArray.green, contentType.html);
            sock.write(response);
            sock.end();
        }
        else if(parsedData.path === '/dog') {
            const response = createResponse('200 OK', JSON.stringify(sitesArray.dog), contentType.json);
            sock.write(response);
            sock.end();
        }
        else if(parsedData.path === '/' && parsedData.method === 'POST') {
            const response = createResponse('400', '<h1>Sorry! Absofruitly not!</h1>', contentType.html);
            sock.write(response);
            sock.end();
        }
        else {
            const response = createResponse('404', sitesArray.notFound, contentType.html);
            sock.write(response);
            sock.end();
        }
    });
});

module.exports = { server };
