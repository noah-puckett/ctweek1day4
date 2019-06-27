const { createServer } = require('net');

const server = createServer(sock => {
    console.log('Server has uhhhh been started? I think?');
    // sock.write('I will echo');
    // // sock.end()

    sock.on('data', data => {
        console.log('from client side', data.toString());
        // sock.write(data.toString());
    });
});

server.listen(8000, () => {
    // res.end()
});
