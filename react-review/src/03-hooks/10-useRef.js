import React, { useState, useRef } from 'react'

// 保存变量：useState + ref
export default function App() {

    const [list, setList] = useState([])
    const mytext = useRef('')

    return (
        <div>
            <input ref={mytext}></input>
            <button onClick={()=>{
                setList([...list, mytext.current.value])
                mytext.current.value = ''
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
