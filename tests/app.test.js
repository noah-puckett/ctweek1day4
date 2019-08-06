const request = require('supertest');
const { server } = require('../lib/app');


describe('app routes correctly', () => {

    it('handles / route correctly', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('WELCOM'));
            });
    });

    it('handles /red route correctly', () => {
        return request(server)
            .get('/red')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('RED'));
            });
    });

    it('handles /blue route correctly', () => {
        return request(server)
            .get('/blue')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('BLUE'));
            });
    });

    it('handles /green route correctly', () => {
        return request(server)
            .get('/green')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('EEEEEEE'));
            });
    });

    it('handles /dog route correctly', () => {
        return request(server)
            .get('/dog')
            .then(res => {
                //in the future, be able to expect res.contentType to equal 'application/json'
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('name'));
            });
    });

    it('handles POST request correctly', () => {
        return request(server)
            .post('/')
            .then(res => {
                expect(res.status).toEqual(400);
                expect(res.text).toEqual(expect.stringContaining('Absofruitly'));
            });
    });

    it('handles 404 route correctly', () => {
        return request(server)
            .get('/badPath')
            .then(res => {
                expect(res.status).toEqual404;
                expect(res.text).toEqual(expect.stringContaining('pal'));
            });
    });
});

