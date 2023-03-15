import React, { Component } from 'react'




export default class App extends Component {

    // 接替willMount+willReceive
    // 组件创建和更新都会触发
    // 每次组件更新都会触发
    // 在属性和状态更新前
    static getDerivedStateFromProps(nextProps, nextState) {
        // 不能在这读this.state：静态，在类上，没有this
        console.log('getFromProps')
        return {
            name: nextState.name.substring(0,1).toUpperCase() + nextState.name.substring(1).toLowerCase()
        }
    }

    state = {
        name: 'cxw'
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>click</button>
                {this.state.name}
            </div>
        )
    }
}
