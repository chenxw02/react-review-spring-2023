import React, { Component } from 'react'

export default class APP extends Component {
    render() {
        return (
            <div>
                <input />
                {/* 使用箭头函数进行事件的绑定，而非普通函数 */}
                <button onClick={() => {
                    console.log('click1')
                }

                }>add1</button>

                {/* 不能加小括号，加了（）就是一个函数调用，在render执行的时候handleClick就会自动执行，由于该函数没有返回值，返回了undefined，变成了onClick={undefined} */}
                <button onClick={this.handleClick}>add2</button>

                <button onClick={ () => {
                    this.handleClick()
                }  
                }>add3</button>
            </div>
        )
    }

    handleClick = () => {
        console.log('click2')
    }
}
