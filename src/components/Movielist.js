// components thats supposed to list the movies

import { Component } from "react";
import './App.css';
import { List } from './Moviedata';
import Star from "./stars";
import App2 from "./App2";


class Movielist extends Component {
        render() {
            return (
                <div className="mov">
                    <h1>
                        Horror Movies <i></i> 
                    </h1>
                    <ul> {List.map((item, index)=>{
                        return(
                       <li className="line" key={index}>
                        <img src={item.img} alt='the images of the movie'/> 
                         <h1 >{item.title},{item.year}</h1>
                         <div> {item.info} </div>
                        <Star />
                        <App2 />
                  </li>
                    )
                    })}
                
                </ul>   
                        </div>
                
            )
        }
    }
    
    export default Movielist
    
    