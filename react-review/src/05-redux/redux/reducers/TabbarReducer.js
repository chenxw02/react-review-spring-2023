const TabbarReducer = (prevState = {
    show: true,
}, action) => {
    // 深复制
    let newState = { ...prevState }
    switch (action.type) {
        case 'hide-tabbar':
            newState.show = false
            return newState
        case 'show-tabbar':
            newState.show = true
            return newState
        default:
            return prevState
    }
}

export default TabbarReducer