import React from "react";
import ReactDOM from 'react-dom';
import Toast from "./index";
const App = () => {
    // Toast
    return (
        <>
            <div onClick={() => Toast.load('加载中...')}>加载中</div>
            <div onClick={() => Toast.success('加载成功')}>加载成功</div>
            <div onClick={() => Toast.fail('加载失败')}>加载失败</div>
            <div onClick={() => Toast.toast('hello,react')}>toast</div>
            <p>注意一定要是先出现加载中后才可以出现成功或者失败..</p>
        </>
    )
}

let div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);
ReactDOM.render(<App />, div);
