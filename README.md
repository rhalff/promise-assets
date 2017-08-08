# Promise Assets

Promises to serve files and resolves with the server itself so it can easily be shutdown again.

The promise is resolved once the server is up and running.

Resolved object:
```
{
  server: <http server instance>,
  requests: [requests made],
  error: ...
}
```

```
const promiseAssets = require('promise-assets')

promiseAssets({
  root: __dirname,
  port: 8080
})
.then((result) => {
  result.server.close()
})
```

```
import promiseAssets from 'promise-assets'

const { server } = await promiseAssets({
  root: __dirname,
  port: 8080
})

server.close()
```

### Usage with Jest:

```
let assets;

beforeEach(() => {
  assets = await promiseAssets({ root: __dirname, port: 1337})
})

it('Should serve my asset', () => {
  request('http://localhost:1337/some_static_asset.txt')
    .then((result) => {
      console.log('Yeay my asset', result)
    });
});

afterEach(() => {
  assets.server.close()
})
```
