import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

export default function Center(props) {
    console.log(props) // 默认的属性是空的
    
    const history = useHistory()
    return (
        <div>
            Center
            <div onClick={()=>{
                // props.history.push('/filmorders')
                history.push('/filmorders')
            }}>电影订单</div>
        </div>
    )
}

export const WithCenter = withRouter(Center)
