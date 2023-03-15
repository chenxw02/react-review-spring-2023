import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
    
    constructor() {
        super()
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
            method: "get",
            headers: {
                // 注意写法
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                backList: res.data.data.cinemas,
                cinemaList: res.data.data.cinemas
            })
            
            // axios是异步，所以setState是同步的
            new BScroll('.wrapper')
        }).catch(err => {
                console.error(err); 
            })
    }

    state = {
        cinemaList: [],
        backList: []
    }

    render() {
        return (
            <div>
                <input onInput={(evt) => {
                    this.handleInput(evt)
                }
                }></input>
                <div className='wrapper' style={{height: '500px', backgroundColor: 'yellow', overflow: 'hidden'}}>
                    <dl className='content'>
                    {
                        this.state.cinemaList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt><b>{item.name}</b></dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
                    </dl>
                </div>
            </div>
        )
    }

    handleInput = (event) => {
        console.log(event.target.value)
        let res = this.state.backList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(res)

        this.setState({
            cinemaList: res
        },()=> {
            // 需要同步创建 BScroll
            new BScroll('.wrapper')
        })
    }
}

