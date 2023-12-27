import React,{useState} from 'react'
import { Button,Form,FloatingLabel,Modal } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {
  const [uploadVideo,SetUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //https://www.youtube.com/watch?v=IqwIOlhfCak&t=1s
  //"https://www.youtube.com/embed/IqwIOlhfCak" 
  //if user puts url to get embed code from url use this logic
  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      SetUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      SetUploadVideo({...uploadVideo,link:""})
    }
  }
  const handleUpload = async ()=>{
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete. please fill the form completely!!!")
    }else{
      //store upload video in json server
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        //success
        handleClose()
        //reset uploadvideo
        SetUploadVideo({id:"",caption:"",url:"",link:""})
        //share result.data to view component
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }

  }

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow}  style={{color:'white'}} className='btn'><i style={{height:'40px'}} className="fa-solid fa-photo-film fa-2x"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Uploading Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Details !!!</p>
        <FloatingLabel
        controlId="floatingInputId"
        label="Uploading Video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video id" onChange={e=>SetUploadVideo({...uploadVideo,id:e.target.value})} /> 
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputCaption" label="Uploading Video Caption"
      className='mb-3'>
        <Form.Control type="text" placeholder="Uploading Video Caption" onChange={e=>SetUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputimg" label="Uploading video Image URL"
      className='mb-3'>
        <Form.Control type="text" placeholder="Uploading Video Image URL" onChange={e=>SetUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputLink" label="Uploading Video Youtube Link"
      className='mb-3'>
        <Form.Control type="text" placeholder="Uploading Video Youtube Link" onChange={getYoutubeEmbedLink} />
      </FloatingLabel>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add