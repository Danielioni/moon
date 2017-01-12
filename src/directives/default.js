/* ======= Default Directives ======= */
directives[config.prefix + "if"] = function(el, val, vdom) {
  var evaluated = new Function("return " + val);
  if(!evaluated()) {
    el.textContent = "";
  } else {
    el.textContent = compileTemplate(vdom.val, self.$data);
  }
}

directives[config.prefix + "show"] = function(el, val, vdom) {
  var evaluated = new Function("return " + val);
  if(!evaluated()) {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

directives[config.prefix + "on"] = function(el, val, vdom) {
  var splitVal = val.split(":");
  var eventToCall = splitVal[0];
  var methodToCall = splitVal[1];
  el.addEventListener(eventToCall, function() {
    self.callMethod(methodToCall);
  });
  delete vdom.props[config.prefix + "on"];
}

directives[config.prefix + "model"] = function(el, val, vdom) {
  el.value = self.get(val);
  el.addEventListener("input", function() {
    self.set(val, el.value);
  });
  delete vdom.props[config.prefix + "model"];
}

directives[config.prefix + "for"] = function(el, val, vdom) {
  var parts = val.split(" in ");
  var alias = parts[0];
  var array = self.get(parts[1]);
}

directives[config.prefix + "once"] = function(el, val, vdom) {
  vdom.val = el.textContent;
  for(var child in vdom.children) {
    vdom.children[child].val = compileTemplate(vdom.children[child].val, self.$data);
  }
}

directives[config.prefix + "text"] = function(el, val, vdom) {
  el.textContent = val;
}

directives[config.prefix + "html"] = function(el, val, vdom) {
  el.innerHTML = val;
}

directives[config.prefix + "mask"] = function(el, val, vdom) {

}
