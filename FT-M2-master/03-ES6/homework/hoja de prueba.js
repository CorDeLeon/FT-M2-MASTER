//var matchFunctionMaker = function (selector) {
  //var selectorType = selectorTypeMatcher(selector);
    //var matchFunction;
    //if (selectorType === "id") {
    //} else if (selectorType === "class") {
    //} else if (selectorType === "tag.class") {
    //} else if (selectorType === "tag") {
    //}
    //return matchFunction;
  //};
  
//  var $ = function (selector) {
  //  var elements;
    //var selectorMatchFunc = matchFunctionMaker(selector);
//    elements = traverseDomAndCollectElements(selectorMatchFunc);
  //  return elements;
 // };



//  var selectorTypeMatcher = function (selector) {
    // tu código aquí
//    if (selector.includes("#")) {
  //    return "id";
    //} else if (selector.includes(".")) {
      //if (selector.includes(" ")) {
        //return "tag.class";
//      } else {
  //      return "class";
    //  }
   // } else {
     // return "tag";
  //  }
  //};

//  var matchFunctionMaker = function(selector) {
  //  var selectorType = selectorTypeMatcher(selector);
    //var matchFunction;
  
//    if (selectorType === "id") {
  //    var id = selector.slice(1); // Remove the "#" character from the selector
    //  matchFunction = function(element) {
      //  return element.id === id;
//      };
  //  } else if (selectorType === "class") {
    //  var className = selector.slice(1); // Remove the "." character from the selector
      //matchFunction = function(element) {
        //var classNames = element.className.split(" ");
 //       return classNames.includes(className);
   //   };
    //} else if (selectorType === "tag.class") {
      //var parts = selector.split(" ");
//      var tagName = parts[0];
  //    var className = parts[1].slice(1); // Remove the "." character from the class selector
    //  matchFunction = function(element) {
      //  var classNames = element.className.split(" ");
        //return element.tagName.toLowerCase() === tagName && classNames.includes(className);
//      };
  //  } else if (selectorType === "tag") {
    //  var tagName = selector;
      //matchFunction = function(element) {
        //return element.tagName.toLowerCase() === tagName;
 //     };
   // }
  
   // return matchFunction;
 // };




  // Recursively traverse the DOM tree starting from startEl
//  function traverseDOM(element) {
    // Check if the current element matches the given matchFunc
//    if (matchFunc(element)) {
  //    resultSet.push(element);
    //}

    // Traverse the child elements
//    var children = element.children;
  //  for (var i = 0; i < children.length; i++) {
    //  traverseDOM(children[i]);
  //  }
 // }

  // Start traversing the DOM
//  traverseDOM(startEl);

  //return resultSet;



//  var matchFunctionMaker = function(selector) {
  //  var selectorType = selectorTypeMatcher(selector);
    //var matchFunction;
  
//    if (selectorType === "id") {
  //    var id = selector.slice(1); // Remove the "#" character from the selector
    //  matchFunction = function(element) {
      //  return element.id === id;
  //    };
    //} else if (selectorType === "class") {
      //var className = selector.slice(1); // Remove the "." character from the selector
//      matchFunction = function(element) {
  //      var classNames = element.className.split(" ");
    //    return classNames.includes(className);
      //};
//    } else if (selectorType === "tag.class") {
  //    var parts = selector.split(".");
    //  var tagName = parts[0];
      //var className = parts[1];
//      matchFunction = function(element) {
  //      var classNames = element.className.split(" ");
    //    return element.tagName.toLowerCase() === tagName && classNames.includes(className);
      //};
//    } else if (selectorType === "tag") {
  //    var tagName = selector;
    //  matchFunction = function(element) {
      //  return element.tagName.toLowerCase() === tagName;
//      };
  //  }
  
 //   return matchFunction;
  //};