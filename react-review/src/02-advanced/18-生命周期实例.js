import React, { Component } from 'react'
import axios from 'axios'


// 根据传入的type值来请求数据
// axios不能放在didMount中：didMount是创建阶段的生命周期
class FilmList extends Component {

    componentDidMount() {
        var url

        if (this.props.type === 0) {
            url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1379631'
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

    // 所有引起组件更新的因素都会触发这个生命周期
    // 父组件的更新导致不必要的ajax请求出现
    UNSAFE_componentWillReceiveProps(nextProps) {
        var url

        if (nextProps.type === 0) {
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

    // didUpdate里不能有setState：会导致死循环！！！setState引发状态更新，状态更新完成进入didUpdate，又更新...
    // componentDidUpdate() {
    //     var url

    //     if(this.props == 0) {
    //         url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780'
    //     } else {
    //         url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5616346'
    //     }

    //     axios({
    //         url: url,
    //         method: 'get',
    //         headers: {
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             movieList: res.data.data.films
    //         })
    //         console.log(this.state.movieList)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    state = {
        movieList: []
    }

    render() {
        return (
            <div>
                {
                    this.state.movieList.map(item => <li key={item.fildId}>{item.name}</li>)
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
