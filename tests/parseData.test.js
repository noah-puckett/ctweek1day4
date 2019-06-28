const { parseData } = require('../lib/utils/parseData');

describe('parse data function',  () => {

    it('takes unparsed data and returns correctly formatted data', () => {

        const data = `GET / HTTP/1.1
Host: localhost:8000
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/75.0.3770.90 Chrome/75.0.3770.90 Safari/537.36
DNT: 1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9`;

        const expected = {
            method: 'GET',
            path: '/'
        };

        const result = parseData(data);

        expect(result).toEqual(expected);
    });
});
