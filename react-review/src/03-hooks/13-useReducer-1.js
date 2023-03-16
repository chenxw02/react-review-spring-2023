import React, { useReducer } from 'react'


// useReducer，在外部管理函数状态

// 处理状态
// 老状态+type类型
const reducer = (prevState, action) => {
    // 不能直接对状态进行操作
    console.log(action.type)
    let newState = {...prevState}
    switch (action.type) {
        case 'minus':
            newState.count --
            return newState
        case 'add':
            newState.count ++
            return newState
        default:
            return prevState
    }
};

// 状态
const intialState = {
    count: 0
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            {/* 传一个对象给reducer */}
            <button onClick={()=>{
                dispatch({
                    type: 'minus'
                })
            }}>-</button>
            {state.count}
            <button onClick={()=>{
                dispatch({
                    type: 'add'
                })
            }}>+</button>
        </div>
    )
}
