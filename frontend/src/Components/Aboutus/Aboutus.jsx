import React,{useState,useEffect} from 'react'
import './Aboutus.css'
import Navbar from '../Navbar/Navbar'
import aboutimg from './about.svg'
import axios from 'axios'
import Footer from '../Footer/Footer'

const Aboutus = () => {

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
        <div className='about'>
            <h1>Get To Know About Us</h1>
            <div className="about_content">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores voluptates eveniet corporis, numquam omnis illo minus rerum esse similique.</h2>
                <img src={aboutimg} alt="about" className='img-fluid'/>
            </div>

            <div className='line mx-auto'></div>
            <h3>What We Are Know For</h3>

            <div className="cards">                
                <div className="card1">
                    <i class="fas fa-hands-helping"></i>
                    <h2>Customer Service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quas repudiandae facere exercitationem dolorum, veritatis obcaecati aliquam aut dignissimos laudantium repellat hic id dolor magni sapiente velit odio officia.</p>
                </div>
                <div className="card2">
                    <i class="fas fa-laugh-beam"></i>
                    <h2>Friendly</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quas repudiandae facere exercitationem dolorum, veritatis obcaecati aliquam aut dignissimos laudantium repellat hic id dolor magni sapiente velit odio officia.</p>
                </div>
                <div className="card3">
                    <i class="fas fa-tools"></i>
                    <h2>Expert service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores quas repudiandae facere exercitationem dolorum, veritatis obcaecati aliquam aut dignissimos laudantium repellat hic id dolor magni sapiente velit odio officia.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Aboutus
