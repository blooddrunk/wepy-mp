"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.use(_x.default);

_core.default.app({
  hooks: {},
  onLaunch: function onLaunch() {},
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });