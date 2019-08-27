"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.normalizeFields = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(13));

var _request = _interopRequireDefault(require('../services/request.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var normalizeFields = function normalizeFields(fields) {
  return fields.reduce(function (acc, cur) {
    if (!Array.isArray(cur)) {
      cur = [cur];
    }

    var _cur = cur,
        _cur2 = _slicedToArray(_cur, 2),
        key = _cur2[0],
        _cur2$ = _cur2[1],
        initialValue = _cur2$ === void 0 ? [] : _cur2$;

    acc[key] = {
      value: initialValue,
      initialValue: initialValue,
      loading: false,
      error: null
    };
    return acc;
  }, {});
};

exports.normalizeFields = normalizeFields;

var _default = function _default() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? 'asyncData' : _ref$namespace;

  if (!Array.isArray(fields)) {
    console.error('[withAsyncData] ', 'field config should be an array');
    return;
  }

  return {
    name: 'with-async-data-local',
    data: _defineProperty({}, namespace, normalizeFields(fields)),
    methods: {
      fetchAsyncData: function () {
        var _fetchAsyncData = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime2.default.mark(function _callee(fieldName, config) {
          var field, data;
          return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (Object.prototype.hasOwnProperty.call(this[namespace], fieldName)) {
                    _context.next = 3;
                    break;
                  }

                  console.error("[withAsyncData] '".concat(fieldName, "' not defined in asyncData"));
                  return _context.abrupt("return");

                case 3:
                  field = this[namespace][fieldName];
                  field.loading = true;
                  _context.prev = 5;
                  _context.next = 8;
                  return (0, _request.default)(config);

                case 8:
                  data = _context.sent;
                  field.value = data;
                  return _context.abrupt("return", data);

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](5);
                  field.error = _context.t0;
                  field.value = field.initialData; // TODO: deal with error

                  console.error(_context.t0);
                  throw _context.t0;

                case 19:
                  _context.prev = 19;
                  field.loading = false;
                  return _context.finish(19);

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 13, 19, 22]]);
        }));

        function fetchAsyncData(_x, _x2) {
          return _fetchAsyncData.apply(this, arguments);
        }

        return fetchAsyncData;
      }(),
      resetAsyncData: function resetAsyncData() {
        this[namespace] = normalizeFields(fields);
      }
    }
  };
};

exports.default = _default;