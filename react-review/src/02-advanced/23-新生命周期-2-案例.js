import React, { Component } from 'react'

export default class App extends Component {

    getSnapshotBeforeUpdate() {
        //获取容器高度
        console.log(this.box.current.scrollHeight)
        return this.box.current.scrollHeight
    }

    // value不能单独使用，必须和prevProps， prevState同时出现
    // 注意处理滚动条的方法
    componentDidUpdate(prevProps, prevState, value) {
        console.log(this.box.current.scrollHeight)
        this.box.current.scrollTop += this.box.current.scrollHeight - value
        console.log(this.box.current.scrollTop)
    }

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    box = React.createRef()

    render() {
        return (
            <div>
                <h1>mail</h1>
                <button onClick={()=>{
                    this.setState({
                        // 简单的数组展开合并方法！
                        list: [...[11, 12, 13, 14, 15], ...this.state.list]
                    })
                }}>append</button>
                {/* auto: 出现滚动条 */}
                <div style={{ height: '200px', background: 'yellow', overflow: 'auto' }} ref={this.box}>
                    {
                        this.state.list.map((item, index) => <li key={index} style={{height: '100px'}}>{item}</li>)
                    }
                </div>
            </div>
        )
    }
}
