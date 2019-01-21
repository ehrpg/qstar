'use strict';

;(function () {
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
