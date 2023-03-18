import React from 'react'
import IndexRouter from './router/IndexRouter'
import TabBar from './components/TabBar'
import './css/App.css'

export default function App() {
    return (
        <div>
            <IndexRouter>
                {/* 要把所有NaviLink插在hashRouter里 */}
                <TabBar></TabBar>
            </IndexRouter>
        </div>
    )
}
