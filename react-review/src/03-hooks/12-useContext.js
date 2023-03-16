import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import '../02-advanced/css/03-通信.css'

// 创建context对象
const GlobalContext = React.createContext()

function FilmItem(props) {

    // useContext返回的就是value
    // 极大地简化了consumer的写法
    const value = useContext(GlobalContext)

    return (
        <div onClick={() => {
            // 改变info
            value.setInfo(props.synopsis)
        }} style={{ width: '200px' }}>
            <img src={props.poster} style={{ width: '100%' }}></img>
        </div>
    )
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    return (
        <div>
            {value.info}
        </div>
    )
}

export default function App() {

    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data)
            setFilmList(res.data.data.films)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            info: info,
            setInfo: (value) => {
                setInfo(value)
            }
        }}>
            <div>
                <div className='filmItems'>
                    <ul style={{ listStyle: 'none' }}>
                        {
                            filmList.map(item =>
                                // 不写提示词，那props就是这个东西
                                // obj直接展开传进去
                                <li key={item.filmId}><FilmItem {...item}></FilmItem></li>
                            )
                        }
                    </ul>
                </div>

                <div className='filmDetail'>
                    <FilmDetail></FilmDetail>
                </div>
            </div>
        </GlobalContext.Provider>
    )
}
