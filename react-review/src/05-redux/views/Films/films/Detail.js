import React, { useEffect } from 'react'
import store from '../../../redux/redux'
import {show, hide} from '../../../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    // 路由间的传参数=>动态路由
    // 该路由
    const {id} = props.match.params.id

    useEffect(()=>{
        // console.log('create')
        store.dispatch(hide())
        return () => {
            // console.log('destroy')
            // 一定要写在return里！
            store.dispatch(show())
        }
    }, [])

    // query传参
    // const {id} = props.location.query.id
    return (
        <div>Detail</div>
    )
}
