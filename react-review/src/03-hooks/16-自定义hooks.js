import React, { Component, useMemo, useState, useEffect } from 'react'
import axios from 'axios'
import '../02-advanced/css/02-选项卡.css'

// 自定义hook：函数包装，优点是内部可以使用react的各种use=>复用函数

// use开头
function useCinemaList () {
    const [cinemaList, setCinemaList] = useState([])
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data)
            setCinemaList(res.data.data.cinemas)
        }).catch(err => {
            console.error(err);
        })
    }, [])

    // 返回一个对象
    return {
        cinemaList
    }
}

// 可接收参数
function useFilter(cinemaList, text) {
    const getRes = useMemo(() => 
        cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase()))
    , [cinemaList, text]) // cinemaList和text变化时，都再计算一遍，其它时候不重复计算

    return {
        getRes
    }
}


export default function Cinmema() {

    const [text, setText] = useState('')

    // 对返回的对象解构
    // 自定义hooks更新的时候也会重新渲染
    // 例子：异步axios，先返回了一个空数组，渲染第一次；数据返回，返回真实数据，会重新渲染
    const {cinemaList} = useCinemaList()
    const {getRes} = useFilter(cinemaList, text)


    return (
        <div>
            <input value={text} onChange={(evt) => {
                setText(evt.target.value)
            }}></input>
            {
                getRes.map(item =>
                    <dl key={item.cinemaId}>
                        <dt><b>{item.name}</b></dt>
                        <dd>{item.address}</dd>
                    </dl>
                )
            }
        </div>
    )
}


 