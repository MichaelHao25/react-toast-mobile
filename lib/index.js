'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./src/css/toast.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


var svg = void 0,
    path = void 0,
    progress = void 0,
    timerId = void 0,
    load = void 0,
    success = void 0,
    fail = void 0;

var ToastContainer = function (_React$Component) {
    _inherits(ToastContainer, _React$Component);

    function ToastContainer() {
        _classCallCheck(this, ToastContainer);

        return _possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).apply(this, arguments));
    }

    return ToastContainer;
}(_react2.default.Component);

exports.default = ToastContainer;

ToastContainer.prototype.toast = function (tips) {
    var container = document.createElement("div");
    document.body.appendChild(container);

    function closeHandle() {
        _reactDom2.default.unmountComponentAtNode(container);
        document.body.removeChild(container);
        container = null;
    }

    _reactDom2.default.render(_react2.default.createElement(Message, { tips: tips, onClose: closeHandle }), container);
};
ToastContainer.prototype.load = function (tips) {
    load(tips);
};
ToastContainer.prototype.success = function (tips) {
    success(tips);
};
ToastContainer.prototype.fail = function (tips) {
    fail(tips);
};
var Message = function Message(props) {
    setTimeout(function () {
        props.onClose();
    }, 3000);
    return _react2.default.createElement(Item, { value: props.tips });
};
var Item = function Item(props) {
    return _react2.default.createElement(
        'div',
        { className: 'react-toast-mask block' },
        _react2.default.createElement(
            'div',
            { className: 'react-toast-message' },
            _react2.default.createElement(
                'span',
                null,
                props.value
            )
        )
    );
};

//不能直接加载成功!
//不能加载成功后在加载失败!
var LoadAnimation = function LoadAnimation() {
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    (0, _react.useEffect)(function () {
        svg = window.Snap('#svg');
        path = svg.select('.animation');
        progress = svg.select('.progress');
    }, []);
    load = function load(tips) {
        var value = tips ? tips : '正在加载中...';
        setText(value);
        path.animate({ d: 'M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50' }, 5e2, window.mina.easeout(), function () {
            // console.log('animation end');
            progress.addClass('rotate');
            progress.animate({
                opacity: 1
            }, 200, window.mina.easeout(), function () {
                // console.log('animation end');
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
        path.animate({ d: 'M22 50 L 40 67,77 31' }, 5e2, window.mina.easeout(), function () {
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
        path.animate({ d: 'M30 30 L 70 70,M 30 70,L 70 30' }, 5e2, window.mina.easeout(), function () {
            // console.log('animation end');
            over();
        });
        done();
    };
    var done = function done() {
        progress.animate({
            opacity: 0
        }, 200, window.mina.easeout(), function () {
            // console.log('animation end');
        });
    };
    var over = function over() {
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            setText('');
        }, 1e3);
    };

    return _react2.default.createElement(Loading, { text: text });
};

var Loading = function Loading(props) {
    var text = props.text;

    return _react2.default.createElement(
        'div',
        { className: 'react-toast-mask react-toast-mask-loading ' + (text != '' && 'active') },
        _react2.default.createElement(
            'div',
            { className: 'react-toast-message' },
            _react2.default.createElement(
                'svg',
                { version: '1.1',
                    baseProfile: 'full',
                    width: '36', height: '36',
                    viewBox: '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg',
                    id: 'svg'
                },
                _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { className: 'animation', d: 'M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50', stroke: '#fff', fill: 'transparent', strokeWidth: '6' }),
                    _react2.default.createElement('path', { className: 'progress', stroke: '#108ee9', fill: 'transparent', strokeWidth: '6', strokeLinecap: 'round', d: 'M5 50A 45 45 0 0 1 50 5' })
                )
            ),
            _react2.default.createElement(
                'span',
                null,
                text
            )
        )
    );
};
var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(LoadAnimation, null)
    );
};

if (!document.getElementById("react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt")) {
    var div = document.createElement('div');
    div.setAttribute('id', 'react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt');
    document.body.appendChild(div);
    _reactDom2.default.render(_react2.default.createElement(App, null), div);
}