// 1-引入redux
// 创建，createStore( reducer )

// redux 无需配合context使用，reducer必须要把dispatch放在provider和value里，这样consumer才能通过provider的value拿到dispatch

import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'


// reducer首次运行时没有老状态，该是undefined
// 可以对undefined进行初始化，本质：没有值就用等号后的值
// 也可以用useReducer的写法

// reducer：负责处理state的更改
// getStore：用来拿到state
// dispatch：用来通知store调用reducer进行更改
// subscribe：需要监听状态的组件必须进行订阅，store.subscribe

// reuder必须是纯函数 => 对外界没有副作用：没有改变传入的preState的值
// 这些数据存在内存中，刷新就没了

// 不同action处理的属性之间没有联系，可以把reducer进行拆分，不同的函数处理不同的属性，再合并成一个大的reducer即可

// const reducer = (prevState = {
//     show: true,
//     cityName: '北京'
// }, action) => {
//     // 深复制
//     let newState = { ...prevState }
//     switch (action.type) {
//         case 'hide-tabbar':
//             newState.show = false
//             return newState
//         case 'show-tabbar':
//             newState.show = true
//             return newState
//         case 'change-city':
//             newState.cityName = action.payload
//             return newState
//         default:
//             return prevState
//     }
// }

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

// 使用中间件reduxThunk
// 处理异步问题
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

export default store

// redux 本质是一个订阅发布模式
// redux 原理
const myCreateStore = (reducer) => {

    // 存回调函数
    var list = []
    // 调用reducer返回状态，如果无初始化，返回ud
    var state = reducer(undefined, {})
    const subscribe = (callback) => {
        list.push(callback)
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        // 调用所有回调函数
        for(var cb in list) {
            list[cb] && list[cb]()
        }
    }

    const getState = () => {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}

// 纯函数

var obj = {
    myname: 'cxw'
}

const change = (obj) => {
    // 浅复制
    // 修改了obj的值 => 不是纯函数
    obj.myname = 'xiaoming'

    // 纯函数
    // 1-对外界的变量和对象没有影响
    // 2-同样的输入得到同样的输出
}