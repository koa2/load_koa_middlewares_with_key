# load_koa_middlewares_with_key

configuration default in package.json

[doc](https://github.com/i5ting/load_koa_middlewares/blob/master/README.zh.md)

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