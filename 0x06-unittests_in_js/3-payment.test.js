// 3-payment.test.js
import { sendPaymentRequestToApi } from './3-payment.js';
import Utils from './utils.js';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original method
    spy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
  });

  it('should log the correct total', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    consoleLogSpy.restore();
  });
});
