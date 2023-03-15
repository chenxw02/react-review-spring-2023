import React, { Component } from 'react'

class Child extends Component {

    componentDidMount() {
        // 绑定了一个窗口的事件监听，组件消失后不会被自动处理
        window.onresize = () => {
            console.log("resize")
        }

        // 注意写法，括号内一个函数
        // 定时器也是挂在窗口上
        // 把timer挂在this上，cdm外部也能访问
        this.timer = setInterval(()=>{
            console.log('tick')
        },1000)
    }

    // 删除组件前进行清理操作：计时器和事件监听器
    componentWillUnmount() {

        console.log('willUnmount')

        window.onresize = null

        // 清除定时器的固定操作，注意写法
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
                Child
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        flag: true
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>toggle</button>
                {this.state.flag && <Child></Child>}
            </div>
        )
    }
}
