import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "111"
            },
            {
                id: 2,
                text: "222"
            },
            {
                id: 3,
                text: "333"
            }
        ]
    }
    render() {
        return (

            <div>
                <ul>
                {
                    // 使用map函数，将list内的item映射为<li>
                    // <li>必须使用key：state内容发生改变时生成新的虚拟dom，新虚拟dom和原虚拟dom进行比较得到要渲染的虚拟dom，有key可以方便比较
                    // 方便比较：循环比较和index比较开销较大，直接比较key -> 列表的服用和重排，只对比两个key值相同的元素是否改变
                    // 渲染开销减小：删除第二个元素，后面的元素都要重新渲染（react不知道只是这个元素不见了，他会觉得是每个元素都变了）
                    // 理想key：id；没有key且不对列表进行增删重排时可直接使用index作为key
                    this.state.list.map(item => <li key={item.id}>{item.text}</li>)
                    
                    // this.state.list.map((item, index) => <li key={index}>{item}</li>)
                }
                </ul>
            </div>
        )
    }
}
