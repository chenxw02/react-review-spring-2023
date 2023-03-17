import React from 'react'

export default function Detail(props) {
    // 路由间的传参数=>动态路由
    // 该路由
    console.log(props)
    const {id} = props.match.params.id


    // query传参
    // const {id} = props.location.query.id
    return (
        <div>Detail</div>
    )
}
