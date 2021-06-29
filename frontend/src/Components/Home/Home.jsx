import React,{useEffect,useState} from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import homeimg from './home.svg'
import axios from 'axios'
import Footer from '../Footer/Footer'

const Home = () => {

    const [name,setName] = useState('') 

    const getUser = async() =>{
        try{
        const res = await axios.get('http://localhost:8000/api/getuserprofile',{withCredentials: true})
        console.log(res)
        
        if(res.data === null) setName('')
        else setName(res.data.name)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <>
        <Navbar username={name}/>
        <div className='home'>
            <div className='home_content'>
                <div className="home_head">
                    <h1>Welcome {name} to our world!</h1>
                    <h4>We turn your ideas into reality</h4>
                    <button type="button" class="btn btn-outline-light">More Info</button>
                </div>                
                <img src={homeimg} alt="img" className='img-fluid' />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home
