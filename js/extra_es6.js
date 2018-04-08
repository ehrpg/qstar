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

  let lists = document.querySelectorAll('.qs-list-test')

  lists.forEach(list => {
    console.log(list);
    let headers = list.querySelectorAll('h5')
    console.log(headers);

    let sections = []
    let section
    for (let i = 0; i < list.childNodes.length; i++) {
      let node = list.childNodes[i]
      if (node.nodeName.search(/H\d/i) > -1) {
        if (section != null) {
          sections.push(section)
        }
        section = document.createElement('section')
        var a = document.createElement('a')
        a.id = node.id
        node.id = '_' + node.id
        section.appendChild(node)
      }
      if (section != null) {
        section.appendChild(node)
      }
    }
    sections.push(section)

    console.log(sections);
    list.innerHTML = ''
    sections.forEach(section => {
      list.appendChild(section)
    })
  })

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
    wrapper.classList.add('cols-wrapper')
    if (i % 2) {
      wrapper.classList.add('cols-wrapper-right')
    }

    let element = start
    let nodes = []
    while ((element = element.nextElementSibling) !== end) {
      if (!wrapper.id && element.id) {
        wrapper.id = element.id
        element.id = '_' + element.id
      }
      nodes.push(element)
    }

    let divs = []
    let div
    nodes.forEach(node => {
      if (node.nodeName.search(/H\d/i) > -1) {
        div = document.createElement('section')

        var a = document.createElement('a')
        a.id = node.id
        node.id = '_' + node.id
        divs.push(a)
        divs.push(div)
        div.appendChild(node)
      }
      if (div) div.appendChild(node)
      else wrapper.appendChild(node)
    })
    console.log(divs)

    divs.forEach(div => {
      wrapper.appendChild(div)
    })

    let parent = element.parentNode
    parent.insertBefore(wrapper, element)
  }
})()
