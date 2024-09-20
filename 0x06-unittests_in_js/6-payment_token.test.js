// 6-payment_token.test.js
import { expect } from 'chai'; // Import expect from Chai
import { getPaymentTokenFromAPI } from './6-payment_token.js';

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the test is complete
      })
      .catch((err) => done(err)); // If there's an error, pass it to done
  });

  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected')); // Fail the test if the promise resolves
      })
      .catch(() => {
        done(); // Call done when the promise is rejected
      });
  });
});
