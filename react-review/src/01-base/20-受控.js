import React, { Component } from 'react'

export default class App extends Component {

    state = {
        username: 'cxw'
    }
    render() {
        return (
            <div>
                <h1>登录</h1>

                {/* input完全和状态绑定，完全控制 */}
                {/* 使react的state成为唯一的数据源 */}
                <input type='text' value={this.state.username} onChange={(evt)=>{
                    console.log(evt.target.value)
                    this.setState({
                        username: evt.target.value
                    })
                }
                }></input>
                <button onClick={()=>{
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        username: ''
                    })
                }}>重置</button>
            </div>
        )
    }
}
