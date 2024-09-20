// 5-payment.test.js
import { sendPaymentRequestToApi } from './5-payment.js';
import Utils from './utils.js';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleLogSpy;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber
    stub = sinon.stub(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original method and spy
    stub.restore();
    consoleLogSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    stub.returns(120);
    sendPaymentRequestToApi(100, 20);
    
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct total for 10 and 10', () => {
    stub.returns(20);
    sendPaymentRequestToApi(10, 10);
    
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
  });
});
