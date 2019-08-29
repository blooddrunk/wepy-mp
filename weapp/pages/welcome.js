"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _login = require('../services/login.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.page({
  computed: {},
  methods: {
    getPhoneNumber: function getPhoneNumber(event) {
      console.log(event);
    },
    handleLogin: function handleLogin() {
      _core.default.wx.navigateTo({
        url: 'login'
      });
    }
  },
  created: function created() {
    (0, _login.wxLogin)();
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: '/page/welcome'
    };
  }
}, {info: {"components":{"logo":{"path":"../components/logo"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"}},"on":{"24-2":["getphonenumber"],"24-3":["tap"]}}, handlers: {'24-2': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }},'24-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleLogin($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"logo":{"path":"../components/logo"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"}},"on":{"24-2":["getphonenumber"],"24-3":["tap"]}}, handlers: {'24-2': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }},'24-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleLogin($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"logo":{"path":"../components/logo"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"}},"on":{"24-2":["getphonenumber"],"24-3":["tap"]}}, handlers: {'24-2': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }},'24-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleLogin($event)
      })();
    
  }}}, models: {} });