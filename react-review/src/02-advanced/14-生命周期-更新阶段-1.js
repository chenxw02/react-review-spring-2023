import React, { Component } from 'react'
import BScroll from 'better-scroll'
import axios from 'axios'

export default class App extends Component {

    state = {
        movieList: []
    }

    // 处于调度机制的fiber阶段：找出需要更新哪些dom（高优先级），willUpdate优先级低，易被打断导致多次重复运行
    // 已弃用。基本不用
    UNSAFE_componentWillUpdate() {
        // 不能在这setState：会导致死循环
    }

    // 每次更新完成后都会执行：存在频繁执行多次的风险
    // 在这可以获取dom节点
    componentDidUpdate(prevProps, prevState) {
        // prevProps，老的属性
        // prevState，老的状态
        // 到了DidUpdate时所有的状态和属性都更新完成了，但我们可以通过这两个参数访问到老的状态和属性
        // new Bscroll 等原生js库的初始化

        // 使用prevState解决频繁多次执行问题
        if(prevState.movieList.length === 0) {
            new BScroll('.wrapper')
            console.log('new BScroll')
        }

    }

    componentDidMount() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                movieList: res.data.data.films
            })
            console.log(this.state.movieList)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className='wrapper' style={{height: '100px', background: 'yellow', overflow: 'hidden'}}>
                    <ul className='content'>
                    {
                        this.state.movieList.map(item=> <li key={item.filmId}>{item.name}</li>)
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
