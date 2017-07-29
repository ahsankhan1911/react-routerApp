import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css'


const NavRoutes =() => (
     <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
  

        <div className="container">
                <ul className="nav navbar-nav navbar-right">
                  
                       <Link activeClassName="active" to="/">Home</Link>
                    
                 
                       <Link to="/portfolio">Portfolio</Link>
                 
              
                        <Link to="/about">About</Link>
            
                  
                       <Link to="/contact">Contact</Link>
                   
                </ul>
        </div>

    </nav>

)
 
const Home = () => (

<div>
    <NavRoutes /> 
        <div class="container" >
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/profile.png" alt=""/>
                    <div class="intro-text">
                        <h6 class="name">Saad Khan</h6>
                      
                        <span class="skills">Web Developer - Graphic Designer</span>

                    </div>
                </div>
            </div>
        </div>
    </div>

)

const About = () => (
    <div>
  <NavRoutes /> 
<h1>this is the About page</h1>
</div>
)
     
const Contact = () => (
    <div>
  <NavRoutes /> 
<h1>this is the Contact page</h1>
</div>
)

const Portfolio = () => (
    <div>
  <NavRoutes /> 
<h1>this is the Portfolio page</h1>
</div>
)


const App = () => (
 <Router>

   <div>
      {/* <Links/>  */}
     <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
     <Route  path="/contact" component={Contact}/> .
      <Route  path="/portfolio" component={Portfolio}/> 
    
   </div>
 </Router>

);

export default App;