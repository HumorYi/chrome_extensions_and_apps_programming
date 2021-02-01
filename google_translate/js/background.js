chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu A',
  id: 'a'
})

chrome.contextMenus.create({
  type: 'radio',
  title: 'Menu B',
  id: 'b',
  checked: true
})

chrome.contextMenus.create({
  type: 'radio',
  title: 'Menu C',
  id: 'c'
})

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'Menu D',
  id: 'd',
  checked: true
})

chrome.contextMenus.create({
  type: 'separator'
})

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'Menu E',
  id: 'e'
})

chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu F',
  id: 'f',
  parentId: 'a'
})

chrome.contextMenus.create({
  type: 'separator',
  parentId: 'a'
})

chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu G',
  id: 'g',
  parentId: 'a'
})

chrome.contextMenus.create({
  type: 'normal',
  title: 'My Menu',
  contexts: ['link']
})

chrome.contextMenus.create({
  type: 'normal',
  // %s表示选定的文字
  title: '使用Google翻译“%s”',
  contexts: ['selection'],
  id: 'cn',
  onclick: translate
})

function translate(info, tab) {
  var url = 'http://translate.google.com.hk/#auto/zh-CN/' + info.selectionText
  window.open(url, '_blank')
}

/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  chrome.contextMenus.update('cn', {
    title: '使用Google翻译“' + message + '”'
  })
}) */
