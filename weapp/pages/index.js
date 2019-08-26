"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.page({
  config: {
    navigationBarTitleText: 'test'
  },
  data: {
    userInfo: {
      nickName: '加载中...'
    }
  },
  computed: {},
  methods: {},
  created: function created() {
    wx.getUserInfo({
      success: function success(res) {
        self.userInfo = res.userInfo;
      }
    });
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });