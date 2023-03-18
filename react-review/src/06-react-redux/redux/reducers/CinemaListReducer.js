const CinemaListReducer = (prevState = {
    list:[]
}, action) => {
    // 深复制
    let newState = { ...prevState }
    switch (action.type) {
        case 'change-list':
            newState.list = action.payload
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer