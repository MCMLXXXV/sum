module.exports = (...a) => a.reduce((acc, n) => {
  acc += n;
  return acc;
}, 0);
