import React, { Component } from 'react'
import axios from 'axios'
import './css/03-通信.css'

var bus = {
    list: [],

    subscribe(callback) {
        this.list.push(callback)
    },

    publish(text) {
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}

class FilmItem extends Component {
    render() {

        let { name, poster } = this.props

        return (
            <div>
                <img src={poster} alt={name} width={200}></img>
                <h1>{name}</h1>
            </div>
        )
    }
}

class FilmDetail extends Component {

    constructor(){
        super()

        // 订阅
        bus.subscribe((grade)=>{
            console.log(grade)
            this.setState({
                grade: grade
            })
        })
    }
    
    state = {
        grade: null
    }

    render() {
        return (
            <div>
                <h3>豆瓣评分：<span>{this.state.grade ? this.state.grade : '暂无'}</span></h3>
            </div>
        )
    }
}

export default class App extends Component {

    constructor() {
        super()

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

    state = {
        movieList: [],
        selectedFilm: []
    }

    render() {
        return (
            <div>
                <div className='filmItems'>
                    <ul style={{ listStyle: 'none' }}>
                        {
                            this.state.movieList.map(item =>
                                // 不写提示词，那props就是这个东西
                                // obj直接展开传进去
                                <li key={item.filmId} onClick={()=>{
                                    // 发布
                                    bus.publish(item.grade)
                                }}><FilmItem {...item}></FilmItem></li>
                            )
                        }
                    </ul>
                </div>

                <div className='filmDetail'>
                    <FilmDetail {...this.state.selectedFilm}></FilmDetail>
                </div>
            </div>
        )
    }
}
