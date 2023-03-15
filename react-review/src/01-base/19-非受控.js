import React, { Component } from 'react'

export default class App extends Component {

    // 非受控：用ref绑定节点，访问节点的值，就是非受控的
    myRef = React.createRef()
    render() {
        return (
            <div>
                <h1>登录</h1>
                {/* 非受控使用defaultValue */}
                <input type='text' ref={this.myRef} defaultValue="cxw"></input>
                <button>登录</button>
                <button>重置</button>

                {/* 非受控缺点 */}
                {/* 要给一个子组件传值，value是更新了，但没有setState，render函数不会再次执行，这个语句也不会执行，传值失败 */}
                {/* <Child myValue={this.myRef.current.value}></Child> */}
            </div>
        )
    }
}
