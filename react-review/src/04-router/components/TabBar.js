import React from 'react'
import { NavLink } from 'react-router-dom'
import './TabBar.css'

export default function TabBar() {
    return (
        <div>
            <ul>
                {/* 声明式导航 */}
                <li><NavLink to='/films' activeClassName='active-tab'>电影</NavLink></li>
                <li><NavLink to='/cinemas' activeClassName='active-tab'>影院</NavLink></li>
                <li><NavLink to='/center' activeClassName='active-tab'>我的</NavLink></li>
            </ul>
        </div>
    )
}
