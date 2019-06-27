const { createConnection } = require('net');

// const mailserveraddress = 'googlestuff?'

const client = createConnection(8000, 'localhost', () => {

    console.log('connected');
    
    setInterval(() => {
        client.write(Date());
    }, 1000);
    
}); 

client.on('data', data => {
    console.log(data.toString());
});


//new
// const client = createconnection(25, mailserveraddress, () => {
// })

// const from = 'address';
// const to = 'address';

// const email = `from, interp address to interp address, date interp new date, subject string, contents, carriage returns and stuff`

// const steps = [
//     'HELO ryan.com',
//     `mail from<${from email address}>`,
//     `RCT TO ${to address}`,
//     'DATA something\n',
//     email,
//     'QUIT\n'
// ]

// let step = 0;

// client.on('data', data => {
//     if(step === steps.length) {
//         client.end();
//     }
//     client.write(steps[step]);
//     step++;

// })
