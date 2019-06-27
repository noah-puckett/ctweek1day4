// const app = require('app');

// app.listen(8080, () => {
//     res.end('you did it!');
// })

//new
const { createServer } = require('net');

const server = createServer(sock => {
    console.log('client connected');
    sock.write('I will echo');
    // sock.end()

    sock.on('data', data => {
        // console.log('from client side', data.toString())
        sock.write(data.toString());
    });
});

server.listen(8000, () => {
    // res.end()
});
