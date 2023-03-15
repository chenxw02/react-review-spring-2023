import React, { Component } from 'react'

class NaviBar extends Component {
    render() {
        return (
            <div style={{background: 'lightblue'}}>
                {/* 插槽 */}
                {this.props.children}
                <span>NaviBar</span>
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{background: 'yellow'}}>
                <ul>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow: true
    }
    
    render() {
        return (
            <div>
                <NaviBar>
                    {/* 这个button还在父组件中，可以直接访问父组件状态 */}
                    {/* 写在哪，就能访问谁的状态：作用域 */}
                    <button onClick={()=>{
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>click</button>
                </NaviBar>
                {this.state.isShow && <SideBar></SideBar>}
            </div>
        )
    }    
}
