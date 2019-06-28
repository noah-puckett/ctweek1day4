//function takes (data from http packet in request?, application/json | text/html?) {
//    returns packet with interp values
//}

function makeHTTPPacket(data) {
    return `
    HTTP/1.1 ${status}
    Date: ${Date()}
    Accept-Ranges: bytes
    Content-Length: ${contentLength}
    Connection: Keep-Alive
    Content-Type: ${contentType}
    
    ${data}`;
}

module.exports = { makeHTTPPacket };
