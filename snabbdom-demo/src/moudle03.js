import {h, init} from 'snabbdom'
// 1.导入模块
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'
// 2.注册模块 
let patch = init([
    style,
    eventlisteners
])
// 3.使用h（）函数的第二个参数传入模块需要的数据（对象）
let vnode = h('div',{
    style: {backgroundColor: 'red'},
    on: {
        click: onclick
    }
},[
    h('h1', '我是h1'),
    h('p', '我是p')
])
let app = document.querySelector('#app')

patch(app,vnode)
function onclick() {
    alert()
}