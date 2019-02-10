import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SideNavBar from './components/SideNavBar';

class App extends Component {
  constructor(){
    super();
    this.state={name:"jagan"};
    
    }
  render() {
    setTimeout(()=>{
      this.setState({name:"sunny"}); 
       },1000)
    return (
      
      <div className="App">
      <NavigationBar/>
      <SideNavBar/>
        <div class="col-md-10">
        {this.state.name}
       </div>
      </div>
    );
  }
}

export default App;
