import React,{useState} from 'react'
import './Signin.css'
import Navbar from '../Navbar/Navbar'
import {useHistory,NavLink} from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const history = useHistory()

    const handleSignin = async() =>{
        if(!email || !password){
            toast.error('Please fill all the fields!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            try{
                await axios.post('http://localhost:8000/api/signin',{email,password},{withCredentials: true})
                history.push('/')
            }
            catch(err) {
                toast.error('Invalid Credentials , try again!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    setEmail('')
                    setPassword('')
            }

            
        }           
            
    }

    return (
        <>         
        <ToastContainer/>
        
        <Navbar username={''}/>

        <div className='signin'>
            <div className='card'>
                <h2>Signin Here</h2>
                
                <div className='email'>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div className='password'>
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password..."/>
                </div>
                <button onClick={handleSignin} type="button" class="btn btn-outline-success mt-3">Sign In</button>
                <h5 className='mt-3'>New Here?<NavLink className='signup' exact to='/signup'>Signup</NavLink></h5> 
            </div>
                       
        </div>
        </>
    )
}

export default Signin
