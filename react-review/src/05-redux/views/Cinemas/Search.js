import React, {useState, useEffect, useMemo} from 'react'
import store from '../../redux/redux'
import getCinemaList from '../../redux/actionCreator/CinemaListActionCreator'

export default function Search(props) {

    const [cinemaList, setCinameList] = useState(store.getState().CinemaListReducer.list)
    const [text, setText] = useState('')

    useEffect(()=>{
        store.dispatch({
            type: 'hide-tabbar'
        })

        return () => {
            store.dispatch({
                type: 'show-tabbar'
            })
        }
    }, [])

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
          console.log('request data from api')
          store.dispatch(getCinemaList())
        } else {
          console.log('get data from store')
        }

        var unsubscribe = store.subscribe(() => {
          console.log('subcribe')
          setCinameList(store.getState().CinemaListReducer.list)
        })
    
        return () => {
          unsubscribe()
        }
    
      }, [])

      const getRes = useMemo(() => 
        cinemaList.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase()))
    , [cinemaList, text])

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
