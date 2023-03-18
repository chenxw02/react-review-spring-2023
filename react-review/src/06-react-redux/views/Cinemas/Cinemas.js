import React, { useEffect, useState } from 'react'
import store from '../../redux/redux'
import getCinemaList from '../../redux/actionCreator/CinemaListActionCreator'
import { connect } from 'react-redux'

function Cinemas(props) {

  const { cityName, cinemaList } = props


  // 把请求的数据缓存到内存中
  useEffect(() => {
    if (cinemaList.length === 0) {
      props.getCinemaList()
    } else {
      console.log('get data from store')
    }
  }, [cinemaList])

  return (
    <div>
      <h1>Cinemas</h1>
      <div style={{ background: 'yellow', display: 'flex', justifyContent: 'space-between' }}>

        <div onClick={() => {
          props.history.push('/cinemas/city')
        }}>
          {cityName}
        </div>

        <div onClick={() => {
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

const mapStateToProps = (state) => {
  return ({
    cinemaList: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  })
}

const mapDispatchToProps = {
  getCinemaList
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)

