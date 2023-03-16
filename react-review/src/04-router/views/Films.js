import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsonn'

export default function Films() {
  return (
    <div>
        <div style={{height: '200px', background: 'yellow'}}>轮播</div>
        <div style={{height: '50px', background: 'lightblue'}}>
          <ul>
            <li><NavLink to='/films/nowplaying'>正在热映</NavLink></li>
            <li><NavLink to='/films/comingsoon'>即将上映</NavLink></li>
          </ul>
        </div>
        <div>
            内容
            {/* 嵌套路由 */}
            <Switch>
            <Route path='/films/nowplaying' component={Nowplaying}></Route>
            <Route path='/films/comingsoon' component={Comingsoon}></Route>
            <Redirect from='/films' to='/films/nowplaying'></Redirect>
            </Switch>
        </div>
    </div>
  )
}
