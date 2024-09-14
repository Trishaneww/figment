import React from 'react'
import '../styles/global.scss';

const MobileNavbar = () => {
  return (
    <div>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-btn">
            <p>OPEN</p>
        </label>

        <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-btn">
                <p>CLOSE</p>
            </label>

            <a href="/" className="home-link">PAGE1</a>
            <a href="/">PAGE1</a>
            <a href="/">PAGE1</a>
        </div>

    </div>
  )
}

export default MobileNavbar