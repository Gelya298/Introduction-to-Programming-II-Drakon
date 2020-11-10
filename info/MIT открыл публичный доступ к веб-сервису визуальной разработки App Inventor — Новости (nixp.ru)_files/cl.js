try {
	cl = (!(console && console.log))? Prototype.emptyFunction :
	function() {
		if (arguments.length == 0) {
			return console.log('here');
		}
		console.log.apply(console, arguments)
		return true;
	};
} catch (e) {
	cl = Prototype.emptyFunction;
}
pa = cl;
//cl = alert;

$t = (function() {

  var Methods = { }, ByTag = Element.Methods.ByTag;
  Object.extend(Methods, Element.Methods);
  Object.extend(Methods, Element.Methods.Simulated);

  var extend = function(element, force) {
    if (!element || element.ancestors || element == window)
    	return element;
    if (element.nodeType != 1)
    	return $t(element.parentNode);

    var methods = Object.clone(Methods),
      tagName = element.tagName, property, value;

    if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);

    for (property in methods) {
      value = methods[property];
      if (Object.isFunction(value) && !(property in element))
        element[property] = value.methodize();
    }

    element._extendedByPrototype = Prototype.emptyFunction;
    return element;
  }
  
  return extend;
})();