import React,{useState,useEffect} from 'react'
import './Products.css'
import Navbar from '../Navbar/Navbar'
import productimg from './product.svg'
import axios from 'axios'
import Footer from '../Footer/Footer'

const Products = () => {

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
        <div className='products'>
        <hr className='w-60'/>
            <h1>Some Of Our Products</h1>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={productimg} className="d-block mx-auto img-fluid" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, autem?</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={productimg} className="d-block mx-auto img-fluid" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, autem?</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={productimg} className="d-block mx-auto img-fluid" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, autem?</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Products
