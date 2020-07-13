import {h, init} from 'snabbdom'
let patch = init([])
let vnode = h('div#container.cls',{
    hook:{
        init(vnode){
            console.log(vnode.elm)
        },
        create(emptyVnode, vnode){
            console.log(vnode.elm)
        }
    }
},  'hello world')
let app = document.querySelector('#app')
// 第一次没有旧节点   所以第一个元素传入的app节点
let oldVnode = patch(app,vnode)
vnode = h('div','hello snabbdom')
patch(oldVnode, vnode)