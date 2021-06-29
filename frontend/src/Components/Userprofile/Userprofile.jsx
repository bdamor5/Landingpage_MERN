import React,{useState,useEffect} from 'react'
import './Userprofile.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useHistory } from 'react-router'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

const Userprofile = () => {

    const history = useHistory()
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        age:''
    })

    const [id,setId] = useState('')

    const getUser = async() =>{
        try{
        const res = await axios.get('http://localhost:8000/api/getuserprofile',{withCredentials: true})
        //console.log(res.data)
        
        res.data.password = ''
        setUser(res.data)

        setId(res.data._id)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }    

    const handleEdit = async() =>{
        try{
            const {name,email,password,phone,age} = user
            if(!name || !email || !password || !phone || !age){
                toast.error('Please fill all the fields!', {
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
                }else{
                const res = await axios.put(`http://localhost:8000/api/userprofile/update/${id}`,user,{withCredentials: true})
                console.log(res)

                if(res.status === 200) history.push('/')
                else {
                    toast.error('Error Occured , Please Try Again!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });             
                }
            }           
        }catch(err){
            toast.error('Error Occured , Please Try Again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });            
            }    
    }

    const handleDelete = async() =>{
            try{
                const res = await axios.delete(`http://localhost:8000/api/userprofile/delete/${id}`,{withCredentials: true})
                history.push('/signup')    

            }catch(err){
                toast.error('Error Occured , Please Try Again!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });            
                }
    }

    return (
        <>
        <ToastContainer/>
        <Navbar username={user.name}/>
        <div className='profile'>
            <div className='card'>
                <h2>User Profile</h2>
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
            <button type="button" onClick={handleEdit} className="btn btn-outline-primary mb-3">Edit Profile</button>
            <button type="button" onClick={handleDelete} className="btn btn-outline-danger">Delete Profile</button>
            </div>
            
        </div>
        </>
    )
}

export default Userprofile
