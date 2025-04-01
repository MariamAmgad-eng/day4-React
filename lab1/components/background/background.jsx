import { Component } from 'react'
import bgstyle from './background.module.css'

function Background() {
    return (
        <div className={bgstyle.bgimg}>
            <div className={bgstyle.content}>
                <h1>Welcome</h1>
                <h4>This is a new website</h4>
            </div>
        </div>
    )
}

export default Background
