import React, { useState, useCallback } from 'react'


// useCallback将函数记忆下来，防止函数被多次重新创建：性能问题
// 防止因为组件重新渲染，导致方法重新创建，起到缓存作用，只有第二个参数变化，才重新声明一次 
export default function App() {

    const [text, setText] = useState('')
    const [list, setList] = useState([])

    const handleChange = useCallback(
        (evt)=>{
            setText(evt.target.value)
        }, [] // 第二个参数：数组
    )

    // 第二参数是空数组，存的是第一次的函数，包括里面的变量
    // 优势：其它无关的状态改变时，不会影响这个函数，就缓存起来，不重复定义
    // 根据依赖返回函数：新函数还是缓存的函数
    const handleClick = useCallback(
        ()=>{
            setList([...list, text])
                setText('')
        }, [text, list]
    )

    return (
        <div>
            <input onChange={(evt)=>{
                handleChange(evt)
            }} value={text}></input>
            <button onClick={()=>{
                handleClick()
            }}>add</button>
            {
                list.map((item, index) => <li key={item}> 
                    {item} 
                    {/* 不能在这的参数写index，不然就成了button传进来的index了 */}
                    <button onClick={()=> {
                        var newlist = [...list]
                        newlist.splice(index, 1)
                        setList(newlist)
                    }}>delete</button>
                </li>)
            }
        </div>
    )
}
