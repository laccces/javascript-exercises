const repeatString = function(string, num) {
  let newString = '';
  let error = 'ERROR';
  if (num < 0) { return error
  }
  
  
  for (let i = 0; i < num; i++) {
  newString = newString + string;
  }
  if (num => 0) {return newString}
  }
  

repeatString('hey', -1);

module.exports = repeatString;