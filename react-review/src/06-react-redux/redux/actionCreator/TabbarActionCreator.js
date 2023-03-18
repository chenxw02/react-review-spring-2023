// 把每个组件要用到的dispatch封装起来

const show = () => {
    return (
        {
            type: 'show-tabbar'
        }
    )
}

const hide = () => {
    return(
        {
            type: 'hide-tabbar'
        }
    )
}

export {show, hide}