//function takes (data from http packet in request?, application/json | text/html?) {
//    returns packet with interp values
//}

function makeHTTPPacket(data, status) {
    return `
    HTTP/1.1 ${status}
    Date: ${Date()}
    Accept-Ranges: bytes
    Content-Length: ${data.contentLength}
    Connection: Keep-Alive
    Content-Type: ${data.contentType}
    
    ${data}`;
    //TODO: LOGIC THE STATUS
    //TODO: figure out how to send the uhhhh like carriage return and spaces and stuff
}

module.exports = { makeHTTPPacket };
