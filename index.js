const debug = require('debug')('load_koa_middlewares_with_key')
const load_koa_middlewares = require('load_koa_middlewares')

module.exports = function(key){
  var _key = key || 'config'
  const config = require('get_closest_package_json')[_key]
  
  debug(key)
  debug(config)
  
  return load_koa_middlewares(config)
}