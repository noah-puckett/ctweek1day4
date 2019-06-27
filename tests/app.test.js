const { app} = require('../lib/app')
const { getFilePath } = require('../lib/utils/filehelper');

describe('app static server', () => {
    const filePath = getFilePath('/index.html');


    it('gets an index if we ask', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.statusCode).toEqual()
            })
    })
})