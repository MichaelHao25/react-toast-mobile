"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  // Toast
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    onClick: function onClick() {
      return _index["default"].load('加载中...');
    }
  }, "\u52A0\u8F7D\u4E2D"), _react["default"].createElement("div", {
    onClick: function onClick() {
      return _index["default"].success('加载成功');
    }
  }, "\u52A0\u8F7D\u6210\u529F"), _react["default"].createElement("div", {
    onClick: function onClick() {
      return _index["default"].fail('加载失败');
    }
  }, "\u52A0\u8F7D\u5931\u8D25"), _react["default"].createElement("div", {
    onClick: function onClick() {
      return _index["default"].toast('hello,react');
    }
  }, "toast"), _react["default"].createElement("p", null, "\u6CE8\u610F\u4E00\u5B9A\u8981\u662F\u5148\u51FA\u73B0\u52A0\u8F7D\u4E2D\u540E\u624D\u53EF\u4EE5\u51FA\u73B0\u6210\u529F\u6216\u8005\u5931\u8D25.."));
};

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('root'));