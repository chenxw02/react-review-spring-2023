import React, {useState, useRef} from 'react'

export default function App() {

    const [count, setCount] = useState(0)
    var myCount = 0
    var myRefCount = useRef(0)

  return (
    <div>
        {/* myCount一直显示0:页面重新渲染，函数重新执行，myCount又被赋值成了0 */}
        {count}-{myCount}-{myRefCount.current}
        <button onClick={()=>{
            setCount(count+1)
            myCount++
            myRefCount.current++
        }}>click</button>
    </div>
  )
}
