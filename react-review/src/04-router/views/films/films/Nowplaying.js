import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


// Nowplaying是Route的儿子组件（被Route包了）
// 有route传来的属性
export default function Nowplaying(props) {

    const [filmList, setFilmList] = useState([])

    useEffect(()=>{
        axios({
            method:'get',
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1379631',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            setFilmList(res.data.data.films)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    const handlePageChange = (id) => {
        // 编程式导航
        // 原生js，注意加#
        // window.location.href='#/detail/'+id
        // 字符串模版。注意写法
        // react方法，会自动加#

        // 1-动态路由传参
        // id在路径上，页面刷新/第一次加载也能拿到
        props.history.push(`/detail/${id}`)

        // 依赖历史栈，不从上一级进入就没有query和state，会报错
        // 2-query传参
        // props.history.push({pathname: '/detail', query: {id: id}})

        // 3-state传参
        // props.history.push({pathname: '/detail', state: {id: id}})
    }

    return (
        <div>
            {/* 声明式导航 */}
            {/* {
                filmList.map(item => <li key={item.filmId}>
                    <NavLink to={'/detail/'+item.filmId}>
                    {item.name}
                    </NavLink>
                    </li>)
            } */}
            {
                // 第一个小括号不要加item！不要多次传
                filmList.map(item => <li key={item.filmId} onClick={()=>{
                    handlePageChange(item.filmId)
                }}>
                    {item.name}
                    </li>)   
            }
        </div>
    )
}
