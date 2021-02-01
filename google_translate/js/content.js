/* window.addEventListener(
  'mouseup',
  function handler() {
    var selection = window.getSelection()
    if (selection.anchorOffset !== selection.extentOffset) {
      chrome.runtime.sendMessage(selection.toString())
    }
  },
  false
) */
