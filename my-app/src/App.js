import React,{useState} from 'react'
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar'
//import Card from './components/Card'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DetailLinks from "./components/DetailLinks"

import ContactUs from './components/ContactUs';
import Dashboard from "./components/Dashboard";
import Donate from './components/Donate';

import Footer from  "./components/Footer";
import { getUser, removeUserSession } from './utils/Common';
import CartCard from "./components/CartCard"
import NavbarUser from "./components/NavbarUser"
import OrderDetails from './components/OrderDetails';
//import Footer from './components/Footer';

function App() {
   //const [loggedIn , setLoggedIn] = useState(false)
   // const loggedIn = getUser()
  // //   alert ("logged is" + loggedIn)
  // const handleLoggedInStatus =() =>{

  // }
  const user = getUser();
 
const logout = () => {
   
    // setLoggedIn(!loggedIn);
     removeUserSession();
     
  }
  return (
    <React.Fragment>
    
    <BrowserRouter>
   
    <NavbarUser />
    <Route exact path="/">
    {user != null ? <Redirect to="/dashboard" /> : <Home/>}
    
  </Route>
    
    <Route path='/aboutus' component={AboutUs}></Route>
    <Route path='/contactus' component={ContactUs}></Route>
    <Route path='/signin' component={SignIn} >
    {user != null ? <Redirect to="/dashboard" /> : <SignIn/>}
    </Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/donate' component={Donate}></Route>
    <Route path='/detail' component={DetailLinks}></Route>
    <Route path='/mycart' component={CartCard}></Route>
    <Route path='/orders' component={OrderDetails}></Route>
    
    <Route path='/signup' component={SignUp}></Route>
       <Footer />
    </BrowserRouter>

    
   
    </React.Fragment>
  );
}

export default App;
