// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -2 when adding -1.4 and -1.5', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -1.5), -2);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 1.4 from 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when subtracting -1.4 from -1.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -1.5), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when dividing 1.4 by 0.3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
    });
  });
});
