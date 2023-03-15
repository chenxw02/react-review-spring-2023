import React, { Component } from 'react'
import props from 'prop-types'
import '../css/02-选项卡.css'

export default class TabBar extends Component {

    tabList = [
        {
            id: uuid(),
            text: '电影'
        },
        {
            id: uuid(),
            text: '影院'
        },
        {
            id: uuid(),
            text: '我的'
        }
    ]

    static propType = {
        currentTab: props.number
    }

    render() {
        let {currentTab} = this.props
        return (
            <div>
                <ul>
                    {
                        this.tabList.map((item, index) =>
                            <li key={item.id} className={index === currentTab ? 'active' : ''} onClick={()=>{
                                this.props.event(index)
                            }}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}