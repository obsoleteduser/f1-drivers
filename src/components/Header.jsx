import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'
import './header.css'

export const Header = () => {
  let {favorites} = useContext(GlobalContext)
  return (
    <header className='header'>
        <Link className="link" to='/' >Main</Link>
        <Link className="link" to='/favorites' >Favorites <sup>{favorites.length}</sup></Link>
    </header>
  )
}
