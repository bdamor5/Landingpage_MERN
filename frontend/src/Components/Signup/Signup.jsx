import React,{useState,useEffect} from 'react'
import './Signup.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useHistory,NavLink } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

const Signup = () => {

    const history = useHistory()
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        age:''
    })

    const [id,setId] = useState('')

    const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSignup = async() =>{
        try{
            const {name,email,password,phone,age} = user
            if(!name || !email || !password || !phone || !age){
                toast.error('Please Fill With Valid Inputs!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }else if(!validator.isEmail(email)){
                toast.error('Please Provide A Valid Email Address!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else{
                const res = await axios.post('http://localhost:8000/api/signup',user,{withCredentials: true})
                console.log(res)

                if(res.status === 201) history.push('/signin')

            }           
        }catch(err){
            toast.error('Invalid User Inputs or Email already exist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setUser({
                name:'',
                email:'',
                password:'',
                phone:'',
                age:''
            })    
        }
    }

    return (
        <>
        <ToastContainer/>
        <Navbar username={user.name}/>
        <div className='signup'>
            <div className='card'>
                <h2>Sign Up</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input name='name' value={user.name} onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name..."/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input name='email' autoComplete='off' value={user.email} onChange={handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input name='password' value={user.password} onChange={handleChange} type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter password name..."/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                    <input name='phone' value={user.phone} onChange={handleChange} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone no. name..."/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
                    <input name='age' value={user.age} onChange={handleChange} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter age name..."/>
                </div>
                <button type="button" onClick={handleSignup} className="btn btn-outline-warning mt-3">Sign Up</button>
                
                <h5 className='mt-3'>Already have an account?<NavLink className='signin' exact to='/signin'>Signin</NavLink></h5> 
            </div>            
        </div>
        </>
    )
}

export default Signup
