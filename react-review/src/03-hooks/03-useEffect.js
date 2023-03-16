import React, { useState, useEffect } from 'react'
import axios from 'axios'

// useEffect模拟class的生命周期，做之前生命周期做的工作
// state更新后，函数都会重新执行：把axios放在函数体里，一直请求
export default function App() {

    const [movieList, setMovieList] = useState([])

    // 参数：一个函数，一个数组
    useEffect(()=>{
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780',
            method: 'get',
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          }).then(res => {
            console.log(res.data)
            setMovieList(res.data.data.films)
            console.log(movieList)
            
          }).catch(err => {
            console.log(err)
          })
    },[]) // 传控数组

    return (
        <div>App</div>
    )
}
