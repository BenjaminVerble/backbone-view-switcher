module.exports = function (el, V, C) {
  var c, v, e;
  c = new C();
  v = new V({collection: c});
  v.render();
  e = document.querySelector(el);
  e.innerHTML = null;
  e.appendChild(v.el);
}
