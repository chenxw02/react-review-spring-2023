import React, { PureComponent } from 'react'

/*
    PureComponet
    react提供的性能优化方法，相当于自动化的scu
    不适用的场景：state一直会变，引入多余的shallowEqual浪费时间
*/


export default class App extends PureComponent {

    state = {
        name: 'cxw'
    }

    // shouldComponentUpdate(nextProps, nextState) {

    //     console.log('shouldUpdate')

    //     if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
    //         return false
    //     }
    //     return true

    // }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>change</button>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
