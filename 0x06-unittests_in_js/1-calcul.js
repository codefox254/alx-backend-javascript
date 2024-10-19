<<<<<<< HEAD
function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = an + bn;
	break;
    case 'SUBTRACT':
	c = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            c = "Error";
      } else {
            c = an / bn;
      }
      break;
    }
    return c;
=======
const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
>>>>>>> refs/remotes/origin/main
}

module.exports = function calculateNumber(type, a, b = 0) {
  let aNum = Number(a);
  let bNum = Number(b);

  if (Number.isNaN(aNum) || Number.isNaN(bNum))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  aNum = Math.round(aNum);
  bNum = Math.round(bNum);

  switch (type) {
    case SUM:
      return aNum + bNum;
    case SUBTRACT:
      return aNum - bNum;
    case DIVIDE:
      if (bNum === 0) return 'ERROR';
      const quotient = aNum / bNum;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
