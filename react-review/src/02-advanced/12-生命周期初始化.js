import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state = {name: 'cxw', gender: 'male'}
    }

    // 挂载到节点前，最后一次修改状态
    // 已废弃。如果需要，使用constructor
    componentWillUnmount() {
        console.log('will mount')
    }

    // 挂载到节点前修改状态：返回一个状态obj
    // static getDerivedStateFromProps() {
    //     return {
    //         name: 'cxw',
    //     }
    // }

    // 挂载到节点后，可以用于拿到真实节点
    componentDidMount() {
        console.log('did mount')
        // axios请求
        // 订阅函数调用
        // setInterval
        // 基于创建完的dom进行初始化：BScroll，必须有节点才能初始化
    }

    state = {
        name: 'null',
        gender: 'null'
    }

    render() {
        return (
            <div>{this.state.name} {this.state.gender}</div>
        )
    }
}
