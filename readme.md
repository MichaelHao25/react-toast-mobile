##react-toast-mobile

#适用于react的手机toast提示框

找了npm库找toast发现适合手机的很少,有几个适合手机的都有一些大大小小的问题没有修复或者是动画太死板,一点都不符合现代化,所以自己做了一个react-toast

使用方法
```jsx
import Toast from './Page/Toast';
Toast.load('xxx..')
Toast.success('xxx..')
Toast.fail('xxx..')
Toast.toast('xxx')
```
注意一定要先load后才可以成功或者失败!
Toast.toast随便使用.
参考的bilibili的
由于使用了snap.svg
所以需要在引入一下snap.svg

使用react16.0+的hook特性,
