// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result;

  var primative = function(value){
    if(typeof value === 'string'){
      return '"' + value + '"';
    } else {
      return String(value);
    }
  };

  result = primative(obj);

  return result;

};
