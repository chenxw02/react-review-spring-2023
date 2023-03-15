import React, { Component } from 'react'

// webpack 的支持
import './css/01-index.css'

export default class App extends Component {
    render() {
        let name = "chen"
        // 推荐将所有样式放在组件内部（行内样式）而不是从外部引用css文件
        var obj = {
            background: "yellow",
            fontSize: "30px"
        }
        return (
            <div>
                App
                {/* 使用大括号，解析为js，只能放表达式，不能放语句，如for if-else等 */}
                {10 + 20}-{name}

                {/* style后面只能跟obj，需要加上大括号解析为obj */}
                <div style={obj}>11</div>

                {/* 行内样式 */}
                <div style={{ background: "red" }}>22</div>

                {/* 直接使用class可能会被当成类的关键字：后面有等号有字符串，认为是css的class关键字 */}
                <div className='active'>33</div>

                <div id='myapp'>44</div>

                {/* 使用htmlFor进行聚焦，而不是用for：for可能会被当成js中的for，而不是html的for关键字 */}
                <label htmlFor='userName'>用户名：</label>
                <input type='text' id='userName'></input>
            </div>
        )
    }
}
