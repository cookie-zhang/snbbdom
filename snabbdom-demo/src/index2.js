// div 中放置子元素 h1 p
import { h, init } from 'snabbdom'
let patch = init([])
let vnode = h('div#contanier', [
    h('h1', 'hello snabbdom'),
    h('p', '这是一个p标签')
]) 

let app = document.querySelector('#app')
let oldVode = patch(app, vnode)

setTimeout(()=>{
    vnode = h('div#constiner', [
        h('h1', 'hello wold new node'),
        h('p', 'hello p new')
    ])
    patch(oldVode, vnode)
    // 清空页面的元素 
    // 错误做法 patch(oldVode, null)
    // 正确
}, 2000)
setTimeout(()=>{
    debugger
    patch(oldVode, h('!'))
},3000)
