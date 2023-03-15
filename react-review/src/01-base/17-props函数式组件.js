import React, { Component } from 'react'
import NaviBar from './NaviBar'
import SideBar from './SideBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NaviBar></NaviBar>
        <SideBar bg='yellow' position='left'></SideBar>
      </div>
    )
  }
}
