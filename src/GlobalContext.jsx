import React, { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

export const GloablProvider = ({children})=>{

    const [favorites, setFavorites] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const values = {
        favorites,
        setFavorites,
        data,
        setData,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        postsPerPage: 10,
        totalPosts: data.length
    }


    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}