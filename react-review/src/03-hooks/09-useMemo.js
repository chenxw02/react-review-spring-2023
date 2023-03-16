import React, { Component, useMemo, useState, useEffect } from 'react'
import axios from 'axios'
import '../02-advanced/css/02-选项卡.css'

// useMemo和useCallba类似，都是储存。useMemo返回/储存函数的结果，useCallback返回函数本身=>导致不必要的重复执行
// 记忆组件
export default function Cinmema() {

    const [cinemaList, setCinemaList] = useState([])
    const [text, setText] = useState('')

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


    // 不填第二个参数：只记忆第一次，第一次是对空数组的过滤
    // 性能提高
    // 计算式不能写大括号！
    const getRes = useMemo(() => 
        cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase()))
    , [cinemaList, text]) // cinemaList和text变化时，都再计算一遍，其它时候不重复计算

    const renderRes = () => {
        let res = cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase()))

        return (
            <div>
                {
                    res.map(item =>
                        <dl key={item.cinemaId}>
                            <dt><b>{item.name}</b></dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

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


