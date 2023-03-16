import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import '../02-advanced/css/03-通信.css'

// 使用reducer和context进行通信

// 创建context对象
const GlobalContext = React.createContext()

const reducer = (prevState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case 'getFilms':
            newState.filmList = action.value
            return newState
        case 'setInfo':
            newState.info = action.value
            return newState
        default: 
            return prevState
    }
}

const initialState = {
    filmList: [],
    info: ''
}

function FilmItem(props) {

    // useContext返回的就是value
    // 极大地简化了consumer的写法
    const {dispatch} = useContext(GlobalContext)

    return (
        <div onClick={() => {
            // 改变info
            dispatch({
                type: 'setInfo',
                value: props.synopsis
            })
        }} style={{ width: '200px' }}>
            <img src={props.poster} style={{ width: '100%' }}></img>
        </div>
    )
}

function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return (
        <div>
            {state.info}
        </div>
    )
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

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
            dispatch({
                type: 'getFilms',
                value: res.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <div className='filmItems'>
                    <ul style={{ listStyle: 'none' }}>
                        {
                            state.filmList.map(item =>
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
