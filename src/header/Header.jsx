import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="container">
                    <div className="header-content">
                        <ul>
                            <li>Hello</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <button>Log In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header