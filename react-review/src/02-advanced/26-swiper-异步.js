import React, { Component } from 'react'
import Swiper, {Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])


export default class App extends Component {
    state = {
        list: []
    }

    // dom已经创建完成，但数据还没来
    componentDidMount() { 

        // 异步，不阻塞，new的时候还没有数据
        setTimeout(() =>{
            this.setState({
                list: [111,222,333]
            })

            // 异步内的setState是同步的，我们也可以在这里new
            // new Swiper('.swiper', {
            //     pagination: {
            //         el: '.swiper-pagination',
            //     }
            // })

        }, 1000)

     }

     // 数据更新完再new
     componentDidUpdate() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
            }
        })
     }

    render() {
        return (
            <div>
                <div className='swiper' style={{height: '200px', background: 'yellow'}}>
                    <div className='swiper-wrapper'>
                        {
                            this.state.list.map(item => <div className='swiper-slide' key={item}>{item}</div>)
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}
