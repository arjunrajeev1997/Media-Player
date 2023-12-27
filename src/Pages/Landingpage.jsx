import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Landingpage() {
  return (
    <div className='container'>
     <div className="row align-items-center m-5">
      <div className="d-flex justify-content-between align-items-center">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Media Player App. will allow us to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities.</p>
        <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img className='img-fluid' src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </div>
  
    </div>
    </div>
    <div className="features mb-5">
      <h3 className='text-center'>Features </h3>
      <div className="cards mt-5 d-flex justify-content-between">
         {/*card 1*/}
         <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
           User can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
      {/*card 2*/}
      <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
           User can categorise the videos according to their preferences using drag and drop features
        </Card.Text>
      </Card.Body>
    </Card>
      {/*card 3*/}
      <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
           User are able to see the history of watched videos
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div> 
    <div className="row mt-5 border-rounded align-items-center p-5">
    <div className="col-lg-5">
      <h3 className='text-warning'>Simple,Fast and Powerful</h3>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non neque quibusdam repudiandae laboriosam</p>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non neque quibusdam repudiandae laboriosam</p>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non neque quibusdam repudiandae laboriosam</p>

    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-6">
      <iframe width="703" height="395" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
   
    </div>
   

    </div>

  )
}

export default Landingpage