"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./css/inlinecss");

var _snapsvg = _interopRequireDefault(require("snapsvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// class DialogCustom extends React.Component {
//     static show = params => {
//       let container = document.createElement("div");
//       document.body.appendChild(container);
//       function closeHandle() {
//         ReactDOM.unmountComponentAtNode(container);
//         document.body.removeChild(container);
//         container = null;
//       }
//       ReactDOM.render(<DialogCustom {...params} onClose={closeHandle} />, container);
//     };
//     ...
//     render() {
//       return (<Modal  ... visible={true}>...</Modal>);
//     }
// }
//使用静态方法来改造弹窗组件   
var svg, path, progress, timerId, load, success, fail; // ToastContainer.prototype.toast = tips => {
//     let container = document.createElement("div");
//     document.body.appendChild(container);
//     function closeHandle() {
//         ReactDOM.unmountComponentAtNode(container);
//         document.body.removeChild(container);
//         container = null;
//     }
//     ReactDOM.render(<Message tips={tips} onClose={closeHandle} />, container);
// };
// ToastContainer.prototype.load = tips => {
//     load(tips);
// }
// ToastContainer.prototype.success = tips => {
//     success(tips);
// }
// ToastContainer.prototype.fail = tips => {
//     fail(tips);
// }
// const Item = props => {
//     // 
//     return <div></div>
// }

var Message = function Message(props) {
  setTimeout(function () {
    props.onClose();
  }, 3000);
  return _react["default"].createElement("div", {
    className: "react_toast_mask block"
  }, _react["default"].createElement("div", {
    className: "react_toast_message"
  }, _react["default"].createElement("span", null, props.tips)));
}; //不能直接加载成功!
//不能加载成功后在加载失败!


var LoadAnimation = function LoadAnimation() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  (0, _react.useEffect)(function () {
    svg = (0, _snapsvg["default"])('#svg');
    path = svg.select('.animation');
    progress = svg.select('.progress');
  }, []);

  load = function load(tips) {
    var value = tips ? tips : '正在加载中...';
    setText(value);
    path.animate({
      d: 'M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50'
    }, 5e2, mina.easeout(), function () {
      // console.log('animation end');
      progress.addClass("rotate");
      progress.animate({
        opacity: 1
      }, 200, mina.easeout(), function () {// console.log('animation end');
      });
    });
  };

  success = function success(tips) {
    if (text == '') {
      throw new Error('顺序异常..加载还没有开始就已经成功...;');
    }

    clearTimeout(timerId);
    var value = tips ? tips : '加载成功!';
    setText(value);
    path.animate({
      d: 'M22 50 L 40 67,77 31'
    }, 5e2, mina.easeout(), function () {
      // console.log('animation end');
      over();
    });
    done();
  };

  fail = function fail(tips) {
    if (text == '') {
      throw new Error('顺序异常..加载还没有开始就已经失败...');
    }

    clearTimeout(timerId);
    var value = tips ? tips : '加载失败!';
    setText(value);
    path.animate({
      d: 'M30 30 L 70 70,M 30 70,L 70 30'
    }, 5e2, mina.easeout(), function () {
      // console.log('animation end');
      over();
    });
    done();
  };

  var done = function done() {
    progress.animate({
      opacity: 0
    }, 200, mina.easeout(), function () {
      // console.log('animation end');
      progress.removeClass("rotate");
    });
  };

  var over = function over() {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      setText('');
    }, 1e3);
  };

  return _react["default"].createElement(Loading, {
    text: text
  });
};

var Loading = function Loading(props) {
  var text = props.text;
  return _react["default"].createElement("div", {
    className: "react_toast_mask react_toast_mask_loading ".concat(text != '' && "active")
  }, _react["default"].createElement("div", {
    className: "react_toast_message"
  }, _react["default"].createElement("svg", {
    version: "1.1",
    baseProfile: "full",
    width: "36",
    height: "36",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    id: "svg"
  }, _react["default"].createElement("g", null, _react["default"].createElement("path", {
    className: 'animation',
    d: "M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50",
    stroke: "#fff",
    fill: "transparent",
    strokeWidth: "6"
  }), _react["default"].createElement("path", {
    className: 'progress',
    stroke: "#108ee9",
    fill: "transparent",
    strokeWidth: "6",
    strokeLinecap: "round",
    d: "M5 50A 45 45 0 0 1 50 5"
  }))), _react["default"].createElement("span", null, text)));
};

var App = function App() {
  return _react["default"].createElement("div", null, _react["default"].createElement(LoadAnimation, null));
};

if (!document.getElementById("react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt")) {
  var div = document.createElement('div');
  div.setAttribute('id', 'react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt');
  document.body.appendChild(div);

  _reactDom["default"].render(_react["default"].createElement(App, null), div);
}

var ToastContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToastContainer, _React$Component);

  function ToastContainer() {
    _classCallCheck(this, ToastContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToastContainer).apply(this, arguments));
  }

  return ToastContainer;
}(_react["default"].Component);

exports["default"] = ToastContainer;

_defineProperty(ToastContainer, "toast", function (tips) {
  var container = document.createElement("div");
  document.body.appendChild(container);

  function closeHandle() {
    _reactDom["default"].unmountComponentAtNode(container);

    document.body.removeChild(container);
    container = null;
  }

  _reactDom["default"].render(_react["default"].createElement(Message, {
    tips: tips,
    onClose: closeHandle
  }), container);
});

_defineProperty(ToastContainer, "load", function (tips) {
  load(tips);
});

_defineProperty(ToastContainer, "success", function (tips) {
  success(tips);
});

_defineProperty(ToastContainer, "fail", function (tips) {
  fail(tips);
});
