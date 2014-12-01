module.exports = function (el, V) {
  var c, v, e;
  v = new V();
  v.render();
  e = document.querySelector(el);
  e.innerHTML = null;
  e.appendChild(v.el);
}
