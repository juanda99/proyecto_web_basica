(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "      <footer>\n      <p class=\"copyright\">Sitio web realizado por un amante de la cerveza</p>\n\n      </footer>";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n<div class=\"container\">\n      <img src=\"img/logo.png\" alt=\"\" class=\"logo\">\n      <h1 class=\"title\">Mis cervezas</h1>\n      <p class=\"subtitle\">Aficiones y locuras de un amante de la cerveza</p>\n      <nav>\n        <button onclick=\"toggle_visibility('menu');\" class=\"btnmenu\">Menu</button>\n        <ul id=\"menu\" class=\"menu\">\n          <li class=\"menuitem\">\n            <a href=\"index.html\" class=\"menulink\">Inicio</a>\n          </li>\n          <li class=\"menuitem\">\n            <a href=\"cervezas.html\" class=\"menulink\">Mis cervezas</a>\n          </li>\n          <li class=\"menuitem\">\n            <a href=\"contactar.html\" class=\"menulink\">Contactar</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <script type=\"text/javascript\">\n    function toggle_visibility(id) {\n      var e = document.getElementById(id);\n      if (e.style.display == 'block')\n        e.style.display = 'none';\n      else\n        e.style.display = 'block';\n    }\n    </script>\n\n    </header>";
},"useData":true});
})();