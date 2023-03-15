import React, { Component } from 'react'

// 有了状态，页面才会在变量发生改变时自动重新渲染：改完了变量React是不知道的，需要采用特殊的方法更改状态：setState
// 状态：组件内部特有的数据载体，组件自己维护，为了使不同状态下组件的显示不同

export default class App extends Component {

    state = {
        mytext: 'Like',
        myShow: true
    }

    // 另一种定义状态的方式
    // constructor() {
    //     super() 使用super()继承父类
    //     this.state = {
    //         mytext: 'Like',
    //         myShow: true
    //     }
    // }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    // 给setState传一个对象，所以需要大括号
                    // 逻辑：传入的对象和原来的state对象进行合并：改了的更新，没改的不管
                    this.setState({myShow: !this.state.myShow})
                }}>{this.state.myShow? 'like':'unlike'}</button>
            </div>
        )
    }
}
