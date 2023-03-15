import React, { Component } from 'react'

/* 
    1. 为了复用：组件内部可以展示不同类型的内容：如文字、图片、视频等（在组件内部需要写死是普通的div还是img或其它类型）
    2. 减少父子通信：组件标签中间的div还在父组件中，可以直接访问父组件的状态
*/

class Swiper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return(
            <div>
                Child
                {/* 插槽 */}
                {/* 直接使用.children访问，得到div */}
                {/* children是一个数组，内部是一个一个div */}
                {this.props.children[0]}
                {this.props.children[1]}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 渲染到Child时会直接使用Child的return替换这部分代码 */}
                <Child>
                    {/* 内部所有东西会挂在props.children上 */}
                    {/* children[0] */}
                    <div>111</div>
                    {/* children[1] */}
                    <div>222</div>
                </Child>

                {/* 轮播三段文字 */}
                <Swiper>
                    <div>111</div>
                    <div>22</div>
                    <div>333</div>
                </Swiper>

                {/* 轮播三张图片 */}
                <Swiper>
                    <div><img></img></div>
                    <div><img></img></div>
                    <div><img></img></div>
                </Swiper>
            </div>
        )
    }
}
