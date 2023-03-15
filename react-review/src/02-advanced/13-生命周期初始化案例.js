import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
    
    state = {
        list: ['111','222','333','444','555','666','777','888']
    }

    componentDidMount(){
        new BScroll('.wrapper')
    }

    render() {
        return (
            <div>
                <div className='wrapper' style={{height: '100px', background: 'yellow', overflow: 'hidden'}}>
                    <ul className='content'>
                    {
                        this.state.list.map(item => <li key={item}>{item}</li>)
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
