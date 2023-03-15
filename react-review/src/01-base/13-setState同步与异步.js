import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
            {this.state.count}
            <button onClick={()=>{
                this.handleAdd1()
            }}>add1</button>
            <button onClick={()=>{
                this.handleAdd2()
            }}>add2</button>
            </div>
        )
    }

    handleAdd1 = () => {

        // setState异步更新状态，更新真实dom
        // setState异步更新，不会阻塞后面的代码执行
        // 什么时候更新不知道，代码直接往下走了，主线程空闲才会更新state重新render
        // 多个setState合并处理，所以没有立即做状态更新
        // 放在同步状态中，异步更新状态
        // 在同步状态中，合并标志位为true，会尝试和后面的setState合并处理，放在pendding队列中，方法执行完之才更新状态，再把标志位变成false
        // 合并完了发现就是一个+1，所以只会一次+1
        this.setState({
            count: this.state.count + 1
        })
        
        console.log(this.state.count) // 0

        this.setState({
            count: this.state.count + 1
        })
        
        console.log(this.state.count) // 0

        this.setState({
            count: this.state.count + 1
        })
        
        console.log(this.state.count) // 0

        this.setState({
            count: this.state.count + 1
        },()=>{
            // 第二个参数，回调函数，状态和真实dom更新完成后触发
            // 状态和真实dom已经更新完了
            console.log(this.state.count)
        })
    }

    handleAdd2 = () => {
        setTimeout(()=>{
            // 放在异步逻辑中，同步更新状态
            // 异步状态中，合并标志位为false
            // set一次，立刻进行一次状态更新
            this.setState({
                count: this.state.count + 1
            })
            
            console.log(this.state.count) // 0
    
            this.setState({
                count: this.state.count + 1
            })
            
            console.log(this.state.count) // 0
    
            this.setState({
                count: this.state.count + 1
            })
            
            console.log(this.state.count) // 0
        })
    }
}
