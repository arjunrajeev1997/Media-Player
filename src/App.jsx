
import './App.css'
import Header from './Components/Header'
import Foot from './Components/Foot'
import Landingpage from './Pages/Landingpage'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
function App() {

  return (
  <>
    <Header/>
    <Routes>
      
     <Route path='/' element={<Landingpage/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/history' element={<WatchHistory/>} />
     
    </Routes>
    <Foot/>
    
    </>
  )
}

export default App
