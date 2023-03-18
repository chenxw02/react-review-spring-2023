import React from 'react'

// 封装高阶函数
// connect原理

function NotFound(props) {
    return (
        <div>404 NotFound-{props.a}</div>
    )
}

const myconnect = (state, functions) => {
    // 用一个对象接受return
    var value = state()

    // 返回值是一个函数时组件
    return (MyComponet)=> {
        // 路由传来的属性，一起传过去
        return (props) => {
            return(
                // 渲染劫持
                <div style={{color:'red'}}>
                    {/* 注入属性 */}
                    <MyComponet {...value} {...functions} {...props}></MyComponet>
                </div>
            )
        }
    }
}

export default myconnect(()=>{
    return ({
        a: 100
    })
}, {
    a(){

    },
    b(){
        
    }
})(NotFound)
