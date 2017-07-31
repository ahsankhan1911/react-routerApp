import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css'



const NavRoutes =() => (
   <nav className=" NavBar navbar navbar-inverse" >
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" >My Portfolio</a>
    </div>
    <ul className="nav navbar-nav navbar-center">
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/portfolio">Portfolio</Link> </li>
      <li><Link to="/contact">Contact</Link> </li>
    </ul>
  </div>
</nav>
)
 
class Home extends React.Component {
     render(){
    return(
     
        <div className="container container-table">
        <div className="row vertical-center-row">
           <div className="text-center col-md-4 col-md-offset-4">
                    <img src={'profile.png'} alt={" "}/>
                    <h1 className="name">Saad Khan</h1>
                    <span className="skills">Web Developer - Graphic Designer</span>
                     
                    </div> 
            </div> 
  
    </div>) }
}
     
class Contact extends React.Component {
render(){
    return(
    <div>
  <NavRoutes /> 
<h1>this is the Contact page</h1>
    </div> ) }
}

class Portfolio extends React.Component {

render(){
    return(
    <div>
  <NavRoutes /> 
<button> </button>
    </div> ) }
}


const App = () => (
   
 <Router>
     
   <div> 
      {/* <Links/>  */}
     <Route exact path="/" component={Home}/>
     <Route  path="/contact" component={Contact}/>
      <Route  path="/portfolio" component={Portfolio}/>
    
   </div>
 </Router>

);

export default App;