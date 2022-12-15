import { Component } from "react";
import {data} from './data';
import './navstyle.css';


class Navbar extends Component {
state = {clicked: false};

handleClick = () => {
  this.setState({clicked: !this.state.clicked})
}

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="logo">
                    Horror Movies <i className="fab
                    fa-react"></i> 
                </h1>
                <div className="menu-icons" 
                onClick={this.handleClick}>
                    <i 
                    className= {this.state.clicked ?
                      "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>
                
                <ul className= {this.state.clicked ?  "nav-menu active" : "nav-menu"}> {data.map((item, index)=>{
                        return(
                             <li key={index}>
                        <a href={item.URL} className={item.cName}>
                    <i className={item.icon}></i>{item.title}
                    </a>
                  </li>
                    )
                    })}
                
                </ul>    
                     </nav>
            
        )
    }
}

export default Navbar
