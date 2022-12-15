// navbar data (Title, url, etc)
// import { List } from "./Moviedata"/
import {
    Route,
    Navigate,
    Routes,
    Link,
  } from "react-router-dom";
    
  // import Home component
  import Home from "./Home";
  // import About component
  import About from "./About";
  // import ContactUs component
  import ContactUs from "./ContactUs";


  export const data = [
    {
        title: 'Home',
       url: <Link to={Home} className='wrap'>home</Link>,
        cName:'nav-links',
        icon: "fa-solid fa-house-user" 
    },
    {
        title: 'About',
        URL: <Routes><Route path="/about" component={About} />
         <Navigate to="/" /></Routes>,
        cName:'nav-links',
        icon: "fa-solid fa-circle-info" 
    },
    {
        title: 'Contact',
        URL: <Routes> <Route path="/contactus" component={ContactUs} />  <Navigate to="/" /></Routes>,
        cName:'nav-links',
        icon: "fa-solid fa-briefcase" 
    },
    {
        title: 'Repo',
        URL: 'https://github.com/Jose45f/movie-review',
        cName:'nav-links-mobile',
       
        
    }
   
]