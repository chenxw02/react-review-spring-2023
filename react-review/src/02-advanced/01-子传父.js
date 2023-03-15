import React, { Component } from 'react'

class NaviBar extends Component {
    // 这个组件点击要改变父组件的isShow
    render() {
        return (
            <div style={{background: 'lightblue'}}>
                <button onClick={()=>{
                    this.props.event()
                }}>click</button>
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
                {/* 把控制函数传给子组件，在子组件中可以调用这个控制函数 */}
                <NaviBar event={()=>{
                    this.sideBarControl()
                }}></NaviBar>
                {this.state.isShow && <SideBar></SideBar>}
            </div>
        )
    }

    sideBarControl = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
}
