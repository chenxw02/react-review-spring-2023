import React, { Component } from 'react'
import axios from 'axios'
import '../css/02-选项卡.css'

export default class Cinema extends Component {


    // 生命周期函数适合拿数据
    // 用axios请求数据
    
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
        backList: []
    }

    render() {
        return (
            <div>
                <input onInput={(evt) => {
                    this.handleInput(evt)
                }
                }></input>
                    {
                        this.state.cinemaList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt><b>{item.name}</b></dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
            </div>
        )
    }

    // 不使用标签：oninput、onclick等会自动传入事件
    // {this.handleInput}
    // 前提：外部是箭头函数时必须显式的传入evt
    // () => {this.handleInput} 不行
    // (evt) => {this.handleInput(evt)}
    handleInput = (event) => {
        console.log(event.target.value)
        // 不区分大小写：对比两边全部转化为大写
        let res = this.state.backList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(res)

        this.setState({
            cinemaList: res
        })

        // 在这log会发现cinemaList还是老状态：setState异步改变
        console.log(this.state.cinemaList)
    }
}

// filter
// filter方法不影响原数组

let array = ['aaa', 'abc', 'bbb']
console.log(array)

// 每个元素都映射
let newArray1 = array.filter(item => true)
console.log(newArray1)

// 映射包含a的元素
let newArray2 = array.filter(item => item.includes('a'))
console.log(newArray2)
