import React, { useEffect, useState } from 'react'
import store from '../../redux/redux'

export default function City(props) {

    const [list, setList] = useState(['上海', '杭州', '北京'])

    useEffect(()=>{
        store.dispatch({
            type: 'hide-tabbar'
        })

        return () => {
            // 一定要写在return里！
            store.dispatch({
                type: 'show-tabbar',
            })
        }
    })

    return (
        <div>
            <h1>City</h1>
            <div>
                {
                    list.map(item => <li key={item} onClick={()=>{
                        // 发的dispatch会匹配所有reducer
                        store.dispatch({
                            type: 'change-city',
                            payload: item
                        })
                        //props.history.push('/cinemas')
                        props.history.goBack()
                    }}>{item}</li>)
                }
            </div>
        </div>
    )
}
