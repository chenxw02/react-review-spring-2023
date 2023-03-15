import React, { Component } from 'react'

class Child extends Component {

    // 已弃用。
    // App第一次渲染，孩子被创建，不会触发：这是一个更新阶段的生命周期
    // 父组件状态更新，引起孩子组件的状态更新
    // 空属性+没有改变的属性也会触发这个生命周期
    // nextProps是新属性，this.props是旧属性
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('receiverProps')
        this.setState({
            name: nextProps.text+'zju'
        })
    }

    state = {
        name: ''
    }

    render() {
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: 'cxw'
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        text: 'xiaoming'
                    })
                }}>toggle</button>
                <Child text={this.state.text}></Child>
            </div>
        )
    }
}
