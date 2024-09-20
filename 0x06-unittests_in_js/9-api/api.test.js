import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './api.js';

const { expect } = chai;

chai.use(chaiHttp);

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return status 200 and the correct message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  // New test suite for /cart/:id endpoint
  describe('GET /cart/:id', () => {
    it('should return 200 and correct message for a numeric id', (done) => {
      chai.request(app)
        .get('/cart/123')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Payment methods for cart 123');
          done();
        });
    });

    it('should return 404 for a non-numeric id', (done) => {
      chai.request(app)
        .get('/cart/abc')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.equal('Cart ID must be a number');
          done();
        });
    });

    it('should return 404 for a negative id', (done) => {
      chai.request(app)
        .get('/cart/-1')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should return 404 for a decimal id', (done) => {
      chai.request(app)
        .get('/cart/1.5')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
