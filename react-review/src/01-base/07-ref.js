import React, { Component } from 'react'

// react 的事件绑定不会绑定到具体的dom上，而是绑定到根结点并使用事件代理：事件冒泡，从根节点到子节点一个一个找
// 不用考虑解绑：节点没了就找不到了，自然就解除绑定了
// 事件handler会被自动传入一个event对象（内部生成），和原生的event对象差不多：有阻止冒泡和默认行为

export default class APP extends Component {
    // 创建一个ref对象
    myref = React.createRef()

    render() {
        return (
            <div>
                {/* ref直接绑定到标签上，拿到的是整个标签/dom节点 */}
                {/* ref也可以绑到组件上，拿到的是整个组件 */}
                {/* 使用mytext.value可以拿到标签内部的数据 */}
                {/* 有潜在风险：多个标签同名 */}
                {/* 不推荐 */}
                <input ref='mytext' />
                <button onClick={ ()=> {
                    console.log(this.refs.mytext)
                }
                }>add</button>
                <br/>
                <input ref={this.myref}/>
                <button onClick={ () =>
                    // 需要使用.current才能拿到原生的dom节点   
                    console.log(this.myref.current.value)
                }>add-corrected</button>
            </div>
        )
    }

    handleClick() {
        console.log('click2')
        console.log(this.a)
    }
}