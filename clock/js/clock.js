function clock(el) {
  var t = new Date()
  var h = t.getHours()
  var m = t.getMinutes()
  var s = t.getSeconds()

  m = m >= 10 ? m : '0' + m
  s = s >= 10 ? s : '0' + s

  el.innerHTML = h + ':' + m + ':' + s

  setTimeout(function () {
    clock(el)
  }, 1000)
}

var clock_div = document.getElementById('clock_div')
clock(clock_div)
