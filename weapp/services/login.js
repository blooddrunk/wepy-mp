"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LOGIN_AUTH_KEY = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(13));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _toast = _interopRequireDefault(require('../vendor.js')(5));

var _dialog = _interopRequireDefault(require('../vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LOGIN_AUTH_KEY = 'LOGIN_AUTH_KEY';
exports.LOGIN_AUTH_KEY = LOGIN_AUTH_KEY;
var isDev = "development" === 'development';

var onLoginFailure =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime2.default.mark(function _callee(error) {
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _toast.default.fail({
              message: '登录失败！',
              mask: true,
              forbidClick: true
            });

            _core.default.wx.navigateTo({
              navigateTo: 'pages/index'
            });

            if (isDev) {
              console.error(error);
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onLoginFailure(_x) {
    return _ref.apply(this, arguments);
  };
}();

var promptForUserInfo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime2.default.mark(function _callee2() {
    var setting, response;
    return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _dialog.default.alert({
              title: '提示',
              message: '不登录无法正常使用~\n\n请允许获取您的用户信息...',
              cancelText: '不了',
              confirmButtonText: '去允许'
            });

          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return _core.default.wx.openSetting();

          case 5:
            setting = _context2.sent;

            if (!setting.authSetting['scope.userInfo']) {
              _context2.next = 13;
              break;
            }

            _context2.next = 9;
            return _core.default.ex.getUserInfo();

          case 9:
            response = _context2.sent;
            return _context2.abrupt("return", response.userInfo);

          case 13:
            return _context2.abrupt("return", null);

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", null);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 16]]);
  }));

  return function promptForUserInfo() {
    return _ref2.apply(this, arguments);
  };
}();

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime2.default.mark(function _callee3() {
  var code, response, userInfo, _response;

  return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          code = ''; // get login code

          _context3.prev = 1;
          _context3.next = 4;
          return _core.default.wx.login();

        case 4:
          response = _context3.sent;
          code = response.code;
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          onLoginFailure(_context3.t0);

        case 11:
          userInfo = null; // get userInfo

          _context3.prev = 12;
          _context3.next = 15;
          return _core.default.wx.getUserInfo();

        case 15:
          _response = _context3.sent;
          userInfo = _response.userInfo;
          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t1 = _context3["catch"](12);
          userInfo = promptForUserInfo();

        case 22:
          if (!userInfo) {
            onLoginFailure();
          }

          userInfo.code = code; // TODO: remote login

          _core.default.wx.setStorageSync(LOGIN_AUTH_KEY, 'get token from remote');

          return _context3.abrupt("return", userInfo);

        case 26:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, null, [[1, 8], [12, 19]]);
}));

exports.default = _default;