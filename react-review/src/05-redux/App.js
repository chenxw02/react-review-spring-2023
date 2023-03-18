import React, { useEffect, useState } from 'react'
import IndexRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'
import store from './redux/redux'

export default function App() {

    const [show, setShow] = useState(store.getState().TabbarReducer.show)
    
    useEffect(()=>{

        // 只要reducer有返回，就会通知所有订阅者
        store.subscribe(()=>{
            // 通过getState拿到state
            // useReducer需要把state和dispatch放在provider的value里
            // 最终还是要把store里的东西给自己的状态，来控制自己
            setShow(store.getState().TabbarReducer.show)
        })

        return () => {

        }
    })

    return (
        <div>
            <IndexRouter>
                {/* 要把所有NaviLink插在hashRouter里 */}
                {show && <TabBar></TabBar>}
            </IndexRouter>
        </div>
    )
}
