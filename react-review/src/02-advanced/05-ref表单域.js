import React, { Component } from 'react'
import props from 'prop-types'

// 主体思想：把state放在组件内部，外部通过ref拿到整个组件，从而对组件进行操纵
// 一般只有表单域采用这种方法

class Field extends Component {

    // 要使用props必须传入props！
    constructor(props) {
        super()
        this.state={text: props.default}
    }

    static propType = {
        label: props.string,
        type: props.string
    }

    static defaultProps = {
        default: ''
    }

    state = {
        text: ''
    }

    clear = () => {
        this.setState({
            text: ''
        })
    }

    // 还没办法实现
    // 已解决。使用constructor
    setDefault = () => {
        this.setState({
            text: this.props.default
        })
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt)=>{
                    this.setState({
                        text: evt.target.value
                    })
                }} value={this.state.text}></input>
            </div>
        )
    }
}

export default class App extends Component {
    username = React.createRef()
    passwd = React.createRef()

    state = {
        // 有默认的username
        username: 'cxw',
        passwd: ''
    }
    render() {
        return (
            <div>
                {/* 完全受控 */}
                <Field label='用户名' type='text' ref={this.username} default='cxw'></Field>
                <Field label='密码' type='password' ref={this.passwd} ></Field>
                <button onClick={()=>{
                    console.log('username ', this.username.current.state.text)
                    console.log('passwd ', this.passwd.current.state.text)
                }}>登录</button>
                <button onClick={()=>{
                    this.username.current.clear()
                    this.passwd.current.clear()
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
