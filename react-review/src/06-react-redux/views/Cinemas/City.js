import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/redux'
import { hide, show } from '../../redux/actionCreator/TabbarActionCreator'

function City(props) {

    const [list] = useState(['上海', '杭州', '北京'])
    const {show, hide} = props

    useEffect(() => {
        
        props.hide()

        return () => {
            props.show()
        }
    },[show, hide])

    return (
        <div>
            <h1>City</h1>
            <div>
                {
                    list.map(item => <li key={item} onClick={() => {
                        props.change(item)
                        props.history.goBack()
                    }}>{item}</li>)
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    change(item) {
        return ({
            type: 'change-city',
            payload: item
        })
    },
    hide,
    show
}

export default connect(null, mapDispatchToProps)(City)