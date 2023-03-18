import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './TabBar.module.css'
// import导入的css会被插入到head：单页面应用，对所有组件生效

export default function TabBar() {
    return (
        <div>
            <div className={style.tabbar}>
                <ul>
                    {/* 声明式导航 */}
                    <li><NavLink to='/films' activeClassName='active-tab'>电影</NavLink></li>
                    <li><NavLink to='/cinemas' activeClassName='active-tab'>影院</NavLink></li>
                    <li><NavLink to='/center' activeClassName='active-tab'>我的</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
