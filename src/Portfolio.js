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
      <div> 
      <nav className=" NavBar navbar navbar-inverse" > </nav>
        <div className="container">
        <div className="row ">
           <div className="text-center col-md-4 col-md-offset-4">
                    <img src={'profile.png'} alt={" "}/>
                    <h1 style={{"font-size": "4em"}}>Saad Khan</h1>
                    <div style={{"font-size": "1.5em"}}>Web Developer - Graphic Designer</div>
                    <Link className=" margin btn btn-warning btn-lg" to="/portfolio">Portfolio</Link>
                    <Link  className="margin btn btn-primary btn-lg" to="/contact">Contact</Link>
                     
                    </div> 
            </div> 
  
    </div>
    </div>) }
}
     
class Contact extends React.Component {
render(){
    return(
    <div>
  <NavRoutes /> 

    </div> ) }
}

class Portfolio extends React.Component {

render(){
    return(
    <div>
  <NavRoutes /> 
  <div className="text-center">
    <h1 style={{"font-size": "4em", "marginTop": "50px"}}>Porfolio</h1> <hr/>
    <span style={{"font-size": "2em"}} className="caption">Programming Background</span>

    <div className="item">
    <img className="thumbnail margin " src={'js.png'} alt={" "}/>
    <span style={{"font-size": "1.4em"}} className="caption">Javascript</span>
</div>

<div className="item">
    <img className="thumbnail margin " src={'node.png'} alt={" "}/>
    <span style={{"font-size": "1.4em"}} className="caption">Node Js</span>
</div>

<div className="item">
   <img className="thumbnail margin " src={'express.jpg'} alt={" "}/>
    <span style={{"font-size": "1.4em"}} className="caption">Express Js</span>
</div> <hr/>

 <span style={{"font-size": "2em"}} className="caption">Designing Background</span>

<div className="item">
   <img className="thumbnail margin " src={'psd.png'} alt={" "}/>
    <span style={{"font-size": "1.4em"}} className="caption">Adobe Photoshop</span>
</div>

<div className="item">
   <img className="thumbnail margin " src={'ai.png'} alt={" "}/>
    <span style={{"font-size": "1.4em"}} className="caption">Adobe Illustrator</span>
</div>

</div>
 </div> ) 
}
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