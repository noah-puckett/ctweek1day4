//function takes (data from http packet in request?, application/json | text/html?) {
//    returns packet with interp values
//}

//OH DEAR I MIGHT BE WRONG:
// function makeHTTPPacket(data, status) {
//     return `
//     HTTP/1.1 ${status}
//     Date: ${Date()}
//     Accept-Ranges: bytes
//     Content-Length: ${data.contentLength}
//     Connection: Keep-Alive
//     Content-Type: ${data.contentType}
    
//     ${data}`;
//     //TODO: LOGIC THE STATUS
//     
// }

function createResponse(status, responsePathHTML, contentType) {
    return `HTTP/1.1 ${status}
Date: ${new Date()}
Accept-Ranges: bytes
Content-Length: ${Buffer.from(responsePathHTML).length}
Connection: Keep-Alive
Content-Type: ${contentType}

${responsePathHTML}`;

}

module.exports = { createResponse };
