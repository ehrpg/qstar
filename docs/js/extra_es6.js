;(function () {
  if (window.location.href.indexOf('/settings/stalker/equipment/') > -1) {
    let previousTr
    let cartridges = document.querySelector('h3#cartridges')

    hashUpdated()
    window.onhashchange = hashUpdated

    function hashUpdated () {
      let hash = window.location.hash

      let span = document.getElementById(hash.substr(1))
      if (previousTr) {
        previousTr.classList.remove('targetted')
      }
      if (!span) return

      let tr = span.parentNode.parentNode
      if (tr.tagName !== 'TR') return
      tr.classList.add('targetted')
      previousTr = tr
      cartridges.scrollIntoView(true)
      window.scrollBy(0, -60) // offset for topnav
    }
  }

  let starts = document.querySelectorAll('.col-layout-start')
  let ends = document.querySelectorAll('.col-layout-end')

  if (starts.length !== ends.length) {
    console.warn('col-layout not properly started/terminated.')
    return
  }

  for (let i = 0, len = starts.length; i < len; i++) {
    let start = starts[i]
    let end = ends[i]

    let wrapper = document.createElement('div')
    wrapper.className = 'cols-wrapper'

    let element = start
    let nodes = []
    let divWrapper = document.createElement('div')
    while ((element = element.nextElementSibling) !== end) {
      nodes.push(element)
    }

    let divs = []
    let div
    nodes.forEach(function (node) {
      if (node.nodeName.search(/H\d/i) > -1) {
        div = document.createElement('div')
        divs.push(div)
        div.appendChild(node)
      }
      if (div) div.appendChild(node)
    })
    console.log(divs)

    divs.forEach(function (div) {
      wrapper.appendChild(div)
    })

    let parent = element.parentNode
    parent.insertBefore(wrapper, element)
  }
})()
