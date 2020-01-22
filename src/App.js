import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Productlist from './Components/Productlist'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'
import Modal from './Components/Modal'


function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
    
    <Route exact path="/" component={Productlist}/>
    <Route path="/Details" component={Details}/>
    <Route path="/Cart" component={Cart}/>
    <Route component={Default}/>
  
    </Switch>
    <Modal></Modal>
    </React.Fragment>
      );
  
  
}

export default App;
