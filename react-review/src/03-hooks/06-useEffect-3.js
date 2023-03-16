import React, {useEffect, useState} from 'react'


// useEffect可以用无数次
// 生命周期会被覆盖

// useLayoutEffect执行时机和cdm、cdu相同：dom更新完成后，与渲染同步执行，可能会阻塞渲染：性能问题
// 做dom操作就要用useLayoutEffect：dom更新完成了但还没有上渲染树，直接做dom操作没有成本=>和react做出的修改一起渲染；上了渲染树之后再做（useEffect）又回导致一次新的更新和渲染操作（回流重绘=>页面抖动）
// useEffect是在渲染完成后才会调用

function Child() {

    useEffect(()=>{
        window.onresize = () =>{
            console.log('resize')
        }

        var timer = setInterval(()=>{
            console.log('tick')
        }, 1000)

        // 没有依赖时，销毁时执行
        // 有依赖时，更新+销毁都会执行 
        return ()=>{
            clearInterval(timer)
        }

    },[])
    

    return(
        <div>
            Child
        </div>
    )
}

export default function App() {

    const [show, setShow] = useState(true)

    return (
        <div>
            {show&& <Child></Child>}
            <button onClick={()=>{
                setShow(false)
            }}>click</button>
        </div>
    )
}
