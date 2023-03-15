import React, { Component } from 'react'
import props from 'prop-types'

export default class NaviBar extends Component {

    // 状态只能是自己内部使用，外面无法改变

    // 属性是父组件传入的
    // 属性验证，推荐写法
    static propType = {
        title: props.string,
        leftshow: props.bool
    }

    // 默认属性，推荐写法
    static defaultProps = {
        leftshow: true
    }

    render() { 
        {console.log(this.props)}

        // 用es6进行结构，拿到title
        let {title, leftshow} = this.props
        return (
            <div>
                {leftshow && <button>back</button>}
                {title}
                <button>home</button>
            </div>
        )
    }
}

// 属性验证
// NaviBar.propTypes = {
//     title: props.string,
//     leftshow: props.bool
// }

// 默认属性
// NaviBar.defaultProps = {
//     leftshow: true
// }

class A {
    a = 1 // 对象属性，必须实例化后才能访问
    static a = 100 // 类属性，可直接在类上访问
}

let obj = new A()
console.log(obj.a)
console.log(A.a)
