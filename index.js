var http = require('http')
var ecstatic = require('ecstatic')

module.exports = function promiseAssets (options) {
  return new Promise(function (resolve) {
    var requests = []
    var server = http.createServer(ecstatic(options))
      .listen(options.port || 1337, function () {
        resolve({
          error: null,
          requests: requests,
          server: server
        })
      })

    server.on('request', function (req) {
      requests.push(req)
    })

    server.on('error', function (err) {
      resolve({
        error: err,
        requests: requests,
        server: null
      })
    })
  })
}
