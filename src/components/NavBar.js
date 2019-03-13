import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className = "nav-wrapper amber darken-1">
                    <a href="/" className = "brand-logo center">React PhoneBook</a>
                    </div>    
                </nav>    
            </div>
        );
    }
}

export default NavBar;