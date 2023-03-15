import React, { Component } from 'react'

export default class App extends Component {

    state = {
        name: 'cxw'
    }

    componentDidUpdate() {
        console.log('didUpdate')
    }

    UNSAFE_componentWillUpdate() {
        console.log('willUpdate')
    }

    UNSAFE_componentWillMount() {
        console.log('willMount')
    }

    componentDidMount() {
        console.log('didMount')
    }

    // 这个生命周期在willUpate前，数据都还没有更新
    // 性能优化：不进行虚拟dom比较和渲染
    shouldComponentUpdate(nextProps, nextState) {

        // 不要不通过setState直接改变状态：setState前后才会有老状态和新状态，直接改变状态不会产生老状态和新状态，会造成nextState/prevState的错误

        // nextProps，修改后的属性
        // nextState，修改后的状态
        // 状态有真正的更新，才允许dom节点对比，进行render
        // 要对比两个对象：转换为字符串对比
        if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
            return false
        }
        return true

        // 不能直接对比两个对象
        // nextState == this.state
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={()=>{
                    // 每次setState都会willUpate+render+DidUpate，进行虚拟dom对比，造成性能问题
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>change</button>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
