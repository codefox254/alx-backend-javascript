function calculateNumber(a, b) {
<<<<<<< HEAD
    const an = Math.round(a);
    const bn = Math.round(b);
    const c = an + bn;
    return c;
=======
    return Math.round(a) + Math.ceil(b);
>>>>>>> refs/remotes/origin/main
}
  
module.exports = calculateNumber;
