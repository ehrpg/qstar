;(function () {
  if (window.location.href.indexOf('/settings/stalker/equipment/') > -1) {
    stalkerEquipment()
  }

  function stalkerEquipment () {
    var previousTr
    var cartridges = document.querySelector('h2#cartridges')

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
      tr.classList.add('targetted')
      previousTr = tr
      cartridges.scrollIntoView(true)
      window.scrollBy(0, -60) // offset for topnav
    }
  }
})()
