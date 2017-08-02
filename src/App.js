import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Signedup from './Signedup'

// const Links = () => (
//   <nav>
//   <Link to="/">Home</Link>
//   <Link to="/about">About</Link>

//   </nav>
// )

const NavRoutes =() => (
   <nav className="navbar navbar-inverse" style={{"border-radius": "0"}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" >React Router App</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
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
 constructor(props) {
    super(props);
    this.state = {input: '',
                  input2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: this.refs.input.value,
                   input2: this.refs.input2.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <div className="row form-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" ref="input"/>
          </div>
          <div className="row form-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" ref="input1"/>
          </div>
     
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

class SignedUp extends React.Component {
 

    render () {
        return (
            <div>
                <h1>Yout account has been submitted</h1>
            </div>
        )
    }


}


const App = () => (
 <Router>

   <div>
      {/* <Links/>  */}
     <Route exact path="/" component={Home}/>
     <Route exact path="/contact" component={Contact}/>
     {/* <Route exact path="/login" component={LogIn}/> */}
      <Route exact path="/signup" component={SignUp}/> 
    
   </div>
 </Router>

);

export default App;