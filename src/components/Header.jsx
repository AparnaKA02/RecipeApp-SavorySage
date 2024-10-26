import React from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipe } from '../redux/slices/recipesSlice'
import logo from '../assets/logo.png'

const Header = ({ insideHome }) => {
  const dispatch = useDispatch()
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <img className='' style={{ width: '70px' }} src={logo} alt="" />
        <a style={{ fontSize: '60px' }} class="navbar-brand">Savory <span id='title-style'>Sage</span> </a>
        <div class="d-flex" role="search">
          {insideHome &&
            <input onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          }
          {insideHome &&
            <button style={{ color: 'rgb(139, 130, 34)' }} className="btn btn-outline" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>

          }

        </div>
      </div>
    </nav>
  )
}

export default Header
