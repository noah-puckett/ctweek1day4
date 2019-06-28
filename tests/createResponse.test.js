const { createResponse } = require('../lib/utils/makeHTTPPacket');

describe('create response', () => {

    it('if given a request, returns correctly interpolated response', () => {
        
        const contentType = {
            json: 'application/json',
            html: 'text/html'
        };

        const request = `GET / HTTP/1.1
        Date: ${new Date()}
        Accept-Ranges: bytes
        Content-Length: 290
        Connection: Keep-Alive
        Content-Type: text/html`;
        
        const expected = `<!DOCTYPE html>
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

        const result = createResponse('200 OK', request, contentType.html);

        expected(expected).toEqual(result);
    }); 
});
