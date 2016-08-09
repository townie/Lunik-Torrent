var App = {}
;(function () {
  function _App () {
    var self = this
    requirejs.config({
      paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'crypto-js': '../bower_components/crypto-js/crypto-js',
        'vue': '../bower_components/vue/dist/vue.min',
        'notify-me': '../bower_components/notify.me/dist/js/notify-me'
      }
    })

    // load modules
    requirejs(['jquery', 'crypto-js', 'vue'], function (jq, crypto, vue) {
      self.Vue = vue
      self.v = new self.Vue({
        el: '.form',
        data: {
          login: {
            user: '',
            pass: ''
          },
          register: {
            user: '',
            pass: '',
            pass2: ''
          }
        }
      })
      requirejs(['notify-me', 'format', 'loading'], function(notif){
        self.updateHash()
        App.Loading.hide('app')
      })
    })
  }

  _App.prototype.updateHash = function() {
    var self = this
    self.hash = document.location.hash.substring(1)

    $(window).bind('hashchange', function () {
      self.hash = document.location.hash.substring(1)
    })
  }

  App = new _App()
})()
