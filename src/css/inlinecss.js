const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `.react_toast_mask {
    position: fixed;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    z-index: 1999;
    max-width: 80%;
    display: none;
}

.react_toast_mask.active {
    display: block;
    -webkit-animation: fadeIn 0.8s linear;
            animation: fadeIn 0.8s linear;
}

.react_toast_mask.block {
    display: block;
}

.react_toast_message {
    min-width: 95px;
    line-height: 1.5;
    padding: 10px 12px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.86);
    border-radius: 6px;
    opacity: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}

.react_toast_message span {
    text-align: justify;
    word-break: break-all;
    font-size: 16px;
    color: #fff;
}


.react_toast_mask_loading .react_toast_message {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 15px;
}

.react_toast_mask_loading .react_toast_message span {
    font-size: 14px;
}

.react_toast_mask svg {
    display: block;
    margin: 0 auto;
}

.react_toast_mask svg+span {
    padding-top: 10px;
    display: block;
}

.rotate {
    -webkit-animation: rotate 1s infinite linear;
            animation: rotate 1s infinite linear;
    -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
            transform-origin: center center;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotateZ(0);
                transform: rotateZ(0);
    }

    to {
        -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
    }
}

@keyframes rotate {
    from {
        -webkit-transform: rotateZ(0);
                transform: rotateZ(0);
    }

    to {
        -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
    }
}

@-webkit-keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}`
    ;
document.head.appendChild(styleSheet);
