import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './src/css/toast.css';



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


let svg, path, progress, timerId, load, success, fail;

export default class ToastContainer extends React.Component {
    // static toast = tips => {
    //     let container = document.createElement("div");
    //     document.body.appendChild(container);

    //     function closeHandle() {
    //         ReactDOM.unmountComponentAtNode(container);
    //         document.body.removeChild(container);
    //         container = null;
    //     }

    //     ReactDOM.render(<Message tips={tips} onClose={closeHandle} />, container);
    // };
    // static load = tips => {
    //     load(tips);
    // }
    // static success = tips => {
    //     success(tips);
    // }
    // static fail = tips => {
    //     fail(tips);
    // }
}
ToastContainer.prototype.toast = tips => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    function closeHandle() {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
        container = null;
    }

    ReactDOM.render(<Message tips={tips} onClose={closeHandle} />, container);
};
ToastContainer.prototype.load = tips => {
    load(tips);
}
ToastContainer.prototype.success = tips => {
    success(tips);
}
ToastContainer.prototype.fail = tips => {
    fail(tips);
}
const Message = (props) => {
    setTimeout(() => {
        props.onClose();
    }, 3000);
    return <Item value={props.tips} />
}
const Item = (props) => {
    return <div className={`react-toast-mask block`}>
        <div className="react-toast-message">
            <span>{props.value}</span>
        </div>
    </div>
}

//不能直接加载成功!
//不能加载成功后在加载失败!
const LoadAnimation = () => {
    const [text, setText] = useState('');
    useEffect(() => {
        svg = window.Snap('#svg');
        path = svg.select('.animation');
        progress = svg.select('.progress');
    }, [])
    load = (tips) => {
        let value = tips ? tips : '正在加载中...';
        setText(value);
        path.animate({ d: 'M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50', }, 5e2, window.mina.easeout(), function () {
            // console.log('animation end');
            progress.addClass('rotate')
            progress.animate({
                opacity: 1
            }, 200, window.mina.easeout(), function () {
                // console.log('animation end');
            });
        });
    }
    success = (tips) => {
        if (text == '') {
            throw new Error('顺序异常..加载还没有开始就已经成功...;');
        }
        clearTimeout(timerId);
        let value = tips ? tips : '加载成功!';
        setText(value);
        path.animate({ d: 'M22 50 L 40 67,77 31' }, 5e2, window.mina.easeout(), function () {
            // console.log('animation end');
            over();
        });
        done();
    }
    fail = (tips) => {
        if (text == '') {
            throw new Error('顺序异常..加载还没有开始就已经失败...');
        }
        clearTimeout(timerId);
        let value = tips ? tips : '加载失败!';
        setText(value);
        path.animate({ d: 'M30 30 L 70 70,M 30 70,L 70 30' }, 5e2, window.mina.easeout(), function () {
            // console.log('animation end');
            over();
        });
        done();
    }
    const done = () => {
        progress.animate({
            opacity: 0
        }, 200, window.mina.easeout(), function () {
            // console.log('animation end');
        });
    }
    const over = () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            setText('');
        }, 1e3);
    }

    return <Loading text={text} />;
}


const Loading = (props) => {
    const { text } = props;
    return <div className={`react-toast-mask react-toast-mask-loading ${text != '' && 'active'}`}>
        <div className="react-toast-message">
            <svg version="1.1"
                baseProfile="full"
                width="36" height="36"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                id="svg"
            >
                <g>
                    <path className="animation" d="M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50" stroke='#fff' fill='transparent' strokeWidth="6"></path>
                    <path className="progress" stroke="#108ee9" fill="transparent" strokeWidth="6" strokeLinecap="round" d="M5 50A 45 45 0 0 1 50 5"></path>
                </g>
            </svg>
            <span>{text}</span>
        </div>
    </div >
}
const App = () => {
    return <div>
        <LoadAnimation />
    </div>
}

if (!document.getElementById("react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt")) {
    let div = document.createElement('div');
    div.setAttribute('id', 'react_toast_loading_wuc45qr044pdjqxgckxsnkzl4rucwt');
    document.body.appendChild(div);
    ReactDOM.render(<App />, div);
}
