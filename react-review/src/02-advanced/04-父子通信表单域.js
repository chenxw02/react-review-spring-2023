import React, { Component } from 'react'
import props from 'prop-types'

class Field extends Component {
    static propType = {
        label: props.string,
        type: props.string
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt)=>{
                    this.props.event(evt.target.value)
                }} value={this.props.value}></input>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        // 有默认的username
        username: 'cxw',
        passwd: ''
    }
    render() {
        return (
            <div>
                {/* 完全受控 */}
                <Field label='用户名' type='text' event={(username)=>{
                    this.handleUsername(username)
                }} value={this.state.username}></Field>
                <Field label='密码' type='password' event={(passwd)=>{
                    this.handlePasswd(passwd)
                }}></Field>
                <button onClick={()=>{
                    console.log('username ', this.state.username)
                    console.log('passwd ', this.state.passwd)
                }}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        username: '',
                        passwd: ''
                    })
                }}>取消</button>
            </div>
        )
    }

    handleUsername = (username) => {
        this.setState({
            username: username
        },()=>{
            console.log('username ', this.state.username)
        })
    }

    handlePasswd = (passwd) => {
        this.setState({
            passwd: passwd
        },()=>{
            console.log('passwd ', this.state.passwd)
        })
    }
}
