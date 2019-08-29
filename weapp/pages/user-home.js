"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.page({
  data: {
    propertyNum: '12345.00',
    userID: '1234',
    belong: '突破华东一级经销商'
  },
  computed: {
    displayUserID: function displayUserID() {
      return "ID: ".concat(this.userID);
    },
    displayBelong: function displayBelong() {
      return "\u5F52\u5C5E: ".concat(this.belong);
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: 'welcome'
    };
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });