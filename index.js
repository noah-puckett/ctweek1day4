const { createServer } = require('net');
const { makeHTTPPacket } = require('./lib/utils/makeHTTPPacket');
const { parseData } = require('./lib/utils/parseData');

const server = createServer(sock => {
    console.log('Server has uhhhh been started? I think?');
    // sock.write('I will echo');
    // // sock.end()

    //use the STRING method SPLIT to turn the RETURNED DATA STRING into an ARRAY 
    //("splitting" elements apart on every new line), then store that in a VARIABLE
    //SPLIT the first element in the array by SPACES, the first (0) element in THAT array is 'GET', 
    //the second (1) element is "/", which we store in a VARIABLE
    sock.on('data', data => {
        
        const parsedData = parseData(data); 

        console.log(parsedData);

        sock.write(parsedData => {
            makeHTTPPacket(parsedData);
        });
    });
});

server.listen(8000, () => {
    // res.end()
});
