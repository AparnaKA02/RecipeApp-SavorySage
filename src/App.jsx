import { Route, Routes } from 'react-router-dom'
import './App.css'
import View from './pages/View'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pnf from './pages/Pnf'


function App() {


  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App