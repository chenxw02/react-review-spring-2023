import React, { Component } from 'react'

export default class NaviBar extends Component {

    static propType = {
        currentTab: Number
    }

    render() {
        return (
            <div style={{background: 'yellow', overflow: 'hidden', textAlign: 'center'}}>
                <button style={{float: 'left'}} onClick={()=>{
                    this.props.event(0)
                }}>back</button>
                <span>卖座电影</span>
                <button style={{float: 'right'}} onClick={()=>{
                    this.props.event(2)
                }}>cneter</button>
            </div>
        )
    }
}
