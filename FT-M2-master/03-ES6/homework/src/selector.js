var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
    // Recorre el árbol del DOM y recolecta elementos que matcheen en resultSet
  // Usa matchFunc para identificar elementos que matcheen
  function traverseDOM(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }
    element = element.firstElementChild;
    while (element) {
      traverseDOM(element);
      element = element.nextElementSibling;
    }
  }

  traverseDOM(startEl);

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function(selector) {
  if (selector.includes("#")) {
    return "id";
  } else if (selector.includes(".")) {
    if (selector.indexOf(".") < selector.indexOf(" ")) {
      return "tag.class";
    } else {
      return "class";
    }
  } else {
    return "tag";
  }
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    var id = selector.slice(1);
    matchFunction = function (element) {
      return element.id === id;
    };
  } else if (selectorType === "class") {
    var className = selector.slice(1);
    matchFunction = function (element) {
      var classNames = element.className.split(" ");
      return classNames.includes(className);
    };
  } else if (selectorType === "tag.class") {
    var parts = selector.split(".");
    var tagName = parts[0];
    var className = parts[1];
    matchFunction = function (element) {
      var classNames = element.className.split(" ");
      return element.tagName.toLowerCase() === tagName && classNames.includes(className);
    };
  } else if (selectorType === "tag") {
    var tagName = selector;
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === tagName;
    };
  }

  return matchFunction;
};


var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
