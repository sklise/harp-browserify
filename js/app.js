$ = require('./jquery')
_ = require('./underscore')

$(function () {
  $("body").css("background","green");

  _.map([1,2,3,4,5,6], function (n) {
    $('body').append("<h"+n+">Hello</h"+n+">")
  })
})
