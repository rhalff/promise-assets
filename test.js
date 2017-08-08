const promiseAssets = require('./')

promiseAssets({
  root: __dirname,
  port: 8080
})
.then((result) => {
  const id = setInterval(() => {
    if (result.requests.length === 3) {
      console.log(
        result.requests.map((req) => ({ url: req.url, method: req.method }))
      )
      result.server.close()

      clearInterval(id)
    }
  }, 500)

  console.log('Awaiting 3 requests')
})
