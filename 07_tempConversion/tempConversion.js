const ftoc = function(num1) {
  let conversion = ((num1 - 32) * (5 / 9)).toFixed(1);
  return +conversion;
  
};

const ctof = function(num1) {
  let conversion = (num1 * (9 / 5) + 32).toFixed(1);
  return +conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
