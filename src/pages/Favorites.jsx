import React, { useCallback, useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import './favorites.css'

export const Favorites = () => {

    const {favorites} = useContext(GlobalContext)
    if(favorites.length){
  return (
    <div className='favorites'>
        <h1>Favorites</h1>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    
                </tr>
            </thead>
            
                {
                   favorites.map(item => (
                        
                        <tr key={item.id}>
                            <td>{item.id}</td>
                        <td>{item.title}</td>
                        
                        </tr>
                        
                    ))
                }
            
        </table>
    </div>
  )}
  else {
    return (
        <div className='empty'>
          <h1>Favorites</h1>
  <h2>You have not added any post!</h2>
        </div>
  )
    }
}
