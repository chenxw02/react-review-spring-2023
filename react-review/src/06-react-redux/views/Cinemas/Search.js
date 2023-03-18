import React, {useState, useEffect, useMemo} from 'react'
import getCinemaList from '../../redux/actionCreator/CinemaListActionCreator'
import { hide, show } from '../../redux/actionCreator/TabbarActionCreator'
import { connect } from 'react-redux'

function Search(props) {

    //const [cinemaList, setCinameList] = useState(store.getState().CinemaListReducer.list)
    const [text, setText] = useState('')

    const {show, hide, getCinemaList, cinemaList} = props

    useEffect(()=>{
        props.hide()

        return () => {
            props.show()
        }
    }, [show, hide])

    useEffect(() => {
        if (cinemaList.length === 0) {
          console.log('request data from api')
          props.getCinemaList()
        } else {
          console.log('get data from store')
        }
    
      }, [getCinemaList])

      const getRes = useMemo(() => 
        props.cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase()))
    , [props.cinemaList, text])

    return (
        <div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <button onClick={()=>{
                    props.history.goBack()
                }}>back</button>
                <input autoFocus style={{width: '100%'}} onChange={(evt)=>{
                    setText(evt.target.value)
                }}></input>
            </div>
            <div>
                {
                    getRes.map(item => <li key={item.cinemaId}>{item.name}</li>)
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    hide,
    show,
    getCinemaList
}

const mapStateToProps = (state) => {
    return({
        cinemaList: state.CinemaListReducer.list
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)