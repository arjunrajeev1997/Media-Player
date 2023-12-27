import React from 'react'
import { Link } from 'react-router-dom'

function Foot() {
  return (
    <div style={{height:'300px'}} className='container w-300'>
      <div className='footer-content d-flex justify-content-between'>
        <div style={{width:'400px'}} className='title w-25'>
        <h5 className='d-flex'> <i className="fa-solid fa-cloud-arrow-up fa-beat me-2" style={{height:'45px'}}></i>
        Media Player</h5>
        <span>Designed and built with all the love in the world by Bootstrap team with the help of our contributors.</span> <br/>
        <span>Code licensed MIT,docs CC BY 3.0.</span><br/>
        <span>Currently v5.3.2</span>
        </div>
      <div className="links d-flex flex-column ">
        <h5>Links</h5>
        <Link to={'/'} style={{color:'white'}} className='text-decoration-none' >Landing Page</Link>
        <Link to={'/home'} style={{color:'white'}} className='text-decoration-none' >Home</Link>
        <Link to={'/history'} style={{color:'white'}} className='text-decoration-none' >Watch History</Link>

      </div>
      <div className="guides d-flex flex-column">
      <h5>Guides</h5>
        <a style={{color:'white'}} className='text-decoration-none' href="">React</a>
        <a style={{color:'white'}} className='text-decoration-none' href="">React Bootstrap</a>
        <a style={{color:'white'}} className='text-decoration-none' href="">React Routing</a>
      </div>
      <div className="contact">
        <h5>Contact Us</h5>
        <div className="d-flex">
          <input placeholder="Enter your mail" type="text" className='form-control' />
          <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
       <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
       <i style={{height:'50px'}} className="fa-solid fa-envelope fa-2x"></i>
       <i style={{height:'50px'}} className="fa-brands fa-twitter fa-2x"></i>
       <i style={{height:'50px'}} className="fa-brands fa-github fa-2x"></i>
       <i style={{height:'50px'}} className="fa-brands fa-facebook fa-2x"></i>
       <i style={{height:'50px'}} className="fa-brands fa-instagram fa-2x"></i>
       <i style={{height:'50px'}} className="fa-brands fa-linkedin fa-2x"></i>
        
        
      </div> 
        
      </div>
      </div>
      <p className='text-center mt-4'>Copyright & copy; 2023 Media Player . Built with React</p>
    </div>
  )
}

export default Foot 