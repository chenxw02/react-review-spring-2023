import React, {useState} from 'react'

export default function App() {

    // 状态 + 改变状态的唯一方法 + 默认值
    const [name, setName] = useState('cxw')

    return (
        <div>
            <button onClick={()=>{
                setName('xiaoming')
            }}>click</button>
            {name}
        </div>
    )
}
