import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films/Films'
import Cinemas from '../views/Cinemas/Cinemas'
// 从一个js文件引入多个组件：用大括号
import Center, {WithCenter} from '../views/Center/Center'
import NotFound from '../views/NotFound/NotFound'
import Detail from '../views/Films/films/Detail'
import Login from '../views/Login/Login'

// 嵌套路由： 可以替换一个大组件内的部分组件
// 二级路由：会替换掉整个组件

function isAuth() {
    return localStorage.getItem('token')
}

export default function IndexRouter(props) {
    return (
        <div>
            {/* 路径带引号 */}
            {/* browserRouter，会认为是一个后端路径，需要后端处理，后端没有对应的处理路径，就会404 */}
            {/* 处理：配置一下，后端接收到不能处理的路径，认为是前端路径，渲染页面 */}
            {/* hashRouter不会向后端请求数据 */}
            <Router>
                {/* switch只匹配第一个，然后跳出，就不会走到后面了 */}
                {props.children}
                <Switch>
                    {/* 默认都是模糊匹配 */}
                    <Route path='/films' component={Films}></Route>
                    <Route path='/cinemas' component={Cinemas}></Route>


                    {/* 将Center组件传给Route，形成父子组件，Route会给子组件传属性 */}
                    {/* <Route path='/center' render={()=>{<Center></Center>}}></Route> */}

                    {/* 
                        路由拦截 
                        未授权，重定向到login 
                        将实例化后的Center组件传给Route，不能形成父子组件，此时<Center/>上没有任何属性 
                        1-可以在实例化的组件上手动传Route要给子组件的属性 
                    */}

                    {/* <Route path='/center' render={(props) => {
                        return isAuth() ? <Center {...props} ></Center> : <Redirect to='/login'></Redirect>
                    }}></Route> */}

                    {/* 
                        2-在子组件中使用withRouter
                        此时这里要使用withRouter包装好的组件
                    */}

                    {/* <Route path='/center' render={() => {
                        return isAuth() ? <WithCenter></WithCenter> : <Redirect to='/login'></Redirect>
                    }}></Route> */}

                    {/* 
                        3-在子组件中使用useHistory
                        效果和withRouter类似，但要简洁、方便很多
                    */}

                    <Route path='/center' render={() => {
                        return isAuth() ? <Center></Center> : <Redirect to='/login'></Redirect>
                    }}></Route>

                    <Route path='/login' component={Login}></Route>


                    <Route path='/center' component={Center}></Route>
                    {/* 动态路由，id匹配 */}
                    <Route path='/detail/:id' component={Detail}></Route>

                    {/* 模糊匹配，所有路径都会匹配到 */}
                    {/* <Redirect from='/' to='/films'></Redirect> */}

                    {/* 精确匹配 */}
                    <Redirect from='/' to='/films' exact></Redirect>

                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
        </div>
    )
}

// 为什么会有属性

class Route_eg extends Component {

    //...

    render() {

        // 外部的component={...}本质上是route的一个属性
        // 拿到这个属性
        var Mycomponet = this.props.component

        return(
            <div>
                {/* 在自己内部实例化，所以component是route的儿子组件 */}
                <Mycomponet history={{}} match ={{}}></Mycomponet>
            </div>
        )
    }
}
