import { Component } from 'react'
import divstyle from './div.module.css'

function Div(){
    return (
        <div className={divstyle.white}>
            <div className={divstyle.left}> about me</div>
            <div className={divstyle.right}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure eos adipisci sint iste 
                    facilis dignissimos sed rerum illum voluptatibus, asperiores
                     accusantium earum dolorum, fugiat ipsa facere, minus natus ipsam.</p>
            </div>
        </div>
    )
}
export default Div