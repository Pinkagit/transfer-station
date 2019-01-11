import Vue from 'vue'
/**
 * 时间格式化
 */
Vue.filter('datetime', function (value, format) {
  return (new Date(value)).Format(format || 'yyyy-MM-dd hh:mm')
})
/**
 * 时间格式化
 */
Vue.filter('https', function (value) {
  return value.replace('http://', 'https://')
})
