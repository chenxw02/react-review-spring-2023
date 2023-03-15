// rcc 快速建立 class

import React, { Component } from 'react'

class NaviBar extends Component {
    render() {
        return (
            <div>NaviBar</div>
        )
    }
}

function Swiper() {
    return (
        <div>Swiper</div>
    )
}

// 箭头函数
const TabBar = () => {
    return (
        <div>TabBar</div>
    )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <NaviBar></NaviBar>
        <Swiper></Swiper>
        <TabBar></TabBar>
      </div>
    )
  }
}
