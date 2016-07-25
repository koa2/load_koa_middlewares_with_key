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

## Advance 

使用jwf处理package.json，所以可以使用外部js作为配置项

```
{
  "name": "jwf",
  "version": "1.0.0",
  "description": "json with file require",
  "b":  "./b.js"
}
```
