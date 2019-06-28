const { createResponse } = require('../lib/utils/createResponse');

describe('create response', () => {

    it('handles 404 errors correctly', () => {

        global.Date = jest.fn(() => {
            return '1234';
        });
        
        const contentType = {
            json: 'application/json',
            html: 'text/html'
        };

        const request = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        </head>
        <body>
        <h1>Okay listen I'mma be frank with you pal, I found nothin'. Not even like, dust.</h1>
        </body>
        </html>`;
        
        const expected = `HTTP/1.1 404
Date: ${new Date()}
Accept-Ranges: bytes
Content-Length: 418
Connection: Keep-Alive
Content-Type: text/html

<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        </head>
        <body>
        <h1>Okay listen I'mma be frank with you pal, I found nothin'. Not even like, dust.</h1>
        </body>
        </html>`;

        const result = createResponse('404', request, contentType.html);

        expect(result).toEqual(expected);
    });

    it('if given a request, returns correctly interpolated response', () => {
        global.Date = jest.fn(() => {
            return '1234';
        });
        
        const contentType = {
            json: 'application/json',
            html: 'text/html'
        };

        const request = `<!DOCTYPE html>
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
        
        const expected = `HTTP/1.1 200 OK
Date: ${new Date()}
Accept-Ranges: bytes
Content-Length: 358
Connection: Keep-Alive
Content-Type: text/html

<!DOCTYPE html>
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

        expect(expected).toEqual(result);
    }); 
});
