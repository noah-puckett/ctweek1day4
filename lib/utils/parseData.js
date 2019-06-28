//use the STRING method SPLIT to turn the RETURNED DATA STRING into an ARRAY 
//("splitting" elements apart on every new line), then store that in a VARIABLE
//SPLIT the first element in the array by SPACES, the first (0) element in THAT array is 'GET', 
//the second (1) element is "/", which we store in a VARIABLE

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
