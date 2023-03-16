import React, { useReducer, useContext } from 'react'


// reducer配合context进行状态管理
// 视图逻辑与状态逻辑分离

const reducer = (prevState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case 'changeA':
            newState.a = action.value
            return newState
        case 'changeB':
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}

const initialState = {
    a: 1,
    b: 2
}

const GlobalContext = React.createContext()

export default function App() {

    // 创建一份，多个组件共享
    // 每个函数内的reducer是独立的
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <GlobalContext.Provider value={{
                state,
                dispatch
            }}>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </GlobalContext.Provider>
        </div>
    )
}

function Child1() {

    // 解构context的value
    const {dispatch} = useContext(GlobalContext)
    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type: 'changeA',
                    value: 10
                }
                )
            }}>changeA</button>
            <button onClick={()=>{
                dispatch({
                    type: 'changeB',
                    value: 20
                })
            }}>changeB</button>
        </div>
    )
}

function Child2() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{ background: 'yellow' }}>
            Child2 {state.a} {state.b}
        </div>
    )
}

function Child3() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{ background: 'lightblue' }}>
            Child3 {state.a} {state.b}
        </div>
    )
}