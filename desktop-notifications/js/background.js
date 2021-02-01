chrome.notifications.create(
  '',
  {
    type: 'basic',
    iconUrl: '../images/icon48.png',
    message: new Date().toLocaleString(),
    title: 'notification'
  },
  function (id) {
    setTimeout(function () {
      chrome.notifications.clear(id)
    }, 5000)
  }
)
