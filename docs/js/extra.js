;(function () {
  if (window.location.href.indexOf('/settings/stalker/equipment/') > -1) {
    var previousTr
    var cartridges = document.querySelector('h3#cartridges')

    hashUpdated()
    window.onhashchange = hashUpdated

    function hashUpdated () {
      var hash = window.location.hash

      var span = document.getElementById(hash.substr(1))
      if (previousTr) {
        previousTr.classList.remove('targetted')
      }
      if (!span) return

      var tr = span.parentNode.parentNode
      if (tr.tagName !== 'TR') return
      tr.classList.add('targetted')
      previousTr = tr
      cartridges.scrollIntoView(true)
      window.scrollBy(0, -60) // offset for topnav
    }
  }

  // var starts = document.querySelectorAll('.col-layout-start')
  // var ends = document.querySelectorAll('.col-layout-end')

  // if (starts.length !== ends.length) {
  //   console.warn('col-layout not properly started/terminated.')
  //   return
  // }

  // for (var i = 0, len = starts.length; i < len; i++) {
  //   var start = starts[i]
  //   var end = ends[i]

  //   var wrapper = document.createElement('div')
  //   wrapper.className = 'cols-wrapper'

  //   var element = start
  //   var nodes = []
  //   while ((element = element.nextElementSibling) !== end) {
  //     nodes.push(element)
  //     // wrapper.appendChild(element)
  //   }

  //   nodes.forEach(function (node) {
  //     if (node.classList.contains('admonition')) {
  //       var div = document.createElement('div')
  //       div.appendChild(node)
  //       wrapper.appendChild(div)
  //     } else {
  //       wrapper.appendChild(node)
  //     }
  //   })

  //   var parent = element.parentNode
  //   parent.insertBefore(wrapper, element)
  // }
})()
