import React, { useEffect, useState } from 'react'
import axios from 'axios'


// 反向代理：隐藏服务端
// 请求自己的服务器，自己的服务器去请求api
export default function Comingsonn() {

    const [filmList, setFilmList] = useState([])

    // 猫眼的token有时间限制！
    // 配置反向代理
    useEffect(()=>{
        axios({
            method:'get',
            // 在这截去前面的域名
            url: '/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=ADE2C6A0C40E11EDA6D2E5309A29ED3991B7D06FC608485383EF678E404E1F58&optimus_risk_level=71&optimus_code=10',
            headers: {
                'content-type': 'application/json charset=utf-8'
            }
        }).then(res=>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        axios({
            method:'get',
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5616346',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res.data)
            setFilmList(res.data.data.films)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            {
                filmList.map(item => <li key={item.filmId}>{item.name}</li>)
            }
        </div>
    )
}
