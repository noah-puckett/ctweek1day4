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
