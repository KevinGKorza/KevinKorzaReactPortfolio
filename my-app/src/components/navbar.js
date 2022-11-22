import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarInfo">
                <h1>Kevin Korza's Portfolio <i className="fa-brands fa-github"></i><a href="https://github.com/KevinGKorza">Check out my Github!</a></h1>
            </nav>
        )
    }
}

export default Navbar;