import React, { Component } from 'react'
import axios from 'axios'
import './css/02-选项卡.css'

export default class Cinema extends Component {
   
    constructor() {
        super()

        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204")
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.error(err); 
        // })

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
        }).catch(err => {
                console.error(err); 
            })
    }

    state = {
        cinemaList: [],
        backList: [],
        myText: ''
    }

    render() {
        return (
            <div>
                <input value={this.state.myText} onChange={(evt)=>{
                    this.setState({
                        myText: evt.target.value
                    }, ()=>{
                        console.log(this.state.myText)
                    })
                }}></input>
                    {
                        this.renderRes()
                    }
            </div>
        )
    }

    renderRes = () => {
        let res = this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.myText.toUpperCase()))

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
}

