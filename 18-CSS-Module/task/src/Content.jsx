import React from 'react'
import Contentstyle from './Content.module.css'
function Content() {
    return (
        <div className={Contentstyle.container}>
            <h1 >This is Content component</h1>

            <button className={Contentstyle.btn} role="button">Box 2</button>

        </div>
    )
}

export default Content
