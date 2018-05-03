'use strict';

;(function () {
  if (window.location.href.indexOf('/settings/stalker/equipment/') > -1) {
    var hashUpdated = function hashUpdated() {
      var hash = window.location.hash;

      var span = document.getElementById(hash.substr(1));
      if (previousTr) {
        previousTr.classList.remove('targetted');
      }
      if (!span) return;

      var tr = span.parentNode.parentNode;
      if (tr.tagName !== 'TR') return;
      tr.classList.add('targetted');
      previousTr = tr;
      cartridges.scrollIntoView(true);
      window.scrollBy(0, -60); // offset for topnav
    };

    var previousTr = void 0;
    var cartridges = document.querySelector('h3#cartridges');

    hashUpdated();
    window.onhashchange = hashUpdated;
  }

  var lists = document.querySelectorAll('.qs-list-test');

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

  var starts = document.querySelectorAll('.col-layout-start');
  var ends = document.querySelectorAll('.col-layout-end');

  if (starts.length !== ends.length) {
    console.warn('col-layout not properly started/terminated.');
    return;
  }

  var _loop = function _loop(i, len) {
    var start = starts[i];
    var end = ends[i];

    var wrapper = document.createElement('div');
    wrapper.classList.add('cols-wrapper');
    if (i % 2) {
      wrapper.classList.add('cols-wrapper-right');
    }

    var element = start;
    var nodes = [];
    while ((element = element.nextElementSibling) !== end) {
      if (!wrapper.id && element.id) {
        wrapper.id = element.id;
        element.id = '_' + element.id;
      }
      nodes.push(element);
    }

    var divs = [];
    var div = void 0;
    nodes.forEach(function (node) {
      if (node.nodeName.search(/H\d/i) > -1) {
        div = document.createElement('section');

        var a = document.createElement('a');
        a.id = node.id;
        node.id = '_' + node.id;
        divs.push(a);
        divs.push(div);
        div.appendChild(node);
      }
      if (div) div.appendChild(node);else wrapper.appendChild(node);
    });
    console.log(divs);

    divs.forEach(function (div) {
      wrapper.appendChild(div);
    });

    var parent = element.parentNode;
    parent.insertBefore(wrapper, element);
  };

  for (var i = 0, len = starts.length; i < len; i++) {
    _loop(i, len);
  }
})();

(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 70,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);

(function () {
  'use strict'

  /**
 * Targets special code or div blocks and converts them to UML.
 * @param {object} converter is the object that transforms the text to UML.
 * @param {string} className is the name of the class to target.
 * @param {object} settings is the settings for converter.
 * @return {void}
 */
  var uml = function (converter, className, settings) {
    var getFromCode = function getFromCode (parent) {
    // Handles <pre><code>
      var text = ''
      for (var j = 0; j < parent.childNodes.length; j++) {
        var subEl = parent.childNodes[j]
        if (subEl.tagName.toLowerCase() === 'code') {
          for (var k = 0; k < subEl.childNodes.length; k++) {
            var child = subEl.childNodes[k]
            var whitespace = /^\s*$/
            if (child.nodeName === '#text' && !whitespace.test(child.nodeValue)) {
              text = child.nodeValue
              break
            }
          }
        }
      }
      return text
    }

    var getFromDiv = function getFromDiv (parent) {
    // Handles <div>
      return parent.textContent || parent.innerText
    }

    // Change body to whatever element your main Markdown content lives.
    var body = document.querySelectorAll('body')
    var blocks = document.querySelectorAll('pre.' + className + ',div.' + className

      // Is there a settings object?
    ); var config = settings === void 0 ? {} : settings

    // Find the UML source element and get the text
    for (var i = 0; i < blocks.length; i++) {
      var parentEl = blocks[i]
      var el = document.createElement('div')
      el.className = className
      el.style.visibility = 'hidden'
      el.style.position = 'absolute'

      var text = parentEl.tagName.toLowerCase() === 'pre' ? getFromCode(parentEl) : getFromDiv(parentEl)

      // Insert our new div at the end of our content to get general
      // typeset and page sizes as our parent might be `display:none`
      // keeping us from getting the right sizes for our SVG.
      // Our new div will be hidden via "visibility" and take no space
      // via `position: absolute`. When we are all done, use the
      // original node as a reference to insert our SVG back
      // into the proper place, and then make our SVG visible again.
      // Lastly, clean up the old node.
      body[0].appendChild(el)
      var diagram = converter.parse(text)
      diagram.drawSVG(el, config)
      el.style.visibility = 'visible'
      el.style.position = 'static'
      parentEl.parentNode.insertBefore(el, parentEl)
      parentEl.parentNode.removeChild(parentEl)
    }
  };

  (function () {
    var onReady = function onReady (fn) {
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn)
      } else {
        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'interactive') {
            fn()
          }
        })
      }
    }

    onReady(function () {
      if (typeof flowchart !== 'undefined') {
        uml(flowchart, 'uml-flowchart')
      }

      if (typeof Diagram !== 'undefined') {
        uml(Diagram, 'uml-sequence-diagram', { theme: 'simple' })
      }
    })
  })()
}())
