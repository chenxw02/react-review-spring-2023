import React, { Component } from 'react'
import axios from 'axios'
import './css/03-通信.css'

// 创建context对象
const GlobalContext = React.createContext()

// 父组件return的div外面包上provider，给出value，value是一系列值和改变这些值的方法：注意这些值一定要映射到父组件的state！不然不会重新渲染
// 注意value内函数的写法：等号边冒号
// 要通信的子组件包上consumer，注意包法；所有consumer都能访问value内的值和方法

class FilmItem extends Component {
    render() {
        let {name, poster} = this.props
        return (
            // 注意写法！！！
            <GlobalContext.Consumer>
                {
                    // 每个consumer都能获取到value
                    (value) => {
                        return (
                            <div onClick={()=>{
                                // 改变grade
                                value.setGrade(this.props.grade)
                            }}>
                                <img src={poster} alt={name} width={200}></img>
                                <h3>{name}</h3>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {

    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div>
                                {value.grade}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
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
        selectedFilm: [],
        grade: 0
    }

    render() {
        return (
            // 供应商标签标包在外部组件外面，内部组件订阅服务即可进行通信
            <GlobalContext.Provider value={{
                grade: this.state.grade,
                // 注意在大括号内的特殊写法：所有等号换位冒号
                setGrade: (value) => {
                    this.setState({
                        grade: value
                    })
                }
            }}>
                <div>
                    <div className='filmItems'>
                        <ul style={{ listStyle: 'none' }}>
                            {
                                this.state.movieList.map(item =>
                                    // 不写提示词，那props就是这个东西
                                    // obj直接展开传进去
                                    <li key={item.filmId} onClick={() => {
                                        this.setState({
                                            selectedFilm: item
                                        }, () => {
                                            console.log(this.state.selectedFilm)
                                        })
                                    }}><FilmItem {...item}></FilmItem></li>
                                )
                            }
                        </ul>
                    </div>

                    <div className='filmDetail'>
                        <FilmDetail {...this.state.selectedFilm}></FilmDetail>
                    </div>
                </div>
            </GlobalContext.Provider>
        )
    }
}
