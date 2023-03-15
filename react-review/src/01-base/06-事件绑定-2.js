import React, { Component } from 'react'

// react 的事件绑定不会绑定到具体的dom上，而是绑定到根结点并使用事件代理：事件冒泡，从根节点到子节点一个一个找
// 不用考虑解绑：节点没了就找不到了，自然就解除绑定了
// 事件handler会被自动传入一个event对象（内部生成），和原生的event对象差不多：有阻止冒泡和默认行为

export default class APP extends Component {
    a = 100

    render() {
        return (
            <div>
                {/* this.handleClik，render调用函数，this指向render（即App），可以访问App内的a */}
                <input />
                {/* 使用箭头函数进行事件的绑定，而非普通函数 */}
                <button onClick={() => {
                    console.log('click1')
                }
                }>add1</button>


                {/* 存在this指向问题 */}
                {/* 不能加小括号，加了（）就是一个函数调用，在render执行的时候handleClick就会自动执行，由于该函数没有返回值，返回了undefined，变成了onClick={undefined} */}
                {/* 此处的handleClick被react事件系统，并不指向App，无法访问App内的a */}
                {/* 有错误 */}
                <button onClick={this.handleClick2}>add2</button>

                {/* 使用bind改变this指向，使它指向当前的this；只能用bind：其它的会自动执行 */}
                {/* 不推荐 */}
                <button onClick={this.handleClick2.bind(this)}>add2-binded</button>



                {/* 箭头函数this指向与外部一致 */}
                {/* 不推荐：无法进行传参 */}
                <button onClick={this.handleClick3}>add3</button>



                {/* handleClick4在一个箭头函数内部，与外部this相同 */}
                <button onClick={ () => {
                    this.handleClick4()
                }  
                }>add4</button>

                {/* 简化为 */}
                {/* 推荐：方便传参 */}
                <button onClick={ () => this.handleClick4()
                }>add4-simplified</button>
            </div>
        )
    }

    // 普通函数存在this指向问题
    // 谁调用它this就指向谁
    // 自动传入一个event
    handleClick2(evt) {
        console.log('click2')
        // this指向了undefined：谁调用函数，this就指向谁
        console.log(this.a, evt)
    } 

    // 箭头函数不存在this指向问题，和外部保持一致
    handleClick3 = () => {
        console.log('click2')
        console.log(this.a)
    }

    handleClick4() {
        console.log('click2')
        console.log(this.a)
    }
}

var obj1 = {
    name: 'obj1',
    getName() {
        console.log(this.name)
    }
}

var obj2 = {
    name: 'obj2',
    getName() {
        console.log(this.name)
    }
}

/*
    call，改变this指向，并执行函数
    apply，改变this指向，并执行函数
    bind，改变this指向，手动加小括号执行函数
*/

// obj1的this指向了obj2，会打印obj2的name
obj1.getName.call(obj2)

// obj1的this指向了obj2，会打印obj2的name
obj1.getName.apply(obj2)

// obj1的this指向了obj2，但该函数不会执行
obj1.getName.bind(obj2)
// 加上小括号手动执行
obj1.getName.bind(obj2)()
