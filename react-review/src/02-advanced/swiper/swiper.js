import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])


export default class MySwiper extends Component {

    // dom已经创建完成，但数据还没来
    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        return (
            <div>
                <div className='swiper' style={{ height: '200px', background: 'yellow' }}>
                    <div className='swiper-wrapper'>
                        {this.props.children}
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}
