import React, { Component } from 'react'
import './css/02-选项卡.css'
import Film from './选项卡-components/Film'
import Cinema from './选项卡-components/Cinema'
import Center from './选项卡-components/Center'
import TabBar from './选项卡-components/TabBar'
import NaviBar from './选项卡-components/NaviBar'

export default class App extends Component {

    state = {
        currentTab: 0
    }

    

    render() {
        return (
            <div>
                <NaviBar currentTab={this.state.currentTab} event={(index)=>{
                    this.onTap(index)
                }}></NaviBar>
                {this.showWhichCard()}
                {/* 需要用的参数注意在前面的括号里也必须要有 */}
                <TabBar currentTab={this.state.currentTab} event={(index)=>{
                    this.onTap(index)
                }}></TabBar>
            </div>
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

    onTap = (index) => {
        this.setState({
            currentTab: index
        },()=>{
            console.log(this.state.currentTab)
        })
    }
}


