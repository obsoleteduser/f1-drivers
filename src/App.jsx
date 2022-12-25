import React, { useContext, useEffect } from 'react'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Favorites } from './pages/Favorites'
import { GlobalContext } from './GlobalContext'
import './App.css'

export const App = () => {

  let {loading, setLoading, data, setData} = useContext(GlobalContext)

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true)
      const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
      const data  =  await response.json()
      setData(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div className='App'>
     <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route index element={<Main></Main>}></Route>
      <Route path='/favorites' element={<Favorites></Favorites>}></Route>
      </Route>
     </Routes>
    </div>
  )
}
