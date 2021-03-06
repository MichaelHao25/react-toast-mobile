import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import css from './css/toast.css';

import Snap from 'snapsvg';

let svg, path, progress, timerId, load, success, fail;

const Message = (props) => {
    setTimeout(() => {
        props.onClose();
    }, 3000);
    return (<div className={css.react_toast_mask + ' ' + css.block}>
        <div className={css.react_toast_message}>
            <span>{props.tips}</span>
        </div>
    </div>)
}


//不能直接加载成功!
//不能加载成功后在加载失败!
const LoadAnimation = () => {
    const [text, setText] = useState('');
    useEffect(() => {
        svg = Snap('#svg');
        path = svg.select('.animation');
        progress = svg.select('.progress');
    }, [])
    load = (tips) => {
        let value = tips ? tips : '正在加载中...';
        setText(value);

        path.animate({ d: 'M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50', }, 5e2, mina.easeout(), function () {
            // console.log('animation end');
            progress.addClass(css.rotate)
            progress.animate({
                opacity: 1
            }, 200, mina.easeout(), function () {
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
        path.animate({ d: 'M22 50 L 40 67,77 31' }, 5e2, mina.easeout(), function () {
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
        path.animate({ d: 'M30 30 L 70 70,M 30 70,L 70 30' }, 5e2, mina.easeout(), function () {
            // console.log('animation end');
            over();
        });
        done();
    }
    const done = () => {
        progress.animate({
            opacity: 0
        }, 200, mina.easeout(), function () {
            // console.log('animation end');
            progress.removeClass(css.rotate)
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
    return <div className={`${css.react_toast_mask} ${css.react_toast_mask_loading} ${text != '' && css.active}`}>
        <div className={css.react_toast_message}>
            <svg version="1.1"
                baseProfile="full"
                width="36" height="36"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                id="svg"
            >
                <g>
                    <path className={'animation'} d="M5 50,A45 45 0 0 1 95 50A 45 45 0 0 1 5 50" stroke='#fff' fill='transparent' strokeWidth="6"></path>
                    <path className={'progress'} stroke="#108ee9" fill="transparent" strokeWidth="6" strokeLinecap="round" d="M5 50A 45 45 0 0 1 50 5"></path>
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




export default class ToastContainer extends React.Component {
    static toast = tips => {
        let container = document.createElement("div");
        document.body.appendChild(container);

        function closeHandle() {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            container = null;
        }

        ReactDOM.render(<Message tips={tips} onClose={closeHandle} />, container);
    };
    static load = tips => {
        load(tips);
    }
    static success = tips => {
        success(tips);
    }
    static fail = tips => {
        fail(tips);
    }
}
