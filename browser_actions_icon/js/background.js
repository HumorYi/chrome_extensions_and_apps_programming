function changeIcon(index) {
  index = index === undefined ? 0 : index % 20

  chrome.browserAction.setIcon({ path: { 19: 'images/icon19_' + index + '.png' } })
  chrome.browserAction.setIcon({ path: { 38: 'images/icon38_' + index + '.png' } })

  setTimeout(() => {
    changeIcon(index + 1)
  }, 50)
}

changeIcon()

// 可以是十六进制的字符串颜色码，也可以是rgba格式的数组，但需要注意的是其中的alpha变量的取值范围同样为0-255
// chrome.browserAction.setBadgeBackgroundColor({ color: '#0000FF' })
chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 128] })
chrome.browserAction.setBadgeText({ text: 'Dog' })
