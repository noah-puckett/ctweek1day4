function parseData(data) {
    
    const dataArray = data.toString().split('\n');
    const method = dataArray[0].split(' ')[0];
    const path = dataArray[0].split(' ')[1];
    const contentLength = Buffer.from(dataArray).length;

    const dataObj = {
        dataArray,
        method,
        path,
        contentLength
    };

    return dataObj;
}

module.exports = { parseData };
