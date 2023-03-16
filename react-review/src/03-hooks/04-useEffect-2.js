import React, {useState, useEffect} from 'react'

export default function App() {

    const [name, setName] = useState('cxw')

    // 第一次执行，且依赖name：name更新继续执行
    useEffect(()=>{
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])
    
    return (
        <div>
            {name}
            <button onClick={()=>{
                setName('xiaoming')
            }}>click</button>
        </div>
    )
}
