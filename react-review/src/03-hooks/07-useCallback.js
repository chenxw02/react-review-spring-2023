import React, {useState} from 'react'

export default function App() {

    // 记忆函数，记住状态=>初始化只会执行一次
    // useState，useCallBack，useMemo都有记忆功能：闭包原理
    const [count, setCount] = useState(0)

    var myCount = 0

  return (
    <div>
        {/* myCount一直显示0:页面重新渲染，函数重新执行，myCount又被赋值成了0 */}
        {count}={myCount}
        <button onClick={()=>{
            setCount(count+1)
            myCount++
        }}>click</button>
    </div>
  )
}
