import React, { useEffect } from 'react'
import store from '../../../redux/redux'
import {show, hide} from '../../../redux/actionCreator/TabbarActionCreator'
import { connect } from 'react-redux'

function Detail(props) {
    // 路由间的传参数=>动态路由
    // 该路由
    const {id} = props.match.params.id

    const {show, hide} = props

    useEffect(()=>{
        // store.dispatch(hide())
        props.hide()
        return () => {
            // 一定要写在return里！
            // store.dispatch(show())
            props.show()
        }
    }, [show, hide]) // 添加依赖

    // query传参
    // const {id} = props.location.query.id
    return (
        <div>Detail</div>
    )
}

const mapDispatchToProps = {
    show,
    hide
} 

// 传属性+回调函数
export default connect(null, mapDispatchToProps)(Detail)
