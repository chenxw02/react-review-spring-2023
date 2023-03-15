import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={()=>{
                        this.getData()
                    }}>get</button>
                </div>
                <div className='wrapper' style={{height: '200px', backgroundColor: 'blue', overflow: 'hidden'}}>
                    <ul className='content'>
                        {
                            // 注意写法：没有大括号
                            this.state.list.map((item, index) =>
                                <li key={index}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    getData = () => {
        let myList = [1,2,3,4,5,6,7,8,9,10]

        this.setState({
            list: myList
        },()=>{
            console.log(this.state.list)
            // dom更新后再new BScorll
            new BScroll('.wrapper')
        })

        // 如果直接在这new BScroll state还没有更新，dom也还没有更新
        // new BScroll('.wrapper') 

        // 另一种解决方案：把setState放到setTimeOut里
    }
}
