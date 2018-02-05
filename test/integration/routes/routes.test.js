const root      = require('app-root-path');
const app       = require(`${root}/app`);
const request   = require('supertest')(app);


describe('#Routes', () => {
    it('title is MVCexpressJS', done => {
        request.get('/')
            .expect(200)
            .expect(/MVCexpressJS/, done);
    });
});
