import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -2 when adding -1.4 and -1.5', function() {
      expect(calculateNumber('SUM', -1.4, -1.5)).to.equal(-2);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 1.4 from 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when subtracting -1.4 from -1.5', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing 1.4 by 0.3', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.equal('Error');
    });
  });
});
