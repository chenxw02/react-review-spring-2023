import React, { Component } from 'react'

export default class App extends Component {

    // 在render后，didUpdate前（挂载前）
    // 返回记录的更新前的状态value，作为didUpate的一个参数
    getSnapshotBeforeUpdate() {
        console.log('getSnapshot')
        return 100
    }

    // 将虚拟dom挂载到真实dom后
    componentDidUpdate(prevProps, prevState, value) {
        console.log('didUpdate', value)
    }

    state = {
        text: '111'
    }

    // render：形成虚拟dom
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        text: '222'
                    })
                }}>click</button>
            </div>
        )
    }
}
