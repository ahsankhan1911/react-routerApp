import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


// const Links = () => (
//   <nav>
//   <Link to="/">Home</Link>
//   <Link to="/about">About</Link>

//   </nav>
// )

const NavRoutes =() => (
   <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" >React Router App</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
       
      <li><Link to="/about">About</Link> </li>
      <li><Link to="/contact">Contact</Link> </li>
      <li><Link to="/login">Log In</Link> </li>
      <li><Link to="/signup">Sign up</Link> </li>
    </ul>
  </div>
</nav>
)
 
const Home = () => (
 <div>
  <NavRoutes /> 
<h1>HELLO REACT</h1><img src={'./favicon.ico'} alt={"Ahsan"}/>
</div>
)

const About = () => (
  
  <div>
    <NavRoutes /> 
    <div className="container-fluid">
  <h2>About React</h2>
  <div className="panel panel-default">
    <div className="panel-body">JavaScript library. ... In computing, React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations
      React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML component framework for PHP.[8] It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013. React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React.js Conf in February 2015 and open-sourced in March 2015. On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces.[10] React Fiber will become the foundation of any future improvements and feature development of the React framework.
    </div>
    </div>
  </div>
</div>

)
     
const Contact = () => (
  
  <div>
    <NavRoutes /> 
    <div className="container-fluid">
       <form>
  <div className="form-group">
    <label for="email">Firstname</label>
    <input type="text" className="box" id="email"/>
  </div>
  <div className="form-group">
    <label for="pwd">Lastname:</label>
    <input type="text" className="form-control" id="pwd"/>
  </div>
  <div className="checkbox">
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
  </div>
</div>

)





class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      value2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    this.setState({value: event.target.value});
  } 

    handleSubmit(event) {

  <h1>Hellooooooo</h1>
  
    event.preventDefault();
  }

   render() {
   return (
     <div>
              <form onSubmit={this.handleSubmit}>
      
       <div className="form-group">
          <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
    </div>
    {/* <div className="form-group">
          <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
    </div> */}
        <input type="submit" value="Submit" />
        
      </form>
   {console.log(this.props.children)}
    </div>
   );
}
}
const App = () => (
 <Router>

   <div>
      {/* <Links/>  */}
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     {/* <Route exact path="/login" component={LogIn}/> */}
      <Route exact path="/signup" component={SignUp}/> 
    
   </div>
 </Router>

);

export default App;