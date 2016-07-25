# load_koa_middlewares_with_key

configuration default in package.json


## Install

```
$ npm i -S load_koa_middlewares_with_key
```

## Usages

```
app.use(require('load_koa_middlewares_with_key')())
```

or

```
app.use(require('load_koa_middlewares_with_key')('config'))
```

config in package.json


```
  "config": {
    "koa-favicon": {
      "path": "sss",
      "options": {
        "maxAge": 1
      }
    },
    "koa-etag": {}
  },
```