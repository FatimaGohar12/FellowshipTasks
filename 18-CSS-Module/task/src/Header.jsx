import React from 'react'
import HeaderStyle from './Header.module.css'
function Header() {
    return (
        <div className={HeaderStyle.container}>
            <h1>This is Header component</h1>
            <button className={HeaderStyle.btn} >Box 1</button>
        </div>
    )
}

export default Header
