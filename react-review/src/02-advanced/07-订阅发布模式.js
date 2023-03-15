import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

// 调度平台
var bus = {
    list: [],

    subscribe(callback) {
        this.list.push(callback)
    },

    publish(text) {
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}

// 订阅
// 将自己的会掉函数加入
bus.subscribe((text)=>{
    console.log(text)
})

bus.subscribe((text)=>{
    console.log(text)
})

// 发布
// 执行所有回调函数
bus.publish("publish")
