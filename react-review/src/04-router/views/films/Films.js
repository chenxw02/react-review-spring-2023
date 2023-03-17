import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsonn'

// 模块化css
// 1-名字改成xxx.module.css
// 2-导入styel from css
// 3-使用className={style.className}

import style from './css/Film.module.css'

export default function Films() {
  return (
    <div>
        <div style={{height: '200px', background: 'yellow'}}>轮播</div>
        <div style={{height: '50px', background: 'lightblue'}}>
          <ul>
            {/* 可以进行字符串拼接，方便拿到dom：原生js应用，如BScroll */}
            <li><NavLink to='/films/nowplaying' className={style.active+'aaa'}>正在热映</NavLink></li>
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
