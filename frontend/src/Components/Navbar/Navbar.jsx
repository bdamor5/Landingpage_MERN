import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useHistory } from 'react-router'
import axios from 'axios'

const Navbar = ({username}) => {

  const history = useHistory()

  const Signout = async() =>{
    try{
      await axios.get('http://localhost:8000/api/signout',{withCredentials:true})
      history.push('/signin')   

    }catch(err){
        console.log(err)
    }  
  }  

    return (
      <>
        <div>  
      <nav className="navbar navbar-expand-lg navbarbg navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><span className='D'>D</span>ream</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact activeClassName='activelink' className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName='activelink' className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName='activelink' className="nav-link" to="/aboutus">Aboutus</NavLink>
              </li>
              </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarColor03">
                  
                  {
                    username
                    ?
                    (
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <NavLink exact className="nav-link" to="/signout" onClick={Signout}>Signout</NavLink>
                          </li>

                          <li className='nav-item my-auto mx-4'>
                              <i className="far fa-user-circle" title={`${username}'s Profile`} onClick={()=>{history.push('/profile')}}></i>
                          </li>
                      </ul>
                    )
                    :
                    (
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                            <NavLink exact activeClassName='activelink' className="nav-link" to="/signin">Signin</NavLink>
                          </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='activelink' className="nav-link" to="/signup">Signup</NavLink>
                        </li>        
                      </ul>
                    )
                  }
            </div>    
        </div>
      </nav>
    </div>
</>

    )
}

export default Navbar
