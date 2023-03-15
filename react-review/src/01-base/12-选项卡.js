import React, { Component } from 'react'
import './css/02-选项卡.css'
import Film from './选项卡-components/Film'
import Cinema from './选项卡-components/Cinema'
import Center from './选项卡-components/Center'

export default class App extends Component {

    // 每次state改变后都会马上更新页面
    state = {
        list: [
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
        ],

        currentTab: 0
    }

    render() {
        return (
            <div>
                {/* {this.state.currentTab === 0 && <Film></Film>}
                {this.state.currentTab === 1 && <Cinema></Cinema>}
                {this.state.currentTab === 2 && <Center></Center>} */}
                {/* 使用小括号执行函数 */}
                {this.showWhichCard()}
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={index === this.state.currentTab ? 'active' : ''} onClick={() => {
                                this.onTapBar(index)
                            }}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    onTapBar = (index) => {
        this.setState(
            {
                currentTab: index
            }
        )
    }

    showWhichCard = () => {
        switch(this.state.currentTab) {
            case 0: return <Film></Film>
            case 1: return <Cinema></Cinema>
            case 2: return <Center></Center>
            default: <div>NOT FOUND</div>
        }
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
