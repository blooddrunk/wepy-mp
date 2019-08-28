"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

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
  }
}, {info: {"components":{"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"}},"on":{"52-3":["getphonenumber"],"52-4":["tap"]}}, handlers: {'52-3': {"getphonenumber": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getPhoneNumber($event)
      })();
    
  }},'52-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleLogin($event)
      })();
    
  }}}, models: {} });