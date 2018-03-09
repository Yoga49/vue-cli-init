/*
 * 开发环境与生产环境之间参数切换
 * baseUrl： 域名地址
 * isDebug： debug 是否开启
 *
*/

'use strict'

let baseUrl = ''
let isDebug = false

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.1.53:8081'
  isDebug = true
} else {
  baseUrl = ''
  isDebug = false
}

export {
  baseUrl,
  isDebug
}
