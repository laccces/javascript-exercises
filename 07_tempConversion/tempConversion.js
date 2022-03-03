function ftoc(fnum) {
  var fsum = (fnum - 32)*(5/9);
  var rounded = Math.round(fsum * 10)/10;
  return rounded;
  };
  
  
  function ctof(cnum) {
  var csum = (cnum)*(9/5)+32;
  var rounded = Math.round(csum * 10)/10;
  return rounded;
  
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
