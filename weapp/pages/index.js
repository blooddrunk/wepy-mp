"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(13));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _toast = _interopRequireDefault(require('../vendor.js')(5));

var _login = _interopRequireDefault(require('../services/login.js'));

var _withAsyncData = _interopRequireDefault(require('../mixins/withAsyncData.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core.default.page({
  mixins: [(0, _withAsyncData.default)(['list'])],
  data: {
    userInfo: {
      nickName: '加载中...'
    }
  },
  computed: {},
  methods: {
    handleClick: function handleClick() {
      _toast.default.success({
        message: 'Clicked!'
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2.default.mark(function _callee() {
      return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _login.default)(this.$wx);

            case 2:
              this.userInfo = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  ready: function () {
    var _ready = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2.default.mark(function _callee2() {
      return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.fetchAsyncData('list', {
                url: 'https://hn.algolia.com/api/v1/search',
                __needAuth: false,
                transformData: function transformData(_ref) {
                  var hits = _ref.hits;
                  return hits;
                }
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function ready() {
      return _ready.apply(this, arguments);
    }

    return ready;
  }()
}, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"simple-list":{"path":"../components/simple-list"},"van-button":{"path":"../$vendor/vant-weapp/lib/button/index"},"van-toast":{"path":"../$vendor/vant-weapp/lib/toast/index"},"van-dialog":{"path":"../$vendor/vant-weapp/lib/dialog/index"}},"on":{"26-0":["tap"]}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} });