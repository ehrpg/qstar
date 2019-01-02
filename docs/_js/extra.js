'use strict';

;(function () {
  document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementsByClassName("md-nav");
    for(var i = 0; i < nav.length; i++) {
        if (nav.item(i).getAttribute("data-md-level")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for(var i = 0; i < nav.length; i++) {
       nav.item(i).checked = true;
    }
  });

  var lists = document.querySelectorAll('.qs-list-test:not(.p)');
  lists.forEach(function (list) {
    var headers = list.querySelectorAll('h5');
    var children = list.childNodes;

    var section = void 0;
    var div = void 0;
    var divs = [];
    children.forEach(function (node) {
      if (node.nodeName.search(/H\d/i) > -1) {
        if (div != null) {
          divs.push(div);
        }
        div = document.createElement('div');
        section = document.createElement('section');
        var a = document.createElement('a');
        a.id = node.id;
        node.id = '_' + node.id;
        div.appendChild(a);
        div.appendChild(section);
      }

      if (section != null) {
        section.appendChild(node);
      }
    });
    divs.push(div);

    var wrapper = document.createElement('div');
    divs.forEach(function (div) {
      return wrapper.appendChild(div);
    });

    list.innerHTML = wrapper.innerHTML;
  });
})();
