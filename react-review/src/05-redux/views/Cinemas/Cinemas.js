import React, { useEffect, useState } from 'react'
import store from '../../redux/redux'
import getCinemaList from '../../redux/actionCreator/CinemaListActionCreator'

export default function Cinemas(props) {

  // 在这里都不需要订阅：路由跳转走了又跳回来，组件会重新刷新
  // const [cityName, setCityName] = useState(store.getState().cityName)

  // 注意合并后reducer的处理
  const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinameList] = useState(store.getState().CinemaListReducer.list)

  // 把请求的数据缓存到内存中
  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      console.log('request data from api')
      store.dispatch(getCinemaList())
    } else {
      console.log('get data from store')
    }

    // 每次子组件重新渲染的时候都会执行，导致重复订阅
    // 销毁的时候取消订阅
    var unsubscribe = store.subscribe(() => {
      console.log('subcribe')
      setCinameList(store.getState().CinemaListReducer.list)
    })

    return () => {
      unsubscribe()
    }

  }, [])


  return (
    <div>
      <h1>Cinemas</h1>
      <div style={{background: 'yellow', display: 'flex', justifyContent: 'space-between'}}>

        <div onClick={() => {
          props.history.push('/cinemas/city')
        }}>
          {cityName}
        </div>

        <div onClick={()=>{
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div>

      <div>
        {
          cinemaList.map(item => <li key={item.cinemaId}>{item.name}</li>)
        }
      </div>
    </div>
  )
}
