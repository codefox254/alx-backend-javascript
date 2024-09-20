// 6-payment_token.js
export function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Do nothing
      reject();
    }
  });
}
