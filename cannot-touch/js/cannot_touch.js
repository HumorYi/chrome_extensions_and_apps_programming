function btn_move(el, mouseLeft, mouseTop) {
  const leftRnd = (Math.random() - 0.5) * 20
  const topRnd = (Math.random() - 0.5) * 20
  let btnLeft = mouseLeft + (leftRnd > 0 ? 100 : -100) + leftRnd
  let btnTop = mouseTop + (topRnd > 0 ? 100 : -100) + topRnd
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  btnLeft =
    btnLeft < 100 ? btnLeft + windowWidth - 200 : btnLeft > windowWidth - 100 ? btnLeft - windowWidth + 200 : btnLeft

  btnTop =
    btnTop < 100 ? btnTop + windowHeight - 200 : btnTop > windowHeight - 100 ? btnTop - windowHeight + 200 : btnTop

  el.style.position = 'fixed'
  el.style.left = btnLeft + 'px'
  el.style.top = btnTop + 'px'
}

function over_btn(e) {
  if (!e) {
    e = window.event
  }

  btn_move(this, e.clientX, e.clientY)
}

document.querySelectorAll('.gNO89b')[1].onmouseover = over_btn
