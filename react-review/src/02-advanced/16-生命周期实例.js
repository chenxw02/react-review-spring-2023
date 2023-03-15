import React, { Component } from 'react'
import axios from 'axios'

class Box extends Component {

    // 每次属性发生改变，组件就会重新render
    // 不使用shouldUpdate，每次搜索10个组件都会重新render：属性currentIndex发生了改变

    // 使用shouldUpdate，一次搜索只渲染两个格子：老的选中格子和新的选中格子
    shouldComponentUpdate(nextProps) {
        if(this.props.index === nextProps.currentIndex || this.props.index === this.props.currentIndex) {
            return true
        }
        return false
    }

    render() {
        console.log('box rendering')
        return (
            <div style={{
                // 这里的三目运算不用大括号：本来就在大括号里
                border: this.props.index === this.props.currentIndex ? '1px solid red' : '1px solid gray',
                width: '100px',
                height: '100px',
                float: 'left',
                margin: '10px'
            }}></div>
        )
    }
}

export default class App extends Component {

    state = {
        currentIndex: 0,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    render() {
        return (
            <div>
                <input type='text' onChange={(evt)=>{
                    this.setState({
                        currentIndex: Number(evt.target.value)-1
                    })
                }}></input>
                <div>
                    {
                        this.state.list.map((item, index) => <Box key={item} currentIndex={this.state.currentIndex} index={index}></Box>)
                    }
                </div>
            </div>
        )
    }
}
