"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(13));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _trim = _interopRequireDefault(require('../vendor.js')(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core.default.page({
  data: {
    mobile: '13323332333',
    captcha: '',
    error: '',
    captchaText: '获取验证码',
    canSendMessage: true
  },
  computed: {},
  methods: {
    clearError: function clearError() {
      this.error = '';
    },
    checkMobile: function checkMobile() {
      if (!(0, _trim.default)(this.mobile)) {
        this.error = '请输入手机号';
        return false;
      } else if (!/^1\d{10}$/.test(this.mobile)) {
        this.error = '手机号格式错误';
        return false;
      }

      return true;
    },
    checkCaptcha: function checkCaptcha() {
      if (!(0, _trim.default)(this.captcha)) {
        this.error = '请输入验证码';
        return true;
      }

      return false;
    },
    getCaptcha: function () {
      var _getCaptcha = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2.default.mark(function _callee() {
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.checkMobile()) {
                  _context.next = 6;
                  break;
                }

                this.canSendMessage = false;
                _context.next = 4;
                return this.initiateCountDown(60);

              case 4:
                this.captchaText = '获取验证码';
                this.canSendMessage = true;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCaptcha() {
        return _getCaptcha.apply(this, arguments);
      }

      return getCaptcha;
    }(),
    initiateCountDown: function () {
      var _initiateCountDown = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2.default.mark(function _callee2(timeleft) {
        var _this = this;

        return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.captchaText = "".concat(timeleft, "s\u540E\u518D\u6B21\u83B7\u53D6");
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var countdownTimer = setInterval(function () {
                    timeleft--;
                    _this.captchaText = "".concat(timeleft, "s\u540E\u518D\u6B21\u83B7\u53D6");

                    if (timeleft <= 0) {
                      clearInterval(countdownTimer);
                      resolve(true);
                    }
                  }, 1000);
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initiateCountDown(_x) {
        return _initiateCountDown.apply(this, arguments);
      }

      return initiateCountDown;
    }(),
    handleLogin: function () {
      var _handleLogin = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2.default.mark(function _callee3() {
        var payload;
        return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.checkMobile() && this.checkCaptcha()) {
                  payload = {
                    mobile: this.mobile,
                    captcha: this.captcha
                  };
                  console.log(playload);

                  _core.default.wx.navigateTo({
                    url: 'user-home'
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleLogin() {
        return _handleLogin.apply(this, arguments);
      }

      return handleLogin;
    }()
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: 'welcome'
    };
  }
}, {info: {"components":{},"on":{}}, handlers: {'25-24': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearError($event)
      })();
    
  }},'25-25': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearError($event)
      })();
    
  }},'25-26': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getCaptcha($event)
      })();
    
  }},'25-27': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleLogin($event)
      })();
    
  }}}, models: {'12': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'13': {
      type: "input",
      expr: "captcha",
      handler: function set ($v) {
      var _vm=this;
        _vm.captcha = $v;
      
    }
    }} });