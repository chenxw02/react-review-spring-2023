import React from 'react'

// 要传入props
export default function SideBar(props) {

    let {bg, position} = props
    console.log(bg)

    var obj = {
        background: bg, 
        width: '80px',
        position: 'fixed'
    }

    var obj1 = {
        left: 0
    }

    var obj2 = {
        right: 0
    }

    // 展开+合并
    var styleObj = position === 'right' ? {...obj, ...obj2} : {...obj, ...obj1}

    // 少写有状态的组件：管理变复杂，复用性降低
    // 无状态组件（受控组件）：渲染完全由父组件的传递的props控制

    return (
        // css内部不需要再用大括号包住变量
        <div style={styleObj}>
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
    )
}

