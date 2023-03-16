import React, { Component } from 'react'
import Swiper from 'swiper'
import MySwiper from './swiper/swiper'
import SwiperItem from './swiper/swiperItem'
import axios from 'axios'

export default class App extends Component {

  state = {
    movieList: []
  }

  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4940780',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.setState({
        movieList: res.data.data.films
      })
      console.log(this.state.movieList)
      
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        {/* 组件必须首字母大写 */}
        <MySwiper>
          {
            this.state.movieList.map(item => <SwiperItem key={item.filmId}>
              <img src={item.poster} alt='poster' style={{height: '100%'}}></img>
            </SwiperItem>)
          }
        </MySwiper>
      </div>
    )
  }
}
