// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var results = [];

  var start = document.body;

  var walk = function(element) {

    // _.each(element.childNodes, function(child) {
    //     if(_.contains(child.classList, className)){
    //       results.push(child);
    //     }

    //     walk(child);
    // });

    if(_.contains(element.classList, className)){
      results.push(element);
    }

    _.each(element.childNodes, walk);

  };

  walk(start);

  return results;

};
