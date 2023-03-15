import React, { Component } from 'react'
import NaviBar from './NaviBar'

export default class App extends Component {
    render() {
        var obj = {
            title: "测试",
            leftshow: false
        }
        return (
            <div>
                <div>
                    <h1>首页</h1>
                    <NaviBar title='首页' leftshow={false}></NaviBar>
                </div>
                <div>
                    <h1>列表</h1>
                    {/* 传变量 */}
                    <NaviBar title='列表'></NaviBar>
                </div>
                <div>
                    <h1>购物车</h1>
                    <NaviBar title='购物车'></NaviBar>
                </div>
                <div>
                    <h1>测试</h1>
                    {/* 传整个obj：展开写法 */}
                    <NaviBar {...obj}></NaviBar>
                </div>
            </div>
        )
    }
}
