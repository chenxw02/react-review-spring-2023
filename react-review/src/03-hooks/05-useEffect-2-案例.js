import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilmLis(props) {

    const [list, setList] = useState([])

    useEffect(()=>{
        var url
        if (props.type === 0) {
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
            setList(res.data.data.films)
            console.log(list)
        }).catch(err => {
            console.log(err)
        })
    }, [props.type])  // useEffect依赖于props.type

    return (
        <div>
            {
                list.map(item => <li key={item.fildId}>{item.name}</li>)
            }
        </div>
    )
}

export default function App() {

    const [type, setType] = useState(0)

    return (
        <div>
            <ul>
                <li onClick={() => {
                    setType(0)
                }}>正在热映</li>
                <li onClick={() => {
                    setType(1)
                }}>即将上映</li>
                <br/>
                <FilmLis type={type}></FilmLis>
            </ul>
        </div>
    )
}
