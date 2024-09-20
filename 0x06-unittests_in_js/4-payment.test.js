// 4-payment.test.js
import { sendPaymentRequestToApi } from './4-payment.js';
import Utils from './utils.js';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', () => {
  let stub;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restore the original method
    stub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(stub);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
  });

  it('should log the correct total', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    consoleLogSpy.restore();
  });
});
