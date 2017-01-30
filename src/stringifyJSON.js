// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result;

  var primative = function(obj){
    var result;

    if(typeof obj === 'string'){
      result = '"' + obj + '"';
    } else {
      result = String(obj);
    }

    return result;
  };

  var array = function(obj){
    var container = [];
    var result;

    _.each(obj, function(item){
      container.push(stringifyJSON(item));
    });
    result = '[' + container.join() + ']';

    return result;
  };

  var object = function(obj){
    var container = [];
    var result;

    for(var property in obj){
      if(typeof obj[property] !== 'function' && obj[property] !== undefined){
        container.push('"' + property + '":' + stringifyJSON(obj[property]));
      }
    }
    result = '{' + container.join() + '}';

    return result;
  };

  if(Array.isArray(obj)){
    result = array(obj);
  } else if(typeof obj === 'object' && obj !== null){
    result = object(obj);
  }else {
    result = primative(obj);
  }

  return result;

};
