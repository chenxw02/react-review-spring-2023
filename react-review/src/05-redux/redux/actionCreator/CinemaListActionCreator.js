import axios from 'axios'


// 引入中间件后，可以返回一个函数，而不仅仅是普通的js对象

const wrongGetCinemaList = () => {

    var payload

    axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
        method: "get",
        headers: {
            // 注意写法
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        console.log(res.data)
        payload = res.data.data.cinemas

        // 不能放在这return
        // 这里的return是axios的return，不是大函数的return！
        // 这里是拿到数据后才执行
        // axios执行后会立马去函数的return，导致return了undefined
    }).catch(err => {
        console.error(err);
    })

    // axios是异步的，还没有拿到数据就已经return了
    return ({
        type: 'change-list',
        payload: payload
    })
}

// redux风格
const getCinemaList = () => {
    // thunk会塞一个dispatch进来
    return (dispatch) => {
        console.log('requesting')
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
            method: "get",
            headers: {
                // 注意写法
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {   
            dispatch({
                type: 'change-list',
                payload: res.data.data.cinemas
            })
        }).catch(err => {
            console.error(err);
        })
    }
}

// promise风格，直接返回axios，因为axios使是一个promise
// 本质：接收到axios的return后，用这个return的对象去发dispatch
const getCinemaList_promise = () => {
    return axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
        method: "get",
        headers: {
            // 注意写法
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {  
        return({
            type: 'change-list',
            payload: res.data.data.cinemas
        }) 
    }).catch(err => {
        console.error(err);
    })
}

async function getCinemaList_promise_async() {
    var list = await axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1274204",
        method: "get",
        headers: {
            // 注意写法
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16787195591461332557692929","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {  
        return({
            type: 'change-list',
            payload: res.data.data.cinemas
        }) 
    }).catch(err => {
        console.error(err);
    })

    return list
}

export default getCinemaList