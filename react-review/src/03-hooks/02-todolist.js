import React, { useState } from 'react'

// 完全受控
export default function App() {

    // set是简单覆盖，不是合并
    const [text, setText] = useState('')
    const [list, setList] = useState([])

    return (
        <div>
            <input onChange={(evt)=>{
                setText(evt.target.value)
                console.log(text)
            }} value={text}></input>
            <button onClick={()=>{
                setList([...list, text])
                setText('')
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
