function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText)
    }
  }

  xhr.send()
}

// 域名不存在
httpRequest('http://sneezryworks.sinaapp.com/ip.php', function (ip) {
  document.getElementById('ip_div').innerText = ip
})
