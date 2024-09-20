const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Adjust the path if necessary
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Tests', () => {

  // Test suite for /login
  describe('/login', () => {
    it('should return welcome message with username', (done) => {
      chai.request(app)
        .post('/login')
        .send({ userName: 'Betty' }) // Updated username for consistency
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({ message: 'Welcome Betty' }); // Deep equality check
          done();
        });
    });
  });

  // Test suite for /available_payments
  describe('/available_payments', () => {
    it('should return available payment methods', (done) => {
      chai.request(app)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          }); // Deep equality check
          done();
        });
    });
  });
});
