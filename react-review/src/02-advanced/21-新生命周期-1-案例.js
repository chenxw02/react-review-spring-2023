import React, { Component } from 'react'
import axios from 'axios'

// 根据传入的type值来请求数据
// axios不能放在didMount中：didMount是创建阶段的生命周期
class FilmList extends Component {

    // 主体思想：把状态转化为属性，供didMount和didUpdate使用
    // stateFromProps只负责从属性到状态
    // 不能在这发ajax：ajax异步，return立马返回，永远不可能返回真的数据
    // 也不能在这setState：根本没有this
    static getDerivedStateFromProps(nextProps) {
        
        console.log(nextProps.type)
        // 这里return相当于一个setState，仍然遵循合并原则：多次连续的setState会合并成一次处理，父组件的更新导致gdsfp多次执行，但setState并不会多次执行
        return {
            type: nextProps.type
        }
    }

    //  负责组件创建时的ajax请求
    componentDidMount() {
        var url

        if (this.state.type === 0) {
            url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780'
        } else {
            url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5616346'
        }

        axios({
            url: url,
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log('data fetched', res.data)
            this.setState({
                movieList: res.data.data.films
            })
            console.log(this.state.movieList)
        }).catch(err => {
            console.log(err)
        })

    }

    // 复制组件创建后的ajax请求
    // 不能直接进行状态更新：死循环，会一直发ajax => 状态更新->进入新的生命周期->状态更新->...
    componentDidUpdate(prevState) {

        // 加一个判断，老状态===新状态的时候，直接return
        if(prevState.type === this.state.type) {
            return
        }

        var url

        if (this.state.type === 0) {
            url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780'
        } else {
            url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5616346'
        }

        axios({
            url: url,
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

    state = {
        type: 0,
        movieList: []
    }

    render() {
        return (
            <div>
                {
                    this.state.movieList.map(item => <li key={item.filmId}>{item.name}</li>)
                }
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        type: 0
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 0
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>即将上映</li>
                    <br/>
                    <FilmList type={this.state.type}></FilmList>
                </ul>
            </div>
        )
    }
}
