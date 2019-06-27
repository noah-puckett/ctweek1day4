const { createServer } = require('http');

const app = createServer((req, res) => {
    res.end('You did it');
    //close? end? ()
})

module.exports = { app };
