import React from "react";
import ReactDOM from 'react-dom';
import Toast from "./index";

const App = () => {
  // Toast
  return React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: () => Toast.load('加载中...')
  }, "\u52A0\u8F7D\u4E2D"), React.createElement("div", {
    onClick: () => Toast.success('加载成功')
  }, "\u52A0\u8F7D\u6210\u529F"), React.createElement("div", {
    onClick: () => Toast.fail('加载失败')
  }, "\u52A0\u8F7D\u5931\u8D25"), React.createElement("div", {
    onClick: () => Toast.toast('hello,react')
  }, "toast"), React.createElement("p", null, "\u6CE8\u610F\u4E00\u5B9A\u8981\u662F\u5148\u51FA\u73B0\u52A0\u8F7D\u4E2D\u540E\u624D\u53EF\u4EE5\u51FA\u73B0\u6210\u529F\u6216\u8005\u5931\u8D25.."));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));