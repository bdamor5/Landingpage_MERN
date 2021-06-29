import React,{useState,useEffect} from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Aboutus from './Components/Aboutus/Aboutus'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import Userprofile from './Components/Userprofile/Userprofile'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
    
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/aboutus' component={Aboutus}/>
      <Route exact path='/signin' component={Signin}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/profile' component={Userprofile}/>
      <Route exact path='/signout' component={Home}/>
      <Redirect to='/'/>
    </Switch>
    </div>
  )
}

export default App
