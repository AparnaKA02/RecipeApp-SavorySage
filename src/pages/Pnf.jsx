import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
   <>
    <Header/>
    <div style={{paddingTop:'100px',height:'80vh'}} className='d-flex flex-column align-items-center justify-content-center'>
      <h1 className='font-bolder  mb-2'>404</h1>
      <img width={'300px'} src="https://assets.dochipo.com/editor/animations/404-error/3acd113a-bcf3-4aae-9785-1dbbe6a2cb7c.gif" alt="" />
      <h1 className='d-flex justify-content-center mb-2'> You're Lost!!!</h1>
      <p className='mb-2'>The Page you looking For is not found!!!!</p>
      <p class>Want help?</p>
      <Link to={'/'} className=' p-2 text-center rounded fw-bolder' > Back To Home</Link>
    </div>
   </>
  )
}

export default Pnf
